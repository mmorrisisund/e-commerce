import { RadioGroup, Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {
  CheckCircleIcon,
  CheckIcon,
  SelectorIcon,
} from '@heroicons/react/solid'

import cn from '../utils/class-names'
import InputRange from '../components/shared/InputRange'
import InputDoubleRange from '../components/shared/InputDoubleRange'
import Button from '../components/shared/Button'
import PetCard from '../components/PetCard'
import { getPets } from '../services/pets'

const TYPES = ['dog', 'cat']
const GENDERS = ['any', 'male', 'female']

const Search = () => {
  const [petType, setPetType] = useState('dog')
  const [minAge, setMinAge] = useState(0)
  const [maxAge, setMaxAge] = useState(15)
  const [gender, setGender] = useState('Any')
  const [distance, setDistance] = useState(25)
  const [pets, setPets] = useState([])

  const handleAgeChange = ([min, max]) => {
    setMinAge(min)
    setMaxAge(max)
  }

  const handleSearchClick = async () => {
    const pets = await getPets({
      type: petType,
      minAge,
      maxAge,
      gender,
      distance,
    })
    setPets(pets)
  }

  return (
    <main className='p-8'>
      <h1 className='mt-8 text-4xl font-medium tracking-wide text-center text-green-800'>
        Find a New Friend!
      </h1>
      <div className='flex flex-col items-center lg:flex-row'>
        <aside className='flex-grow max-w-xs mt-8'>
          <RadioGroup value={petType} onChange={setPetType}>
            <RadioGroup.Label>What kind of pet do you want?</RadioGroup.Label>
            {TYPES.map(petType => (
              <RadioGroup.Option
                value={petType}
                className='mt-4 cursor-pointer focus:outline-none'
              >
                {({ checked, active }) => (
                  <div className='flex items-center'>
                    <div
                      className={cn([
                        active && 'ring-2 ring-green-800',
                        'inline-block w-5 h-5 border border-green-800 rounded-full',
                      ])}
                    >
                      <CheckCircleIcon
                        className={cn([
                          'text-green-800 transition-opacity',
                          checked ? 'opacity-100' : 'opacity-0',
                        ])}
                      />
                    </div>
                    <RadioGroup.Label className='ml-2 capitalize cursor-pointer'>
                      {petType}
                    </RadioGroup.Label>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </RadioGroup>

          <div className='mt-8'>
            <h2>Age Range</h2>
            <InputDoubleRange min={0} max={15} onChange={handleAgeChange} />
          </div>

          <div className='mt-8'>
            <p>Gender</p>
            <div className=''>
              <Listbox value={gender} onChange={setGender}>
                <div className='relative mt-4'>
                  <Listbox.Button className='relative w-full py-2 pl-3 text-sm text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-green-300 focus-visible:ring-offset-2 focus-visible:border-green-800'>
                    <span className='block truncate'>{gender}</span>
                    <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                      <SelectorIcon className='w-5 h-5 text-gray-400' />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Listbox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      {GENDERS.map((gender, idx) => (
                        <Listbox.Option
                          key={idx}
                          className={({ active }) =>
                            `${
                              active
                                ? 'text-green-800 bg-green-100'
                                : 'text-gray-800'
                            } cursor-default select-none relative py-2 pl-10 pr-4`
                          }
                          value={gender}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? 'font-medium' : 'font-normal'
                                } block truncate capitalize`}
                              >
                                {gender}
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? 'text-green-800' : 'text-gray-800'
                                  } absolute inset-y-0 left-0 pl-3 flex items-center`}
                                >
                                  <CheckIcon className='w-5 h-5' />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          <div className='mt-8'>
            <p>Distance</p>
            <InputRange initialValue={25} max={1000} onChange={setDistance} />
          </div>

          <div className='w-full mt-8'>
            <Button
              className='w-full'
              variant='primary'
              onClick={handleSearchClick}
            >
              Search
            </Button>
          </div>
        </aside>

        {pets.length !== 0 && (
          <section className='p-4 mt-8 text-center'>
            <h2 className='text-3xl text-green-800'>Search Results</h2>
            <div className='flex flex-wrap justify-center'>
              {pets.map(pet => (
                <PetCard
                  key={pet._id}
                  id={pet._id}
                  image={pet.image}
                  name={pet.name}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default Search
