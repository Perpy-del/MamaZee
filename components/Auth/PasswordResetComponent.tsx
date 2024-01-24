import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface passwordResetInterface {
  topText: string;
  bottomText: string;
  buttonText: string;
}

const PasswordResetComponent = (props: passwordResetInterface) => {
  return (
    <div className="bg-mzBlack sm:p-5 mdl:px-[80px] h-screen mdl:py-[30px]">
      {/* Logo */}
      <Link href="/">
        <Image src="/mz_black.svg" alt="mamazee logo" width={85} height={42} className='3xl:w-[20%]' />
      </Link>
      <div className="mdg:w-1/2 sm:w-full mx-auto flex flex-col justify-center sm:h-[95%] 3xl:h-[80%]">
        <div className="h-[70%] bg-[#000] rounded-[6px] flex flex-col justify-center items-center">
          <h1 className="text-mzTextLight md:text-[25px] sm:text-[18px] sm:w-[90%] sm:text-center font-semibold pb-5 3xl:text-[50px]">
            {props.topText}
          </h1>
          <h3 className="text-[#C7C7C7] font-medium mdl:w-[55%] md:w-[70%] text-center pb-16 sm:w-[90%] sm:text-[14px] md:text-[16px] 3xl:text-[25px]">
            {props.bottomText}
          </h3>
          <Button className="bg-mzGold hover:bg-[#daab2d] rounded h-[38px] text-mzLight mdl:w-56 md:w-64 sm:text-[16px] 3xl:text-[24px] 3xl:h-[60px]">
            <Link href="/auth/login">{props.buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetComponent;
