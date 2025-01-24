import mongoose from "mongoose"
import dotenv from "dotenv"

// ใช้ process.cwd() เพื่ออ้างอิงถึง root directory โดยตรง
// dotenv.config({ path: `${process.cwd()}/.env` })
dotenv.config()

// ฟังก์ชันเชื่อมต่อฐานข้อมูล MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1) // ออกจาก process หรือหยุดการทำงานของโปรแกรม
  }
}

// connectDB()

export default connectDB