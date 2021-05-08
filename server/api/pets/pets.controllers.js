const Pet = require('../../models/pet')
const catchAsync = require('../../utils/catchAsync')

exports.addPet = catchAsync(async (req, res) => {
  const pet = new Pet(req.body)
  await pet.save()

  res.json({ status: 'success', data: { pet } })
})
