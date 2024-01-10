import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MamaZee Hair World',
  description: 'Natural and organic hair products to give your hair that shine it needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}
