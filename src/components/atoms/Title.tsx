import React, { ComponentPropsWithoutRef, FC } from 'react'

type Props = Omit<ComponentPropsWithoutRef<'h1'>, 'className'>

const Title: FC<Props> = ({children, ...props}) => {
  return (
    <h1 className='text-4xl font-bold my-4' {...props}>
			{children}
    </h1>
  )
}

export default Title
