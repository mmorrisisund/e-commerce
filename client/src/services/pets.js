import { getYearsAgo } from '../utils/dates'
import http from '../utils/http-common'

export const getPetsWithinRadius = async (center, distance) => {
  const { data } = await http.post('/pets/all', {
    limit: 5,
    within: { center, distance },
    fields: 'image,name',
  })

  return data.data.pets
}

export const getPets = async ({
  type = 'dog',
  minAge = 0,
  maxAge = 15,
  gender = 'any',
  center = [-103.771556, 44.967243],
  distance = 500,
}) => {
  const { data } = await http.post('/pets/all', {
    limit: 10,
    fields: 'image, name',
    type,
    dob: {
      lt: getYearsAgo(Date.now(), minAge),
      gt: getYearsAgo(Date.now(), maxAge),
    },
    sex: gender.toLowerCase() === 'any' ? undefined : gender,
    within: { center, distance },
  })

  return data.data.pets
}

export const getPetById = async id => {
  const { data } = await http.post('/pets/single', { id })
  return data.data.pet
}
