import { createContext, useContext, useEffect, useState } from 'react'
import { checkUser, loginUser, logoutUser } from '../services/auth'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(undefined)
  const [error, setError] = useState('')

  useEffect(() => {
    const getUser = async () => {
      const user = await checkUser()
      if (user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    }
    getUser()
  }, [])

  const login = async ({ email, password }) => {
    try {
      const user = await loginUser(email, password)
      setUser(user)
      setIsAuthenticated(true)
    } catch (error) {
      setError(error.message)
    }
  }

  const logout = async () => {
    try {
      const status = await logoutUser()

      if (status === 'success') {
        setUser(null)
        setIsAuthenticated(false)
      } else {
        setError('Error logging out')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const auth = useContext(AuthContext)
  if (!auth) {
    throw new Error('useAuth must be wrapped in AuthProvider')
  }
  return auth
}

export default AuthProvider
