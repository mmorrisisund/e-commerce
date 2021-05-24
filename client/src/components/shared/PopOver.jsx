import { useState, useEffect, useRef } from 'react'

import cn from '../../utils/class-names'

const PopOver = ({ className, children, style }) => {
  const ref = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(ref.current.clientWidth / 2)
  }, [children])

  return (
    <div
      className={cn([
        'relative transition-opacity opacity-0 group-hover:opacity-100',
        className,
      ])}
      style={style}
    >
      <div
        ref={ref}
        className='absolute min-w-full mb-2 opacity-100 bottom-100'
        style={{ marginLeft: '-' + width + 'px' }}
      >
        <div className='relative shadow-md'>
          <div className='px-4 py-1 -mt-8 text-xs text-white truncate bg-black rounded '>
            {children}
          </div>
          <svg
            className='absolute z-10 w-full h-2 text-black top-100'
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
  )
}

export default PopOver
