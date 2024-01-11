'use client';

import * as React from 'react';
import MobileNavBar from './NavBarComponents/MobileNavBar';
import DesktopNavBar from './NavBarComponents/DesktopNavBar';
import NavLogo from './NavBarComponents/NavLogo';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
    </>
  );
};

export default NavBar;
