import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Next.js 勉強資料</h1>

      <ul>
        <li><Link href={"./01_Counter"}>第1回　カウントアップボタンをつくる</Link></li>
        <li><Link href={"./02"}>第2回　カウントアップボタンをつくる</Link></li>
        <li><Link href={"./03"}>第3回　カウントアップボタンをつくる</Link></li>
        <li><Link href={"./04"}>第4回　カウントアップボタンをつくる</Link></li>
        <li><Link href={"./05"}>第5回　カウントアップボタンをつくる</Link></li>
        <li><Link href={"./06"}>第6回　カウントアップボタンをつくる</Link></li>
        <li><Link href={"./07"}>第7回　カウントアップボタンをつくる</Link></li>
      </ul>
    </div>
  )
}
