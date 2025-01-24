import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import dotenv from 'dotenv'

dotenv.config()

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ExpressJS with MongoDB API',
      version: '1.0.0',
      description: 'API documentation for the ExpressJS with MongoDB',
    },
    servers: [
      {
        url: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
      },
    ],
  },
  apis:[
    './routes/*.js',
  ]
}

const swaggerSpec = swaggerJSDoc(options)

const setupSwagger = (app) => {
  app.use('/api-docs', (_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
  })

  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      customSiteTitle: 'ExpressJS with MongoDB API',
      explorer: true,
      swaggerOptions: {
        filter: true,
      }
    })
  )
}

export default setupSwagger