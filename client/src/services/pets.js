import http from '../utils/http-common'

export const getPetsWithinRadius = async (center, distance) => {
  const { data } = await http.post('/pets/all', {
    limit: 5,
    within: { center, distance },
    fields: 'image,name',
  })

  return data.data.pets
}
