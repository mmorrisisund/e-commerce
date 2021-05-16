import { ReactComponent as PawIcon } from '../assets/images/logo.svg'

const Logo = () => (
  <h2 className='flex space-x-1 text-2xl font-pacifico text-green-800'>
    <span>Pawsitive</span>
    <PawIcon className='h-6 w-6 mt-1 fill-current' />
    <span>Pals</span>
  </h2>
)

export default Logo
