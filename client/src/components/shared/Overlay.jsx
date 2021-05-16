import { useEffect } from 'react'

import cn from '../../utils/class-names'

const Overlay = ({ show, onClose }) => {
  useEffect(() => {
    const handler = e => {
      if (e.code === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handler)

    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <button
      onClick={onClose}
      className={cn([
        'fixed inset-0 h-screen w-screen bg-black transition-opacity',
        show
          ? 'bg-opacity-50 cursor-default'
          : 'bg-opacity-0 pointer-events-none',
      ])}
    />
  )
}

export default Overlay
