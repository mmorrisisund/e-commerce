const { Schema, model } = require('mongoose')
const { getLocation } = require('../utils/location')

const DOG_AVATAR =
  'https://res.cloudinary.com/mimo/image/upload/v1620876885/pawsitive-pals/dog_avatar.png'
const CAT_AVATAR =
  'https://res.cloudinary.com/mimo/image/upload/v1620876881/pawsitive-pals/cat_avatar.png'

const requiredString = { type: String, required: true }

const petSchema = new Schema({
  name: requiredString,
  type: { ...requiredString, enum: ['dog', 'cat'] },
  dob: { type: Date, required: true },
  description: requiredString,
  sex: { ...requiredString, enum: ['male', 'female'] },
  spayed: Boolean,
  breed: requiredString,
  created: { type: Date, default: Date.now, immutable: true },
  image: {
    type: String,
    default: function () {
      return this.type === 'dog' ? DOG_AVATAR : CAT_AVATAR
    },
  },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  location: {
    type: { type: String, enum: ['Point'] },
    coordinates: { type: [Number] },
  },
})

petSchema.index({ location: '2dsphere' })

petSchema.pre(/^find/, async function (next) {
  this.options.limit = Math.min(this.options.limit ?? 100, 100)
})

petSchema.post('find', async function (res, next) {
  const promises = res.map(pet => {
    if (pet.location?.type) {
      return getLocation(pet.location.coordinates)
    }
  })

  const resolved = await Promise.all(promises)

  res.forEach((pet, idx) => {
    if (pet.location?.type) {
      pet.location = resolved[idx]
    }
  })

  next()
})

module.exports = model('Pet', petSchema)
