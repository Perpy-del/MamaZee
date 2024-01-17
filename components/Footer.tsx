import React from 'react'
import ContactFooter from './FooterSection/ContactFooter'
import LeftFooter from './FooterSection/LeftFooter'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='pt-[45px] pb-[100px] pl-[75px] pr-[65px] flex items-start gap-32'>
      <LeftFooter />
      <ContactFooter />
    </div>
  )
}

export default Footer