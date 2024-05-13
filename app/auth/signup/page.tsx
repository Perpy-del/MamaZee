import React from 'react'
import RegisterLogin from './form'
import RightSideSection from '../../../components/Auth/RegisterLogin/RightSideSection'
import { LoginRegisterInterface } from '@/interfaces/loginInterface'
import {redirect} from 'next/navigation'

const Signup = async (props: LoginRegisterInterface) => {

  return (
    <div className='flex'>
        <RegisterLogin {...props} />
        <RightSideSection />
    </div>
  )
}

export default Signup