const Joi = require('joi')

module.exports = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required.',
    'string.email': 'Email must be a valid email address.',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required.',
  }),
})
