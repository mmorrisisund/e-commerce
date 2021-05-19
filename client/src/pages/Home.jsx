import { useState, useEffect } from 'react'

import {
  ClipboardListIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

import Hero from '../components/Hero'
import { getPetsWithinRadius } from '../services/pets'
import PetCard from '../components/PetCard'
import LinkCard from '../components/LinkCard'
import ArticleCard from '../components/ArticleCard'

const Home = () => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch('https://www.geolocation-db.com/json/', { mode: 'cors' })
      .then(res => res.json())
      .then(
        ({ longitude, latitude }) =>
          getPetsWithinRadius([longitude, latitude], 5000) // TODO: Set smaller radius
      )
      .then(setPets)
      .catch(console.error)
  }, [])

  return (
    <main>
      <Hero />

      <section className='flex flex-wrap px-2 py-10 max-w-5xl mx-auto'>
        <LinkCard to='/checklist'>
          <LinkCard.Icon>
            <ClipboardListIcon className='h-10 w-10 text-green-800' />
          </LinkCard.Icon>

          <LinkCard.Title>Adoption Checklist</LinkCard.Title>

          <LinkCard.Text>
            Help make your new friend feel right at home.
          </LinkCard.Text>
        </LinkCard>

        <LinkCard to='/faq'>
          <LinkCard.Icon>
            <QuestionMarkCircleIcon className='h-10 w-10 text-green-800' />
          </LinkCard.Icon>

          <LinkCard.Title>Pet Adoption Questions</LinkCard.Title>

          <LinkCard.Text>
            Get answers to all the questions you have. And some you haven't even
            thought of yet.
          </LinkCard.Text>
        </LinkCard>

        <LinkCard to='/breeds'>
          <LinkCard.Icon>
            <InformationCircleIcon className='h-10 w-10 text-green-800' />
          </LinkCard.Icon>

          <LinkCard.Title>Breed Information</LinkCard.Title>

          <LinkCard.Text>Find the best pet for your situation.</LinkCard.Text>
        </LinkCard>
      </section>

      <section className='bg-green-800 flex flex-col items-center py-10'>
        <h2 className='text-3xl text-green-50'>Nearby Pets</h2>

        <div className='flex flex-wrap p-2 pt-5 w-full max-w-6xl justify-center'>
          {pets.map(pet => (
            <PetCard
              key={pet._id}
              id={pet._id}
              name={pet.name}
              image={pet.image}
            />
          ))}
        </div>
      </section>

      <section className='flex flex-wrap py-10 px-4 space-y-4 lg:space-y-0 max-w-7xl mx-auto'>
        <div className='max-w-lg mx-auto lg:w-1/2 lg:mr-2'>
          <ArticleCard
            image='https://res.cloudinary.com/mimo/image/upload/v1621382046/pawsitive-pals/assets/dalmatian.png'
            badgeType='dog'
            headline='Dog Articles'
            text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis culpa repellendus commodi aut adipisci. Eos?'
            to='/articles/dogs'
          />
        </div>
        <div className='max-w-lg mx-auto lg:w-1/2'>
          <ArticleCard
            image='https://res.cloudinary.com/mimo/image/upload/v1621381852/pawsitive-pals/assets/cat-generic.jpg'
            badgeType='cat'
            headline='Cat Articles'
            text='Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis culpa repellendus commodi aut adipisci. Eos?'
            to='/articles/cats'
          />
        </div>
      </section>
    </main>
  )
}

export default Home
