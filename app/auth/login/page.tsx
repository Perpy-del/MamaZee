import React from 'react'
import RegisterLogin from '../../../components/Auth/RegisterLogin/RegisterLogin'
import RightSideSection from '../../../components/Auth/RegisterLogin/RightSideSection'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className='flex'>
        <RegisterLogin />
        <RightSideSection />
    </div>
  )
}

export default LoginPage