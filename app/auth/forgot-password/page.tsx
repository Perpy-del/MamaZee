'use client';

import React from 'react';
import ForgotResetPasswordComponent from '@/components/Auth/ForgotResetPasswordComponent';

type Props = {};

const ForgotPassword = (props: Props) => {

  return (
    <>
      <ForgotResetPasswordComponent topText={'Forgot password?'} bottomText={'No worries, we’ll send you reset instructions'} />
    </>
  );
};

export default ForgotPassword;
