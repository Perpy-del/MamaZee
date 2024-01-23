'use client'

import React from 'react'
import RegisterLogin from './RegisterLogin/RegisterLogin'
import RightSideSection from './RegisterLogin/RightSideSection'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='flex'>
        <RegisterLogin topText={''} bottomText={''} buttonText={'Log in'}  />
        <RightSideSection />
    </div>
  )
}

export default Login