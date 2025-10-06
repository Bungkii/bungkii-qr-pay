
# Bungkii QR Pay (Vercel Ready)

ระบบสร้าง QR Payment ผ่าน KBank Open API พร้อม deploy บน Vercel

## การติดตั้ง / Deploy

1. แตกไฟล์ ZIP
2. สร้างไฟล์ `.env` จาก `.env.example` ใส่ค่า Consumer ID, Secret, Merchant ID, Terminal ID
3. ติดตั้ง dependencies:
```
npm install
```
4. รัน server:
```
node server.js
```
5. เปิดเว็บเบราว์เซอร์ไปที่ `http://localhost:3000`

### Deploy บน Vercel
```
vercel
```
ใส่ Environment Variables จาก `.env` บน Vercel Dashboard แล้ว Deploy ใหม่
