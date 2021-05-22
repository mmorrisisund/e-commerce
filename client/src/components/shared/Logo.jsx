import { ReactComponent as PawIcon } from '../../assets/images/logo.svg'

const Logo = () => (
  <h2 className='flex space-x-1 text-2xl text-green-800 font-pacifico'>
    <span>Pawsitive</span>
    <PawIcon className='w-6 h-6 mt-1 fill-current' />
    <span>Pals</span>
  </h2>
)

export default Logo
