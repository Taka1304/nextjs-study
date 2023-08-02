import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full bg-slate-800 flex items-center px-8 py-4'>
      <Link href={"./"} className='font-extrabold text-2xl hover:underline'>Nextjs Study</Link>
    </header>
  )
}

export default Header