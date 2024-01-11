'use client';

import * as React from 'react';
import MobileNavBar from './NavBarComponents/MobileNavBar';
import DesktopNavBar from './NavBarComponents/DesktopNavBar';
import NavLogo from './NavBarComponents/NavLogo';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <div className="lg:pr-[80px] lg:pl-[60px] md:pr-[50px] md:pl-[35px] pt-[15px] sm:px-[10px] flex justify-between">
        <NavLogo />
        <DesktopNavBar />
      </div>
      <MobileNavBar />
    </>
  );
};

export default NavBar;
