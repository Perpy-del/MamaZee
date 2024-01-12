import React from 'react'
import NavBar from './HeaderSection/NavBar'
import HeroSection from './HeaderSection/HeroSection'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='lg:pr-[80px] lg:pl-[60px] md:pr-[0px] md:pl-[35px] bg-[#0D0D0D] text-[#FFFFFF] h-[975px] md:h-[500px] lg:h-[550px] sm:h-[770px] smd:h-[870px] xl:h-[600px] xl:mr-[40px] 2xl:h-[850px]'>
        <NavBar />
        <HeroSection />
    </div>
  )
}

export default Header