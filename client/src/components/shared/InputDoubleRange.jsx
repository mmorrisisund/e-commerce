import { useState } from 'react'

import PopOver from './PopOver'

const InputDoubleRange = ({
  min = 0,
  max = 100,
  step = 1,
  initialMinValue = min,
  initialMaxValue = max,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(initialMinValue)
  const [maxValue, setMaxValue] = useState(initialMaxValue)
  const [minThumb, setMinThumb] = useState((initialMinValue / max) * 100)
  const [maxThumb, setMaxThumb] = useState((initialMaxValue / max) * 100)

  const minTrigger = e => {
    const newMin = Math.min(e.target.value, maxValue - step)
    setMinValue(newMin)
    setMinThumb(((newMin - min) / (max - min)) * 100)
    onChange?.([newMin, maxValue])
  }

  const maxTrigger = e => {
    const newMax = Math.max(e.target.value, minValue + step)
    setMaxValue(newMax)
    setMaxThumb(((newMax - min) / (max - min)) * 100)
    onChange?.([minValue, newMax])
  }

  return (
    <div className='flex items-center justify-center w-full h-full m-auto group'>
      <div className='relative min-w-full py-1'>
        <div className='h-2 bg-gray-200 rounded-full'>
          <Range
            step={step}
            min={min}
            max={max}
            onChange={minTrigger}
            value={minValue}
          />

          <Range
            step={step}
            min={min}
            max={max}
            onChange={maxTrigger}
            value={maxValue}
          />

          <Fill minWidth={minThumb} maxWidth={maxThumb} />

          <Thumb location={minThumb}>
            <PopOver className='-mt-2 '>{minValue}</PopOver>
          </Thumb>

          <Thumb location={maxThumb}>
            <PopOver className='-mt-2 '>{maxValue}</PopOver>
          </Thumb>
        </div>

        <div className='absolute bottom-0 left-0 -mb-6 -ml-1 text-gray-800'>
          {min}
        </div>
        <div className='absolute bottom-0 right-0 -mb-6 -mr-1 text-gray-800'>
          {max}
        </div>
      </div>
    </div>
  )
}

export default InputDoubleRange

const Range = ({ min, max, step, value, onChange }) => (
  <input
    type='range'
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={onChange}
    className='absolute w-full h-2 opacity-0 appearance-none cursor-pointer pointer-events-none'
  />
)

const Fill = ({ minWidth, maxWidth }) => (
  <div
    className='absolute z-0 h-2 bg-green-800 rounded-full pointer-events-none'
    style={{ left: minWidth + '%', right: 100 - maxWidth + '%' }}
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
