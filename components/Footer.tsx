import React from 'react'
import ContactFooter from './FooterSection/ContactFooter'
import LeftFooter from './FooterSection/LeftFooter'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='pt-[45px] pb-[100px] lg:pl-[75px] xxl:pr-[35px] flex items-start xl:gap-12 xl:pr-[0px] xxl:gap-20 sm:pr-[20px] md:pl-[75px] flex-wrap 3xl:pl-[200px] 3xl:justify-center 3xl:gap-0 mdl:px-[40px]'>
      <LeftFooter />
      <ContactFooter />
    </div>
  )
}

export default Footer