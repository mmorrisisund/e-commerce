import { Redirect } from 'react-router'
import { useAuth } from '../context/authContext'

const Logout = () => {
  const { isAuthenticated, logout } = useAuth()

  logout()

  return isAuthenticated ? <div>logging out...</div> : <Redirect to='/' />
}

export default Logout
