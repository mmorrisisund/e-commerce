const cloudinary = require('cloudinary').v2

exports.generateSignature = folder => {
  console.log(`process.env.CLOUDINARY_API_KEY`, process.env.CLOUDINARY_API_KEY)
  const timestamp = Math.round(new Date().getTime() / 1000)
  const signature = cloudinary.utils.api_sign_request(
    {
      folder,
      timestamp,
    },
    process.env.CLOUDINARY_API_KEY
  )
  return { timestamp, signature }
}
