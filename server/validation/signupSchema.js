const Joi = require('joi')

module.exports = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  passwordConfirm: Joi.string().required().valid(Joi.ref('password')),
})
