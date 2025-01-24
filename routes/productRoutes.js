import express from 'express'
import * as productController from '../controllers/productController.js'
import authenticateJWT from '../middlewares/authMiddleware.js'

const router = express.Router()

/**
 * @swagger
 * tags:
 *  name: products
 *  description: API for products in the store
*/

// อ่านข้อมูลสินค้าทั้งหมด
/**
 * @swagger
 * /api/products:
 *  get:
 *   summary: Get all products
 *   tags: [products]
 *   security:
 *      - BearerAuth: []
 *   responses:
 *    200:
 *      description: List of all products
 *      content:
 *       application/json:
 *        schema:
 *          type: array
 *          items:
 *           $ref: '#/components/schemas/Product'
*/
router.get('/', authenticateJWT, productController.getAllProducts)

// ค้นหาข้อมูลสินค้าตามชื่อ
/**
 * @swagger
 * /api/products/search:
 *   get:
 *     summary: Search products by name
 *     tags: [products]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the product to search for
 *     responses:
 *       200:
 *         description: List of products matching the search criteria
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/search', authenticateJWT, productController.searchProductByName)

// อ่านข้อมูลสินค้าเฉพาะตาม id 
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [products]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: The product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.get('/:id', authenticateJWT, productController.getProductById)

// สร้างข้อมูลสินค้า
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [products]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "iPhone 14"
 *               price:
 *                 type: [number, string]
 *                 example: 999.99
 *                 description: "Price as number or string (will be converted to number)"
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
router.post('/', authenticateJWT, productController.createProduct)

// อัปเดตข้อมูลสินค้า
/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update an existing product
 *     tags: [products]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "iPhone 14 Pro"
 *               price:
 *                 type: number
 *                 example: 1099.99
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */
router.put('/:id', authenticateJWT, productController.updateProduct)

// ลบข้อมูลสินค้า
/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [products]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
router.delete('/:id', authenticateJWT, productController.deleteProduct)

export default router