const validate = require('../../middleware/validate')
const addPetSchema = require('../../validation/addPetSchema')
const updatePetSchema = require('../../validation/updatePetSchema')
const allPetsSchema = require('../../validation/allPetsSchema')
const {
  addPet,
  getPet,
  getAllPets,
  updatePet,
  deletePet,
} = require('./pets.controllers')

module.exports = Router => {
  router = new Router()

  router.post('/add', validate(addPetSchema), addPet)
  router.post('/single', getPet)
  router.post('/all', validate(allPetsSchema), getAllPets)
  router.post('/update', validate(updatePetSchema), updatePet)
  router.post('/delete', deletePet)

  return { prefix: '/pets', router }
}
