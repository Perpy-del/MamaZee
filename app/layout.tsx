import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth';
// import Logout from './auth/logout';
import Link from 'next/link';
import { Toaster } from "@/components/ui/toaster"

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MamaZee Hair World',
  description: 'Natural and organic hair products to give your hair that shine it needs',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={mulish.className}>
      {/* <div>
        {!!session && <Logout />}
        {!session && <Link href='/auth/login'>Login</Link>}
      </div> */}
      {children}
      <Toaster />
      </body>
    </html>
  )
}
