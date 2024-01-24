import React from 'react';
import PasswordResetComponent from '@/components/Auth/RegisterLogin/PasswordResetComponent';

type Props = {};

const EmailResetPage = (props: Props) => {
  return (
    <>
      <PasswordResetComponent
        topText="Email reset sent!"
        bottomText="Please check your email for next steps to reset your password."
        buttonText="Return to login"
      />
    </>
  );
};

export default EmailResetPage;
