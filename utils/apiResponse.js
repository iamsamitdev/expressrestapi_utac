// ฟังก์ชันสำหรับสร้าง success response ของ API
export const successResponse = (data, message = 'Success') => ({
  success: true,
  message,
  data
})

// ฟังก์ชันสำหรับสร้าง error response ของ API
export const errorResponse = (message, code = 500) => ({
  success: false,
  message,
  code
})