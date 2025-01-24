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

// Load environment variables
dotenv.config()

// Create a new Express application
const app = express()

// Use JSON middleware
app.use(express.json())

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