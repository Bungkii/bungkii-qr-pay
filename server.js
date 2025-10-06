
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static("public"));

const KBANK_URL = "https://openapi.kasikornbank.com/v1/qr-payment/qrcode/create";

app.post("/create-qr", async (req, res) => {
  const { amount, ref1 } = req.body;
  try {
    const response = await fetch(KBANK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-ibm-client-id": process.env.KBANK_CONSUMER_ID,
        "x-ibm-client-secret": process.env.KBANK_CONSUMER_SECRET
      },
      body: JSON.stringify({
        merchantId: process.env.MERCHANT_ID,
        terminalId: process.env.TERMINAL_ID,
        invoiceNo: ref1 || "REF001",
        amount: amount,
        currencyCode: "764"
      })
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Cannot create QR" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
