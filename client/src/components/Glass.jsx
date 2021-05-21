const Glass = ({ children }) => (
  <div className='fixed w-full max-w-md p-8 transform -translate-x-1/2 -translate-y-1/2 rounded backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-50 backdrop-brightness-125 top-1/2 left-1/2 bg-glass sm:w-2/3'>
    {children}
  </div>
)

export default Glass
