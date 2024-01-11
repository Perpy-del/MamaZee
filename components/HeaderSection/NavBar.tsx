'use client';

import Image from 'next/image';
import * as React from 'react';
import MobileNavBar from './MobileNavBar';
import DesktopNavBar from './DesktopNavBar';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <div className="lg:pr-[80px] lg:pl-[60px] md:pr-[50px] md:pl-[35px] pt-[15px] sm:px-[10px] flex justify-between">
        <a href="/">
          <Image
            src="/mz_black.svg"
            alt="logo"
            width={150}
            height={72}
            className="sm:hidden md:flex"
          />
        </a>
        <DesktopNavBar />
      </div>
      <MobileNavBar />
    </>
  );
};

export default NavBar;
