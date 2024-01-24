'use client'

import React from 'react'
import RegisterLogin from '../../../components/Auth/RegisterLogin/RegisterLogin'
import RightSideSection from '../../../components/Auth/RegisterLogin/RightSideSection'

const Signup = () => {
  return (
    <div className='flex'>
        <RegisterLogin topText="Let’s get you started." bottomText="Sign up on Mamazee" buttonText={'Sign up'}  />
        <RightSideSection />
    </div>
  )
}

export default Signup