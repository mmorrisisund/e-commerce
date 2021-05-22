import { forwardRef } from 'react'

const InputGroup = forwardRef(
  ({ label, placeholder, type, name, ...rest }, ref) => (
    <div>
      <label className='mr-1 leading-4' htmlFor={name}>
        {label}
      </label>
      <input
        className='w-full text-sm placeholder-green-700 bg-transparent border-b focus:outline-none'
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
)

export default InputGroup
