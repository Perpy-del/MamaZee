import React from 'react'
import RegisterLogin from '../../../components/Auth/RegisterLogin/SignUpForm'
import RightSideSection from '../../../components/Auth/RegisterLogin/RightSideSection'

const Signup = () => {

  return (
    <div className='flex'>
        <RegisterLogin />
        <RightSideSection />
    </div>
  )
}

export default Signup