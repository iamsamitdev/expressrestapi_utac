import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const ACCESS_TOKEN_SECRET = process.env.JWT_SECRET
const ACCESS_TOKEN_EXPIRY = process.env.JWT_EXPIRY

// Generate Access Token (ออก token ให้ user)
export const generateAccessToken = (userId) => {
  return jwt.sign(
    { userId }, 
    ACCESS_TOKEN_SECRET, 
    { expiresIn: ACCESS_TOKEN_EXPIRY })
}

// Verify Access Token (ตรวจสอบ token ว่าถูกต้องหรือไม่)
export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, ACCESS_TOKEN_SECRET)
  } catch (error) {
    return null
  }
}