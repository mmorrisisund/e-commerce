import { RadioGroup, Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {
  CheckCircleIcon,
  CheckIcon,
  SelectorIcon,
} from '@heroicons/react/solid'

import cn from '../utils/class-names'

const GENDERS = ['Any', 'Male', 'Female']

const Search = () => {
  const [petType, setPetType] = useState('dog')
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(15)
  const [minThumb, setMinThumb] = useState(0)
  const [maxThumb, setMaxThumb] = useState(1)
  const [gender, setGender] = useState('Any')
  const [distance, setDistance] = useState(0)
  const [distanceThumb, setDistanceThumb] = useState(0)

  const minTrigger = e => {
    const newMin = Math.min(e.target.value, maxValue - 0.6)
    setMinValue(newMin)
    setMinThumb(((newMin - 0) / (15 - 0)) * 100)
  }

  const maxTrigger = e => {
    const newMax = Math.max(e.target.value, minValue + 0.6)
    setMaxValue(newMax)
    setMaxThumb(100 - ((newMax - 0) / (15 - 0)) * 100)
  }

  const distanceTrigger = e => {
    setDistance(e.target.value)
    setDistanceThumb((e.target.value / 1000) * 100)
  }

  return (
    <main className='p-8'>
      <h1 className='mt-4 text-xl font-medium tracking-wide text-center'>
        Find a New Friend!
      </h1>
      <section className='mt-8'>
        <RadioGroup value={petType} onChange={setPetType}>
          <RadioGroup.Label>What kind of pet do you want?</RadioGroup.Label>
          <RadioGroup.Option
            value='dog'
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

        <div className='mt-8'>
          <h2>Age Range</h2>

          <div className='flex items-center justify-center w-full h-full m-auto group isolate'>
            <div className='relative min-w-full py-1'>
              <div className='h-2 bg-gray-200 rounded-full'>
                <input
                  type='range'
                  step={0.1}
                  min={0}
                  max={15}
                  onChange={minTrigger}
                  value={minValue}
                  className='absolute w-full h-2 appearance-none cursor-pointer pointer-events-none'
                />

                <input
                  type='range'
                  step={0.1}
                  min={0}
                  max={15}
                  onChange={maxTrigger}
                  value={maxValue}
                  className='absolute w-full h-2 appearance-none cursor-pointer pointer-events-none'
                />
                {/* fill */}
                <div
                  className='absolute z-0 h-2 bg-green-800 rounded-full pointer-events-none'
                  style={{ left: minThumb + '%', right: maxThumb + '%' }}
                />
                {/* thumb */}
                <div
                  className='absolute top-0 flex items-center justify-center w-4 h-4 -ml-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer pointer-events-none'
                  style={{
                    left: minThumb + '%',
                    marginLeft: (minThumb / 100) * -16,
                  }}
                >
                  <div className='relative w-1 -mt-2 transition-opacity opacity-0 group-hover:opacity-100'>
                    <div
                      className='absolute z-40 min-w-full mb-2 opacity-100 bottom-100'
                      style={{ marginLeft: '-20.5px' }}
                    >
                      <div className='relative shadow-md'>
                        <div className='px-4 py-1 -mt-8 text-xs text-white truncate bg-black rounded '>
                          {minValue}
                        </div>
                        <svg
                          className='absolute left-0 w-full h-2 text-black top-100'
                          x='0px'
                          y='0px'
                          viewBox='0 0 255 255'
                          xmlSpace='preserve'
                        >
                          <polygon
                            className='fill-current'
                            points='0,0 127.5,127.5 255,0'
                          ></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='absolute top-0 flex items-center justify-center w-4 h-4 -ml-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer pointer-events-none'
                  style={{
                    right: maxThumb + '%',
                    marginRight: (maxThumb / 100) * -16,
                  }}
                >
                  <div className='relative w-1 -mt-2'>
                    <div
                      className='absolute z-40 min-w-full mb-2 transition-opacity opacity-0 bottom-100 group-hover:opacity-100'
                      style={{ marginLeft: '-20.5px' }}
                    >
                      <div className='relative shadow-md'>
                        <div className='px-4 py-1 -mt-8 text-xs text-white truncate bg-black rounded '>
                          {maxValue}
                        </div>
                        <svg
                          className='absolute left-0 w-full h-2 text-black top-100'
                          x='0px'
                          y='0px'
                          viewBox='0 0 255 255'
                          xmlSpace='preserve'
                        >
                          <polygon
                            className='fill-current'
                            points='0,0 127.5,127.5 255,0'
                          ></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute bottom-0 left-0 -mb-6 -ml-1 text-gray-800'>
                0
              </div>
              <div className='absolute bottom-0 right-0 -mb-6 -mr-1 text-gray-800'>
                15
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <p>Gender</p>
          <div className='isolate'>
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
                  <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
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
                              } block truncate`}
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
          <div className='isolate'>
            <div className='flex items-center justify-center w-full h-full m-auto group'>
              <div className='relative min-w-full py-1'>
                <div className='h-2 bg-gray-200 rounded-full'>
                  <input
                    type='range'
                    min={0}
                    max={1000}
                    onChange={distanceTrigger}
                    value={distance}
                    className='absolute w-full h-2 opacity-0 appearance-none cursor-pointer'
                  />
                  {/* range fill */}
                  <div
                    className='w-0 h-2 bg-green-800 rounded-full'
                    style={{ width: distanceThumb + '%' }}
                  />
                  {/* thumb */}
                  <div
                    className='absolute top-0 flex items-center justify-center w-4 h-4 -ml-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer pointer-events-none'
                    style={{
                      left: distanceThumb + '%',
                      marginLeft: (distanceThumb / 100) * -16,
                    }}
                  >
                    <div className='relative w-1 -mt-2 transition-opacity opacity-0 group-hover:opacity-100'>
                      <div
                        className='absolute z-40 min-w-full mb-2 opacity-100 bottom-100'
                        style={{ marginLeft: '-20.5px' }}
                      >
                        <div className='relative shadow-md'>
                          <div className='px-4 py-1 -mt-8 text-xs text-white truncate bg-black rounded '>
                            {distance}
                          </div>
                          <svg
                            className='absolute left-0 w-full h-2 text-black top-100'
                            x='0px'
                            y='0px'
                            viewBox='0 0 255 255'
                            xmlSpace='preserve'
                          >
                            <polygon
                              className='fill-current'
                              points='0,0 127.5,127.5 255,0'
                            ></polygon>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='absolute bottom-0 left-0 -mb-6 -ml-1 text-gray-800'>
                    10
                  </div>
                  <div className='absolute bottom-0 right-0 -mb-6 -mr-1 text-gray-800'>
                    150
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Search
