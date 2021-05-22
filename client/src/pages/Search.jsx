import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'

import cn from '../utils/class-names'

const Search = () => {
  const [petType, setPetType] = useState('dog')
  return (
    <main className='p-8'>
      <h1 className='mt-4 text-xl font-medium tracking-wide text-center'>
        Find a New Friend!
      </h1>
      <section>
        <RadioGroup value={petType} onChange={setPetType}>
          <RadioGroup.Label>What kind of pet do you want?</RadioGroup.Label>
          <RadioGroup.Option
            value='dog'
            className='cursor-pointer focus:outline-none'
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
                <RadioGroup.Label className='ml-2 cursor-pointer'>
                  Dog
                </RadioGroup.Label>
              </div>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option
            value='cat'
            className='cursor-pointer focus:outline-none'
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
                <RadioGroup.Label className='ml-2 cursor-pointer'>
                  Cat
                </RadioGroup.Label>
              </div>
            )}
          </RadioGroup.Option>
        </RadioGroup>

        <div>Age Range</div>

        <div>
          <p>Gender</p>
        </div>

        <div>Distance</div>
      </section>
    </main>
  )
}

export default Search
