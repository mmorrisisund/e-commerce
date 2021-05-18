import {
  ClipboardListIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'

import Hero from '../components/Hero'

const Home = () => {
  return (
    <main>
      <Hero />

      <section className='flex flex-wrap p-2 pt-20 max-w-5xl mx-auto'>
        <div className='w-72 bg-white flex flex-col items-center p-4 rounded-md shadow-sm transition-shadow duration-300 hover:shadow-md my-2 mx-auto'>
          <ClipboardListIcon className='h-10 w-10 text-green-800' />
          <h3 className='text-green-900 text-lg font-medium'>
            Adoption Checklist
          </h3>
          <p>Help make your new friend feel right at home.</p>
        </div>

        <div className='w-72 bg-white flex flex-col items-center p-4 rounded-md shadow-sm transition-shadow duration-300 hover:shadow-md my-2 mx-auto'>
          <QuestionMarkCircleIcon className='h-10 w-10 text-green-800' />
          <h3 className='text-green-900 text-lg font-medium'>
            Pet Adoption Questions
          </h3>
          <p>
            Get answers to all the questions you have. And some you haven't even
            thought of yet.
          </p>
        </div>

        <div className='w-72 bg-white flex flex-col items-center p-4 rounded-md shadow-sm transition-shadow duration-300 hover:shadow-md my-2 mx-auto'>
          <InformationCircleIcon className='h-10 w-10 text-green-800' />
          <h3 className='text-green-900 text-lg font-medium'>
            Breed Information
          </h3>
          <p>Find the best pet for your situation.</p>
        </div>
      </section>
    </main>
  )
}

export default Home
