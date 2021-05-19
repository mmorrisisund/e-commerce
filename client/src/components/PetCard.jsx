import { Link } from 'react-router-dom'

const PetCard = ({ id, name, image }) => (
  <Link to={`/pets/${id}`}>
    <div className='bg-white rounded-md w-48 m-4 p-2 text-center'>
      <img src={image} alt='pet face' />
      <div className='h-8 p-2'>
        <span className='text-lg'>{name}</span>
      </div>
    </div>
  </Link>
)

export default PetCard
