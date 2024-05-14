import React from 'react'
import RegisterLogin from './form'
import RightSideSection from '../../../components/Auth/RegisterLogin/RightSideSection'
import { LoginRegisterInterface } from '@/interfaces/loginInterface'

const Login = (props: LoginRegisterInterface) => {

  return (
    <div className='flex'>
        <RegisterLogin {...props} />
        <RightSideSection />
    </div>
  )
}

export default Login