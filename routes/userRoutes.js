import express from 'express'
import * as userController from '../controllers/userController.js'

const router = express.Router()

// สร้างเส้นทางสำหรับการลงทะเบียนผู้ใช้ใหม่
router.post('/register', userController.registerUser)

// สร้างเส้นทางสำหรับการเข้าสู่ระบบ
router.post('/login', userController.loginUser)

export default router