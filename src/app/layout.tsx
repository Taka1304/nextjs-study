import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs 勉強会サンプルコード',
  description: "Let's study Nextjs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="max-w-screen w-full min-h-screen h-full bg-slate-900 text-white">
          <Header />
          <Layout>
            {children}
          </Layout>
        </div>
      </body>
    </html>
  )
}
