import { ReactComponent as PawIcon } from '../assets/images/logo.svg'

const HeroLogo = () => (
  <h2 className='block text-green-800 font-pacifico text-2xl xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl'>
    <span>Pawsitive</span>
    <PawIcon className='h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-11 lg:w-11 xl:h-14 xl:w-14 inline mx-2 -mt-2 fill-current' />
    <span>Pals</span>
  </h2>
)

export default HeroLogo
