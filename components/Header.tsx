import React from 'react'
import NavBar from './HeaderSection/NavBar'
import HeroSection from './HeaderSection/HeroSection'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='bg-[#0D0D0D] text-[#FFFFFF] h-[975px] md:h-[500px] lg:[845px]'>
        <NavBar />
        <HeroSection />
    </div>
  )
}

export default Header