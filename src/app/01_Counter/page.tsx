'use client'

import Button from '@/components/atoms/Button'
import Title from '@/components/atoms/Title'
import Link from 'next/link'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Title>Counter</Title>
      <div className='flex flex-col justify-center items-center text-2xl'>
        <p>Count: {count}</p>
        <div className='w-full flex justify-evenly'>
          <Button onClick={() => setCount(0)}>reset</Button>
          <Button onClick={() => setCount(count+1)}>+1</Button>
        </div>
      </div>
      <Button>
        <Link className='hover:underline' href={"./01_Counter/ex"}>確認課題</Link>
      </Button>
    </>
  )
}

export default Counter