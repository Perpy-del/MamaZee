'use client'

import React from 'react'
import RegisterLogin from '../../../components/Auth/RegisterLogin/RegisterLogin'
import RightSideSection from '../../../components/Auth/RegisterLogin/RightSideSection'

const Login = () => {
  return (
    <div className='flex'>
        <RegisterLogin topText="It's nice to see you again." bottomText="Log in to Mamazee" buttonText={'Log in'}  />
        <RightSideSection />
    </div>
  )
}

export default Login