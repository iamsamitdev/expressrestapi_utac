import User from "../models/userModel.js"

// สร้างฟังก์ชันสำหรับการลงทะเบียนผู้ใช้ใหม่ โดยสร้างฟังก์ชันชื่อ registerUser
export const registerUser = async (
  username,
  password,
  fullname,
  email,
  tel
) => {
  // สร้าง instance ของ User โดยใช้ข้อมูลที่ได้รับมาจาก client
  const user = new User({
    username,
    password,
    fullname,
    email,
    tel
  })

  // บันทึกข้อมูลลงฐานข้อมูล
  return await user.save()
}

// สร้างฟังก์ชันสำหรับการเข้าสู่ระบบ โดยสร้างฟังก์ชันชื่อ loginUser
export const loginUser = async (username) => {
  // ค้นหาข้อมูลผู้ใช้จากฐานข้อมูล
  const user = await User.findOne({ username })
  if (!user) {
    throw new Error('User not found')
  }
  return user
}