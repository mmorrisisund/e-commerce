import cn from '../../utils/class-names'

const VARIANT = {
  primary: [
    'bg-green-800 text-green-50',
    'active:focus:bg-green-800 active:focus:text-green-50',
    'hover:bg-green-50 hover:text-green-800',
    'focus:outline-none',
  ],
  secondary: [
    'bg-green-50 text-green-800 border-green-800 border-2',
    'active:focus:bg-green-50 active:focus:text-green-800 border-2 active:focus:border-green-800',
    'hover:bg-green-800 hover:text-green-50 border-2 hover:border-green-50',
    'focus:outline-none',
  ],
}

const SIZE = {
  sm: ['px-2 py-1 text-sm'],
  md: ['px-3 py-2 text-base'],
  lg: ['px-4 py-2 text-lg'],
}

const Button = ({ children, variant = 'primary', size = 'md', ...rest }) => {
  return (
    <button
      {...rest}
      className={cn('rounded transition-colors ', SIZE[size], VARIANT[variant])}
    >
      {children}
    </button>
  )
}

export default Button
