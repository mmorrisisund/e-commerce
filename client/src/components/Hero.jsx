import { Link } from 'react-router-dom'
import banner from '../assets/images/banner.png'
import HeroLogo from './HeroLogo'
import Button from './shared/Button'

const Hero = () => {
  return (
    <div className='relative'>
      <img className='w-full' src={banner} alt='banner' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='p-4 xs:p-6 lg:p-8 xl:p-14 flex flex-col items-center justify-center bg-white bg-opacity-50  rounded-2xl'>
          <div className='flex flex-col items-center'>
            <HeroLogo />
            <span className='text-green-800 text-lg xs:text-xl lg:text-3xl xl:text-4xl lg:tracking-wide'>
              Find your next best friend!
            </span>
          </div>
          <div className='flex space-x-2 xs:space-x-4 justify-center w-full xs:mt-4 lg:mt-8'>
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
