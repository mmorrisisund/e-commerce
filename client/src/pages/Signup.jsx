import Glass from '../components/shared/Glass'
import ImageContainer from '../components/shared/ImageContainer'
import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <main>
      <ImageContainer src='https://res.cloudinary.com/mimo/image/upload/v1621560133/pawsitive-pals/assets/signup-bg.jpg'>
        <Glass>
          <SignupForm />
        </Glass>
      </ImageContainer>
    </main>
  )
}

export default Signup
