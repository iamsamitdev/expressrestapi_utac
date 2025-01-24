import bcrypt from 'bcryptjs'
import * as jwtUtils from '../utils/jwtUtils.js'
import * as userService from '../services/userService.js'
import { successResponse, errorResponse } from '../utils/apiResponse.js'

// สร้างฟังก์ชันสำหรับการลงทะเบียนผู้ใช้ใหม่ โดยสร้างฟังก์ชันชื่อ registerUser
export const registerUser = async (req, res) => {
  try {
    // ดึงข้อมูลจาก body ของ request
    const { username, password, fullname, email, tel } = req.body

    // เข้ารหัสลับรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await userService.registerUser(
      username,
      hashedPassword,
      fullname,
      email,
      tel
    )

    return res.status(201).json(
      successResponse(newUser, 'User registered successfully')
    )
  } catch (error) {
    if (error.message.includes('duplicate key')) {
      return res.status(409).json(
        errorResponse('Username or email already exists', 409)
      )
    }
    return res.status(500).json(
      errorResponse('Error registering user: ' + error.message)
    )
  }
}

// ฟังก์ชันสำหรับเข้าสู่ระบบ
export const loginUser = async (req, res) => {
  try {
    // ดึงข้อมูลจาก body ของ request
    const { username, password } = req.body

    // ค้นหาข้อมูลผู้ใช้จากฐานข้อมูล
    const user = await userService.loginUser(username)

    // ถ้าไม่พบผู้ใช้ ให้ส่งข้อความว่า 'Invalid Username'
    if (!user) {
      return res.status(401).json(
        errorResponse('Invalid credentials', 401)
      )
    }

    // เปรียบเทียบรหัสผ่านที่รับมากับรหัสผ่านในฐานข้อมูล
    const isPasswordValid = await bcrypt.compare(password, user.password)

    // ถ้ารหัสผ่านไม่ถูกต้อง ให้ส่งข้อความว่า 'Invalid Password'
    if (!isPasswordValid) {
      return res.status(401).json(
        errorResponse('Invalid credentials', 401)
      )
    }

    // สร้าง token ด้วยฟังก์ชัน generateToken จากไฟล์ jwtUtils
    const accessToken = jwtUtils.generateAccessToken(user)

    return res.status(200).json(
      successResponse({
        user: {
          id: user._id,
          username: user.username,
          fullname: user.fullname,
          email: user.email,
          tel: user.tel
        }, 
        accessToken,
      }, 'Login successful')
    )
  } catch (error) {
    return res.status(500).json(
      errorResponse('Error logging in: ' + error.message)
    )
  }
}
