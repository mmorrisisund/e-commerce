import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Logo from './shared/Logo'
import Button from './shared/Button'
import InputGroup from './shared/InputGroup'
import { useAuth } from '../context/authContext'

const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  const { login, error } = useAuth()

  const onSubmit = data => login(data)

  return (
    <form
      className='flex flex-col items-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='sm:hidden'>
        <Logo />
      </div>
      <div>
        <h1 className='mt-8 text-2xl text-center text-green-800 capitalize'>
          log in
        </h1>

        {error && (
          <div className='w-full p-2 mt-4 text-center text-red-900 bg-red-300 border-2 border-red-700 rounded sm:w-1/2'>
            {error}
          </div>
        )}

        <div className='mt-8'>
          <div className='space-y-4'>
            <InputGroup
              label='Email'
              type='email'
              placeholder='Enter your email address'
              {...register('email')}
            />
            <InputGroup
              label='Password'
              type='password'
              placeholder='Enter a password'
              {...register('password')}
            />
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <Button type='submit' variant='primary'>
          Log In
        </Button>
      </div>
      <div className='mt-4 text-xs'>
        <p className='inline mr-2'>New to Pawsitive Pals?</p>
        <Link className='text-blue-800' to='/signup'>
          Sign Up
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
