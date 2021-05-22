import { Redirect } from 'react-router-dom'

import LoginForm from '../components/LoginForm'
import Glass from '../components/shared/Glass'
import ImageContainer from '../components/shared/ImageContainer'
import { useAuth } from '../context/authContext'

const Login = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <main>
      <ImageContainer src='https://www.akcpetinsurance.com/res/akc/blog/2017/how-to-acclimate-cats-and-dogs/header_cats_and_dogs.jpg'>
        <Glass>
          <LoginForm />
        </Glass>
      </ImageContainer>
    </main>
  )
}

export default Login
