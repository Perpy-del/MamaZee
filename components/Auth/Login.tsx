'use client'

import React from 'react'
import RegisterLogin from './RegisterLogin/RegisterLogin'
import RightSideSection from './RegisterLogin/RightSideSection'

const Login = () => {
  return (
    <div className='flex'>
        <RegisterLogin buttonText={'Log in'}  />
        <RightSideSection />
    </div>
  )
}

export default Login