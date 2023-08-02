import Title from '@/components/atoms/Title'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Title>Next.js 勉強資料</Title>

      <ul>
        <li><Link className='hover:underline' href={"./01_Counter"}>第1回　カウントアップボタンをつくる</Link></li>
        <li><Link className='hover:underline' href={"./02"}>第2回　カウントアップボタンをつくる</Link></li>
        <li><Link className='hover:underline' href={"./03"}>第3回　カウントアップボタンをつくる</Link></li>
        <li><Link className='hover:underline' href={"./04"}>第4回　カウントアップボタンをつくる</Link></li>
        <li><Link className='hover:underline' href={"./05"}>第5回　カウントアップボタンをつくる</Link></li>
        <li><Link className='hover:underline' href={"./06"}>第6回　カウントアップボタンをつくる</Link></li>
        <li><Link className='hover:underline' href={"./07"}>第7回　カウントアップボタンをつくる</Link></li>
      </ul>
    </>
  )
}
