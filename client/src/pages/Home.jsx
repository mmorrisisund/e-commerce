import Hero from '../components/Hero'

const Home = ({ children }) => {
  return (
    <div>
      {/* <div className='fixed top-0 w-full h-20 bg-blue-400 z-10' /> */}
      <Hero>
        <div className='bg-transparent w-96 border-4 border-blue-400'></div>
      </Hero>
    </div>
  )
}

export default Home
