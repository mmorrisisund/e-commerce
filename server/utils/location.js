const { Client } = require('@googlemaps/google-maps-services-js')

exports.getCoords = async location => {
  const client = new Client()
  try {
    const { data } = await client.geocode({
      params: {
        key: process.env.GOOGLE_API_KEY,
        address: location,
      },
    })

    if (data.status === 'OK') {
      return data.results[0].geometry.location
    }
  } catch (error) {
    console.log(error.response.data.message)
  }
}
