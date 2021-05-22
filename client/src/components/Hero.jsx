import { Link } from 'react-router-dom'
import banner from '../assets/images/banner.png'
import Logo from './shared/Logo'
import Button from './shared/Button'

const Hero = () => {
  return (
    <div className='relative'>
      <img className='w-full' src={banner} alt='banner' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center w-2/3 p-4 bg-white bg-opacity-50 h-1/2 xs:p-6 lg:p-8 xl:p-14 rounded-2xl'>
          <div className='flex flex-col items-center'>
            <div className='sm:hidden'>
              <Logo />
            </div>
            <span className='text-lg text-green-800 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:tracking-wide'>
              Find your next best friend!
            </span>
          </div>

          <div className='flex justify-center w-full space-x-2 xs:space-x-4 xs:mt-4 lg:mt-8'>
            <Link to='/search'>
              <Button variant='secondary' size='md'>
                Search
              </Button>
            </Link>
            <Link to='/signup'>
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
