import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {};

const EmailResetPage = (props: Props) => {
  return (
    <div className="bg-mzBlack px-[80px] h-screen py-[30px]">
      {/* Logo */}
      <Link href="/">
        <Image src="/mz_black.svg" alt="mamazee logo" width={85} height={42} />
      </Link>
      <div className="w-1/2 mx-auto flex flex-col justify-center h-[95%]">
        <div className="h-[70%] bg-[#000] rounded-[6px] flex flex-col justify-center items-center">
          <h1 className="text-mzTextLight text-[25px] font-semibold pb-5">
            Email reset sent!
          </h1>
          <h3 className="text-[#C7C7C7] font-medium w-[55%] text-center pb-16">
            Please check your email for next steps to reset your password.
          </h3>
          <Button className="bg-mzGold hover:bg-[#daab2d] rounded h-[38px] text-mzLight w-64">
            <Link href="/auth/login">Return to login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailResetPage;
