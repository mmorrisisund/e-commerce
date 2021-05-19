import Footer from './Footer'
import { Navbar } from './Navbar'

const AppShell = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default AppShell
