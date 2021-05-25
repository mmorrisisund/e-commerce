import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import { getPetById } from '../services/pets'
import { getAge } from '../utils/dates'
import Button from '../components/shared/Button'

const Pet = () => {
  const { petId } = useParams()
  const { data: pet, isLoading } = useQuery(petId, async () => {
    const data = await getPetById(petId)
    return data
  })

  useEffect(() => {}, [])

  return (
    <main className='p-10 pt-20'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-col max-w-5xl mx-auto md:flex-row'>
          <div className='max-w-xs md:mr-4'>
            <img src={pet.image} alt='pet' />
          </div>
          <div className='max-w-2xl'>
            <h2 className='pt-8 text-2xl text-center text-green-800 md:pt-0'>
              {pet.name}
            </h2>
            <section className='max-w-md pt-8 space-y-1'>
              <Detail label='Location' content={pet.location} />
              <Detail label='Age' content={getAge(pet.dob)} />
              <Detail label='Breed' content={pet.breed} />
              <Detail label='Sex' content={pet.sex} />
              <Detail label='Spayed' content={pet.spayed ? 'Yes' : 'No'} />
            </section>
            <section>
              <h3 className='my-4 text-xl text-center text-green-800'>About</h3>
              <p>{pet.description}</p>
            </section>
            <section className='max-w-xs pt-4 mx-auto'>
              <Button variant='primary' size='lg'>
                Adopt
              </Button>
            </section>
          </div>
        </div>
      )}
    </main>
  )
}

export default Pet

const Detail = ({ label, content }) => (
  <div className='grid grid-cols-2'>
    <span className='font-semibold capitalize'>{label}: </span>
    <span className='capitalize'>{content}</span>
  </div>
)
