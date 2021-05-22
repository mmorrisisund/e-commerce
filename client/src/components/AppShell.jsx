import Footer from './Footer'
import { Navbar } from './Navbar'

const AppShell = ({ children }) => {
  return (
    <div className='flex flex-col h-full'>
      <Navbar />
      <div className='flex-grow'>{children}</div>
      <Footer />
    </div>
  )
}

export default AppShell
