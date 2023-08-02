import React, { FC } from 'react'

type Props = {
    children: React.ReactNode
}

const Layout: FC<Props> = ({children}) => {
  return (
    <main className='px-8 py-6'>
      {children}
    </main>
  )
}

export default Layout