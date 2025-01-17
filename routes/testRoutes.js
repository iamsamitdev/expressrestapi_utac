import express from 'express'

const router = express.Router()

// Route GET /
router.get('/', (req, res) => {
  res.send('Hello World!')
})

// Route GET about
router.get('/about', (req, res) => {
  res.send('About Us')
})

// Route POST /login
router.post('/login', (req, res) => {
  res.send('Login Page')
})

// Route PUT /user
router.put('/user', (req, res) => {
  res.send('Edit User Page')
})

// Route DELETE /user
router.delete('/user', (req, res) => {
  res.send('Delete User Page')
})

export default router