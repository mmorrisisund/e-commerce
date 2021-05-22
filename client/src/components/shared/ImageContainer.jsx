const ImageContainer = ({ children, src }) => (
  <div className='max-w-[1430px] mx-auto overflow-x-hidden'>
    <div className='relative w-[1430px] left-1/2 ml-[-715px] z-0 px-4'>
      <img className='block mx-auto' src={src} alt='background' />
      {children}
    </div>
  </div>
)

export default ImageContainer
