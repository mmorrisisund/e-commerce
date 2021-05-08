const validate = require('../../middleware/validate')
const addPetSchema = require('../../validation/addPetSchema')
const { addPet } = require('./pets.controllers')

module.exports = Router => {
  router = new Router()

  router.post('/add', validate(addPetSchema), addPet)

  return { prefix: '/pets', router }
}
