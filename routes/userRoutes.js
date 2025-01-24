import express from 'express'
import * as userController from '../controllers/userController.js'

const router = express.Router()

/**
 * @swagger
 * tags:
 *  name: users
 *  description: API for user authentication
*/

// สร้างเส้นทางสำหรับการลงทะเบียนผู้ใช้ใหม่
/**
 * @swagger
 * /api/users/register:
 *  post:
 *    summary: Register a new user
 *    tags: [users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              fullname:
 *                type: string
 *              email:
 *                type: string
 *              tel:
 *                type: string
 *    responses:
 *      201:
 *        description: User registered successfully
*/
router.post('/register', userController.registerUser)

// สร้างเส้นทางสำหรับการเข้าสู่ระบบ
/**
 * @swagger
 * /api/users/login:
 *  post:
 *    summary: Register a new user
 *    tags: [users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      201:
 *        description: User logged in successfully
 *        content:
 *          application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: New access token
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 */
router.post('/login', userController.loginUser)

export default router