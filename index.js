// Import Express
import express from 'express'

// Import dotenv
import dotenv from 'dotenv'

// Import testRoutes
import testRoutes from './routes/testRoutes.js'

// Import productRoutes
import productRoutes from './routes/productRoutes.js'

// Import userRoutes
import userRoutes from './routes/userRoutes.js'

// Import connectDB
import connectDB from './utils/db.js'

// Import swagger
import setupSwagger from './utils/swagger.js'

// Import CORS
import cors from 'cors'

// Load environment variables
dotenv.config()

// Create a new Express application
const app = express()

// Use JSON middleware
app.use(express.json())

// Middleware for CORS
app.use(cors(
  {
    // origin: 'http://localhost:4200, http://www.example.com, http://127.0.0.1:5500',
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
))

// Setup Swagger
setupSwagger(app)

// Use testRoutes
app.use('/api', testRoutes)

// Use productRoutes
app.use('/api/products', productRoutes)

// Use userRoutes
app.use('/api/users', userRoutes)

// เริ่มต้น server
const startServer = async () => {
  try {
    // เชื่อมต่อ MongoDB ก่อน
    await connectDB()
    
    // จากนั้นค่อยเริ่ม server
    app.listen(process.env.PORT, () => {
      console.log(`Server started on http://${process.env.HOST}:${process.env.PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()