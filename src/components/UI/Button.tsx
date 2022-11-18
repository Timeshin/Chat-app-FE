import { FC } from 'react'
import { IButton } from 'interfaces/components/components.interfaces'

const Button: FC<IButton> = ({ children, className, type, ...props }) => {
  return (
    <button {...props} className={`max-w-[400px] bg-primary py-3 px-8 text-xl text-white ${className}`}>
      {children}
    </button>
  )
}

export default Button