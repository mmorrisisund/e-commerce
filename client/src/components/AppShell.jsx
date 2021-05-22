import Footer from './Footer'
import { Navbar } from './Navbar'

const AppShell = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex-grow'>{children}</div>
      <Footer />
    </div>
  )
}

export default AppShell
