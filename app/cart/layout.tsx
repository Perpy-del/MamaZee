import Footer from '@/components/Footer'
import NavBar from '@/components/HeaderSection/NavBar'
import React from 'react'

type Props = {}

const CartLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <div className='bg-mzBlack text-mzLight pl-20 pr-14'>
        <NavBar />
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default CartLayout