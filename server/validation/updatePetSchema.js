const Joi = require('joi')

module.exports = Joi.object({
  name: Joi.string().optional(),
  type: Joi.any().valid('dog', 'cat').optional(),
  dob: Joi.date().timestamp().optional(),
  description: Joi.string().optional(),
  sex: Joi.any().valid('male', 'female').optional(),
  spayed: Joi.boolean().optional(),
  breed: Joi.string().optional(),
  image: Joi.string().uri().optional(),
}).unknown(true)
