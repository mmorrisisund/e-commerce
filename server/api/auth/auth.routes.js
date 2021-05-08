const validate = require('../../middleware/validate')
const signupSchema = require('../../validation/signupSchema')
const loginSchema = require('../../validation/loginSchema')
const { signUp, login, logout } = require('./auth.controllers')

module.exports = Router => {
  const router = new Router()

  router.post('/signup', validate(signupSchema), signUp)
  router.post('/login', validate(loginSchema), login)
  router.post('/logout', logout)

  return { prefix: '/auth', router }
}
