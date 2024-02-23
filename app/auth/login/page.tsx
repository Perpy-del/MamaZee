import React from 'react'
import RegisterLogin from './form'
import RightSideSection from '../../../components/Auth/RegisterLogin/RightSideSection'
import { LoginRegisterInterface } from '@/interfaces/loginInterface'
// import { getServerSession } from 'next-auth'
// import { redirect } from 'next/navigation'

const Login = (props: LoginRegisterInterface) => {
  // const session = await getServerSession()

  // if (session) {
  //   redirect("/")
  // }

  return (
    <div className='flex'>
        <RegisterLogin {...props} />
        <RightSideSection />
    </div>
  )
}

export default Login