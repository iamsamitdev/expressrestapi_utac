import express from 'express'
import * as productController from '../controllers/productController.js'

const router = express.Router()

// Get All Products
router.get('/', productController.getAllProducts)

// Create a new Product
router.post('/', productController.createProduct)

export default router