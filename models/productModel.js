import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  timestamps: true,
  versionKey: false // ปิดการใช้งาน versionKey
  // Version key ใช้สำหรับการจัดการ concurrent modifications
  // ถ้าแอพของคุณไม่ได้ใช้ feature นี้ สามารถปิดได้อย่างปลอดภัย
  // การปิด version key จะช่วยลดขนาดของ document และทำให้ response ดูสะอาดขึ้น
})

export default mongoose.model("Product", productSchema)