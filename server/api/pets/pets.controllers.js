const { ObjectId } = require('mongoose').Schema.Types
const Pet = require('../../models/pet')
const catchAsync = require('../../utils/catchAsync')
const { getCoords } = require('../../utils/location')

exports.addPet = catchAsync(async (req, res) => {
  let { location } = req.body
  if (location) {
    const coords = await getCoords(location)
    if (coords) {
      location = {
        type: 'Point',
        coordinates: [coords.lng, coords.lat],
      }
    } else {
      location = undefined
    }
  }

  const pet = new Pet({ ...req.body, owner: req.state.userId, location })
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

exports.getAllPets = catchAsync(async (req, res) => {
  const page = req.body.page ?? 1
  const pageSize = req.body.pageSize ?? 10

  const pets = await Pet.find({})
    .limit(pageSize)
    .skip((page - 1) * pageSize)

  res.json({ status: 'success', data: { pets } })
})

exports.updatePet = catchAsync(async (req, res) => {
  let { location } = req.body
  if (location) {
    const coords = await getCoords(location)
    if (coords) {
      location = {
        type: 'Point',
        coordinates: [coords.lng, coords.lat],
      }
    } else {
      location = undefined
    }
  }
  const { id, ...rest } = req.body
  const query = { _id: id, owner: req.state.userId }
  const pet = await Pet.findOneAndUpdate(
    query,
    { ...rest, location },
    { new: true }
  )

  if (!pet) {
    return res.json({
      status: 'fail',
      data: { message: 'Error updating pet.' },
    })
  }
  res.json({ status: 'success', data: { pet } })
})

exports.deletePet = catchAsync(async (req, res) => {
  const { id } = req.body
  const query = { _id: id, owner: req.state.userId }
  const pet = await Pet.findOneAndDelete(query)

  if (pet) {
    res.json({ status: 'success', data: null })
  } else {
    res.json({ status: 'fail', data: { message: 'Error deleting pet' } })
  }
})
