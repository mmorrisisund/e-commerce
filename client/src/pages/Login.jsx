import { Redirect } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import { useAuth } from '../context/authContext'

const Login = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <main className='p-1 pt-8 sm:p-8'>
      <LoginForm />
    </main>
  )
}

export default Login
