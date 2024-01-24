import PasswordResetComponent from '@/components/Auth/RegisterLogin/PasswordResetComponent'
import React from 'react'

type Props = {}

const PasswordResetSuccessfulPage = (props: Props) => {
  return (
    <>
      <PasswordResetComponent topText={'Password reset successful!'} bottomText={'Your password has been changed successfully. You can now use your password to log in'} buttonText={'Return to login'} />
    </>
  )
}

export default PasswordResetSuccessfulPage