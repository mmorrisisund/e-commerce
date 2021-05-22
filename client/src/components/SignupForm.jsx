import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import InputGroup from './shared/InputGroup'
import Logo from './shared/Logo'
import Button from './shared/Button'
import { useAuth } from '../context/authContext'

const Form = () => {
  const { register, handleSubmit } = useForm()
  const { signup, error } = useAuth()

  const onSubmit = data => signup(data)

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
          sign up
        </h1>

        {error && (
          <div className='w-full p-2 mt-4 text-center text-red-900 bg-red-300 border-2 border-red-700 rounded'>
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
            <InputGroup
              label='Confirm Password'
              type='password'
              placeholder='Confirm your password'
              {...register('passwordConfirm')}
            />
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <Button type='submit' variant='primary'>
          Create Account
        </Button>
      </div>
      <div className='mt-4 text-xs'>
        <p className='inline mr-2'>Already have an account?</p>
        <Link className='text-blue-800' to='/login'>
          Login
        </Link>
      </div>
    </form>
  )
}

export default Form
