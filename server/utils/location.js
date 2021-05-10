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

exports.getLocation = async coords => {
  const client = new Client()
  const [lng, lat] = coords

  try {
    const { data } = await client.reverseGeocode({
      params: {
        latlng: [lat, lng],
        key: process.env.GOOGLE_API_KEY,
      },
    })

    if (data.status === 'OK') {
      return data.results[0].address_components
        .filter(
          component =>
            component.types.includes('administrative_area_level_1') ||
            component.types.includes('administrative_area_level_3')
        )
        .map(component => component.short_name)
        .join(', ')
    }
  } catch (error) {
    console.log(error.response.data.message)
  }
}
