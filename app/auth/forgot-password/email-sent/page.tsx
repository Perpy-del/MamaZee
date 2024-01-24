import React from 'react';
import PasswordResetComponent from '@/components/Auth/PasswordResetComponent';

type Props = {};

const EmailResetSentPage = (props: Props) => {
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

export default EmailResetSentPage;
