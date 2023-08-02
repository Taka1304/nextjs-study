import React, { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react'

type Props = Omit<ComponentPropsWithoutRef<'button'>, 'className'>

const Button: FC<Props> = ({children, ...props}) => {
  return (
    <button 
			className="border rounded-lg border-black px-6 py-3 bg-blue-300"
			{...props}>
      {children}
    </button>
  )
}

export default Button
