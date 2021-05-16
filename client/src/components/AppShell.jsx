import { Navbar } from './Navbar'

const AppShell = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default AppShell
