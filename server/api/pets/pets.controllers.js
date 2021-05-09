const Pet = require('../../models/pet')
const catchAsync = require('../../utils/catchAsync')

exports.addPet = catchAsync(async (req, res) => {
  const pet = new Pet(req.body)
  await pet.save()

  res.json({ status: 'success', data: { pet } })
})

exports.getPet = catchAsync(async (req, res) => {
  const { id } = req.body
  const pet = await Pet.findById(id)

  if (pet) {
    res.json({ status: 'success', data: { pet } })
  } else {
    res.json({ status: 'fail', data: { message: 'Pet not found' } })
  }
})

exports.updatePet = catchAsync(async (req, res) => {
  const { id, ...rest } = req.body
  const pet = await Pet.findByIdAndUpdate(id, { ...rest })

  if (pet) {
    const updatedPet = { ...pet._doc, ...rest }
    res.json({ status: 'success', data: { pet: updatedPet } })
  } else {
    res.json({ status: 'fail', data: { message: 'Error updating pet.' } })
  }
})

exports.deletePet = catchAsync(async (req, res) => {
  const { id } = req.body
  const pet = await Pet.findByIdAndDelete(id)

  if (pet) {
    res.json({ status: 'success', data: null })
  } else {
    res.json({ status: 'fail', data: { message: 'Error deleting pet' } })
  }
})
