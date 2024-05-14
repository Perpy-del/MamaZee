import React from 'react'
import RegisterLogin from '../../../components/Auth/RegisterLogin/LogInForm'
import RightSideSection from '../../../components/Auth/RegisterLogin/RightSideSection'

const Login = () => {

  return (
    <div className='flex'>
        <RegisterLogin />
        <RightSideSection />
    </div>
  )
}

export default Login