import { Link } from 'react-router-dom'

const LinkCard = ({ children, to }) => (
  <Link
    className='w-72 bg-white flex flex-col items-center py-4 px-6 rounded-md shadow-sm transition-shadow duration-300 hover:shadow-md my-2 mx-auto'
    to={to}
  >
    {children}
  </Link>
)

LinkCard.Icon = ({ children }) => <i>{children}</i>

LinkCard.Title = ({ children }) => (
  <h3 className='text-green-900 text-lg font-medium'>{children}</h3>
)

LinkCard.Text = ({ children }) => <p className='mt-4 text-center'>{children}</p>

export default LinkCard
