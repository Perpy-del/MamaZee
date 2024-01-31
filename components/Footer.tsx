import React from 'react'
import RightFooter from './FooterSection/RightFooter'
import LeftFooter from './FooterSection/LeftFooter'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='pt-[45px] pb-[100px] lg:pl-[75px] xxl:pr-[35px] flex items-start xl:gap-36 xl:pr-[0px] xxl:gap-20 sm:pr-[20px] md:pl-[75px] flex-wrap 3xl:pl-[0px] 3xl:justify-center 3xl:gap-0 mdl:px-[40px]'>
      <LeftFooter />
      <RightFooter />
    </div>
  )
}

export default Footer