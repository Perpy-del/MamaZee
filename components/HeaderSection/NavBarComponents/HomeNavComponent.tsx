'use client';

import React from 'react';
import NavLogo from './NavLogo';
import { navHomeData } from '../data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeDropdownComponent from './HomeDropdownComponent';
import { IoMdCart } from 'react-icons/io';
import HomeMobileNav from './HomeMobileNav';
import HeroSection from '../HeroSection';
import HomeNavSection from './HomeNavSection';

type Props = {};

const HomeNavComponent = (props: Props) => {
  const pathname = usePathname();

  return (
    <>
      <div className="lg:pr-[60px] lg:pl-[60px] md:pr-[0px] md:pl-[35px] bg-[#0D0D0D] text-[#FFFFFF] h-[975px] md:h-[500px] mdl:h-[950px] lg:h-[550px] sm:h-[810px] smd:h-[920px] xl:h-[600px] 2xl:h-[850px] xl:pr-[10px]">
        <HomeNavSection />
        <HeroSection />
      </div>
    </>
  );
};

export default HomeNavComponent;
