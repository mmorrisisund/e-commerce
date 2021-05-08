const Joi = require('joi')

module.exports = Joi.object({
  name: Joi.string().required(),
  type: Joi.any().valid('dog', 'cat').required(),
  dob: Joi.date().timestamp().required(),
  description: Joi.string().required(),
  sex: Joi.any().valid('male', 'female').required(),
  spayed: Joi.boolean().optional(),
  breed: Joi.string().required(),
  image: Joi.string().uri().optional(),
})
