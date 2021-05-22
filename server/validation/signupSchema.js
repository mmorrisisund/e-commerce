const Joi = require('joi')

module.exports = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required.',
    'string.email': 'Email must be a valid email address.',
  }),
  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required()
    .messages({
      'string.empty': 'Password is required.',
      'string.pattern.base': 'Does not meet requirements.',
    }),
  passwordConfirm: Joi.string().required().valid(Joi.ref('password')).messages({
    'string.empty': 'Password confirm is required.',
    'any.only': 'Passwords must match.',
  }),
})
