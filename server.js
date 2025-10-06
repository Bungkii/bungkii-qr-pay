const express = require('express');
const path = require('path');
const app = express();

// serve ไฟล์ static จาก public
app.use(express.static(path.join(__dirname, 'public')));

// route สำหรับ API / backend
app.use(express.json());

// ตัวอย่าง route POST
app.post('/create-qr', (req, res) => {
  const { amount } = req.body;
  // สร้าง QR Code จาก KBank Open API
  res.json({ qrUrl: `https://promptpay.io/0925384159/${amount}` });
});

// ถ้าเข้าที่ / ให้ส่ง index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ใช้ port ของ Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
