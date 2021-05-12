const Joi = require('joi')

module.exports = Joi.object({
  name: Joi.string()
    .required()
    .messages({ 'any.required': 'A name is required' }),
  type: Joi.any().valid('dog', 'cat').required().messages({
    'any.required': 'A pet type is required',
    'any.only': 'Pet type must be dog or cat',
  }),
  dob: Joi.date().timestamp().required().messages({
    'date.format': 'Date of birth must be a javascript timestamp',
    'any.required': 'Date of birth is required',
  }),
  description: Joi.string()
    .required()
    .messages({ 'any.required': 'A description is required' }),
  sex: Joi.any().valid('male', 'female').required().messages({
    'any.only': 'Sex must be male or female',
    'any.required': 'A sex is required',
  }),
  spayed: Joi.boolean().optional(),
  breed: Joi.string()
    .required()
    .messages({ 'any.required': 'A breed is required' }),
  image: Joi.string().uri().optional().messages({
    'string.uri': 'Image must be a valid URI',
  }),
  location: Joi.string().optional(),
})
