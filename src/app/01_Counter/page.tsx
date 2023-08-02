'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <h1 className='text-4xl font-bold'>Counter</h1>
      <div className='flex flex-col justify-center items-center text-2xl'>
        <p>{count}</p>
        <div className='w-full flex justify-evenly'>
          <button
            className='border rounded-lg border-black px-6 py-3 bg-blue-300' 
            onClick={() => setCount(0)}>reset
          </button>
          <button
            className='border rounded-lg border-black px-6 py-3 bg-blue-300' 
            onClick={() => setCount(count+1)}>+1
          </button>
        </div>
      </div>
      <button 
        className='border rounded-lg border-black px-6 py-3 bg-blue-300'>
        <Link href={"./01_Counter/ex"}>確認課題</Link>
      </button>
    </>
  )
}

export default Counter