import http from '../utils/http-common'

export const checkUser = async () => {
  const { data } = await http.post('/auth/me')

  return data.data.user
}

export const loginUser = async (email, password) => {
  const { data } = await http.post('/auth/login', { email, password })

  if (data.status === 'success') {
    return data.data.user
  } else {
    throw new Error(data.data.message)
  }
}

export const logoutUser = async () => {
  try {
    const { data } = await http.post('/auth/logout')

    return data.status
  } catch (error) {
    throw new Error(error.message)
  }
}
