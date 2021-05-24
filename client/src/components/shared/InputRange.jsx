import { useState } from 'react'

import PopOver from './PopOver'

const InputRange = ({
  min = 0,
  max = 100,
  step = 1,
  initialValue = 0,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue)
  const [fillWidth, setFillWidth] = useState((initialValue / max) * 100)

  const handleOnChange = e => {
    setValue(e.target.value)
    setFillWidth((e.target.value / max) * 100)
    onChange?.(e.target.value)
  }

  return (
    <div className='isolate'>
      <div className='flex items-center justify-center w-full h-full m-auto group'>
        <div className='relative min-w-full py-1'>
          <div className='h-2 bg-gray-200 rounded-full'>
            <input
              className='absolute w-full h-2 opacity-0 appearance-none cursor-pointer'
              type='range'
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleOnChange}
            />
            <Fill width={fillWidth} />

            <Thumb location={fillWidth}>
              <PopOver className='-mt-2 '>{value}</PopOver>
            </Thumb>

            <div className='absolute bottom-0 left-0 -mb-6 -ml-1 text-gray-800'>
              {min}
            </div>
            <div className='absolute bottom-0 right-0 -mb-6 -mr-1 text-gray-800'>
              {max}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default InputRange

const Fill = ({ width }) => (
  <div
    className='w-0 h-2 bg-green-800 rounded-full'
    style={{ width: width + '%' }}
  />
)

const Thumb = ({ location, children }) => (
  <div
    className='absolute top-0 flex items-center justify-center w-4 h-4 -ml-4 bg-white border border-gray-300 rounded-full shadow cursor-pointer pointer-events-none'
    style={{
      left: location + '%',
      marginLeft: (location / 100) * -16,
    }}
  >
    {children}
  </div>
)
