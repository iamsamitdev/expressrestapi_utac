import express from 'express'
import * as productController from '../controllers/productController.js'

const router = express.Router()

// อ่านข้อมูลสินค้าทั้งหมด
router.get('/', productController.getAllProducts)

// ค้นหาข้อมูลสินค้าตามชื่อ
router.get('/search', productController.searchProductByName)

// อ่านข้อมูลสินค้าเฉพาะตาม id 
router.get('/:id', productController.getProductById)

// สร้างข้อมูลสินค้า
router.post('/', productController.createProduct)

// อัปเดตข้อมูลสินค้า
router.put('/:id', productController.updateProduct)

// ลบข้อมูลสินค้า
router.delete('/:id', productController.deleteProduct)

export default router