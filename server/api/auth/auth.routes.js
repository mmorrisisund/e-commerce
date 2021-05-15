const validate = require('../../middleware/validate')
const signupSchema = require('../../validation/signupSchema')
const loginSchema = require('../../validation/loginSchema')
const cloudinarySchema = require('../../validation/cloudinarySchema')
const {
  signUp,
  login,
  logout,
  getCloudinarySignature,
  getUser,
} = require('./auth.controllers')
const protect = require('../../middleware/protect')

module.exports = Router => {
  const router = new Router()

  router.post('/me', protect, getUser)
  router.post('/signup', validate(signupSchema), signUp)
  router.post('/login', validate(loginSchema), login)
  router.post('/logout', logout)
  router.post('/cloudinary', validate(cloudinarySchema), getCloudinarySignature)

  return { prefix: '/auth', router }
}
