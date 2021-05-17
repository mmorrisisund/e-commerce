import { useForm } from 'react-hook-form'

import Logo from './Logo'
import Button from './shared/Button'
import { useAuth } from '../context/authContext'

const LoginForm = () => {
  const { register, handleSubmit } = useForm()
  const { login, error } = useAuth()

  const onSubmit = data => login(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white rounded-md shadow-md max-w-4xl mx-auto p-4'
    >
      <div className='flex flex-col items-center'>
        <div className='sm:hidden'>
          <Logo />
        </div>

        <h1 className='text-green-800 text-2xl mt-8'>Login</h1>

        {error && (
          <div className='w-full sm:w-1/2 border-2 border-red-700 bg-red-300 text-red-900 p-2 rounded mt-4 text-center'>
            {error}
          </div>
        )}

        <div className='mt-8 w-full sm:w-1/2'>
          <div className='space-y-4'>
            <div>
              <label className='mr-1 leading-4'>Email</label>
              <input
                type='email'
                className='border-b w-full text-sm focus:outline-none'
                placeholder='Enter your email address'
                {...register('email')}
              />
            </div>
            <div>
              <label className='mr-1 leading-4'>Password</label>
              <input
                type='password'
                className='border-b w-full text-sm focus:outline-none'
                placeholder='Enter your password'
                {...register('password')}
              />
            </div>
          </div>

          <div className='w-full mt-8 flex justify-between'>
            <Button variant='secondary'>Cancel</Button>
            <Button variant='primary'>Submit</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
