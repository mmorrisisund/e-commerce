import { useState } from 'react'
import { Link } from 'react-router-dom'

import cn from '../../utils/class-names'
import Logo from '../Logo'
import { ReactComponent as PawIcon } from '../../assets/images/logo.svg'
import Overlay from '../shared/Overlay'
import { useAuth } from '../../context/authContext'

export const Navbar = () => {
  const [show, setShow] = useState(false)
  const { isAuthenticated } = useAuth()

  return (
    <header className='w-full absolute z-10'>
      <MenuButton onClick={() => setShow(prev => !prev)} />
      {
        <nav>
          <Overlay show={show} onClose={() => setShow(prev => !prev)} />
          <div
            className={cn([
              'fixed top-2 bottom-2 pt-2 bg-white w-10/12 transform transition-transform',
              show ? '' : '-translate-x-full ',
              'sm:flex sm:items-center sm:translate-x-0 sm:static sm:w-full sm:py-2 sm:px-4',
            ])}
          >
            <NavLogo />
            <NavLinks isAuthenticated={isAuthenticated} />
          </div>
        </nav>
      }
    </header>
  )
}

const MenuButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className='focus:outline-none focus:text-green-50 text-green-800 sm:hidden'
  >
    <PawIcon className='h-6 w-6 fill-current m-2' />
  </button>
)

const NavLogo = () => (
  <div className='w-full flex justify-center sm:justify-start'>
    <Link to='/'>
      <Logo />
    </Link>
  </div>
)

const NavLinks = ({ isAuthenticated }) => (
  <div className='p-8 sm:p-0'>
    <ul
      className={cn([
        'flex flex-col items-center space-y-3 text-lg text-green-800',
        'sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2',
      ])}
    >
      <li className='group'>
        <Link to='/search'>
          Search
          <div className='h-1 transition transform scale-x-0 group-hover:scale-x-100 bg-green-800' />
        </Link>
      </li>

      <li className='group'>
        {isAuthenticated ? (
          <Link to='/logout'>
            Logout
            <div className='h-1 transition transform scale-x-0 group-hover:scale-x-100 bg-green-800' />
          </Link>
        ) : (
          <Link to='/login'>
            Login
            <div className='h-1 transition transform scale-x-0 group-hover:scale-x-100 bg-green-800' />
          </Link>
        )}
      </li>
    </ul>
  </div>
)
