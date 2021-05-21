import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Glass from '../components/Glass'
import Logo from '../components/Logo'
import Button from '../components/shared/Button'

const Signup = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = console.log

  return (
    <main className=''>
      <ImageContainer src='https://res.cloudinary.com/mimo/image/upload/v1621560133/pawsitive-pals/assets/signup-bg.jpg'>
        <Glass>
          <form
            className='flex flex-col items-center'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='sm:hidden'>
              <Logo />
            </div>
            <div>
              <h1 className='mt-8 text-2xl text-center text-green-800 capitalize'>
                sign up
              </h1>
              <div className='mt-8'>
                <div className='space-y-4'>
                  <div>
                    <label className='mr-1 leading-4'>Email</label>
                    <input
                      type='email'
                      className='w-full text-sm placeholder-green-700 bg-transparent border-b focus:outline-none'
                      placeholder='Enter your email address'
                      {...register('email')}
                    />
                  </div>
                  <div>
                    <label className='mr-1 leading-4'>Password</label>
                    <input
                      type='password'
                      className='w-full text-sm placeholder-green-700 bg-transparent border-b focus:outline-none'
                      placeholder='Enter a password'
                      {...register('password')}
                    />
                  </div>
                  <div>
                    <label className='mr-1 leading-4'>Confirm Password</label>
                    <input
                      type='password'
                      className='w-full text-sm placeholder-green-700 bg-transparent border-b focus:outline-none'
                      placeholder='Confirm your password'
                      {...register('passwordConfirm')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-8'>
              <Button variant='primary'>Create Account</Button>
            </div>
            <div className='mt-4 text-xs'>
              <p className='inline mr-2'>Already have an account?</p>
              <Link className='text-blue-800' to='/login'>
                Login
              </Link>
            </div>
          </form>
        </Glass>
      </ImageContainer>
    </main>
  )
}

const ImageContainer = ({ children, src }) => (
  <div className='max-w-[1430px] mx-auto overflow-x-hidden'>
    <div className='relative w-[1430px] left-1/2 ml-[-715px] z-0 px-4'>
      <img className='block mx-auto' src={src} alt='background' />
      {children}
    </div>
  </div>
)

export default Signup
