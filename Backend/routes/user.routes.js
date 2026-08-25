import express from 'express'
import { registerUser, loginUser, getUser } from '../controllers/user.controllers.js'
import isAuthenticated from '../middlewares/authMiddleware.js'

const userRoutes = express.Router()

// Register User
userRoutes.post('/register', registerUser)

// Login User
userRoutes.post('/login', loginUser)

// Authenticate the user
userRoutes.get('/me', isAuthenticated, getUser)

export default userRoutes