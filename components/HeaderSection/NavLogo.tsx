import React from 'react';
import Image from 'next/image';

type Props = {};

const NavLogo = (props: Props) => {
  return (
    <>
      <a href="/">
        <Image
          src="/mz_black.svg"
          alt="logo"
          width={150}
          height={72}
          className="sm:w-[50%] smd:w-[75%] md:w-[90%] lg:w-[100%]"
        />
      </a>
    </>
  );
};

export default NavLogo;
