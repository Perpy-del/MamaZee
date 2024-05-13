'use client';

import Explore from '@/components/Explore';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeaderSection/HeroSection';
import HomeDropdownComponent from '@/components/HeaderSection/NavBarComponents/HomeDropdownComponent';
import MobileNavBar from '@/components/HeaderSection/NavBarComponents/MobileNavBar';
import NavLogo from '@/components/HeaderSection/NavBarComponents/NavLogo';
import { navData } from '@/components/HeaderSection/data';
import Products from '@/components/Products';
import { useMamazeeHook } from '@/hooks/useMamazeeHook';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { IoMdCart } from 'react-icons/io';

export default function Home() {
  const { loggedInUser } = useMamazeeHook();
  const pathname = usePathname();

  console.log("Logged in user: ", loggedInUser);

  return (
    <main className="">
      <div>
        <div className="lg:pr-[60px] lg:pl-[60px] md:pr-[0px] md:pl-[35px] bg-[#0D0D0D] text-[#FFFFFF] h-[975px] md:h-[500px] mdl:h-[950px] lg:h-[550px] sm:h-[810px] smd:h-[920px] xl:h-[600px] 2xl:h-[850px] xl:pr-[10px]">
          <>
            <div className="pt-[15px] sm:px-[10px] flex items-center justify-between md:pr-[60px]">
              {/* DESKTOP */}
              <div className="sm:hidden md:flex 2xl:ml-[80px]">
                <NavLogo />
              </div>
              <div className="md:flex md:gap-5 lg:gap-10 items-center sm:hidden 2xl:mr-[200px]">
                {navData.map((data: any, index: number) => (
                  <React.Fragment key={index}>
                    {pathname === data.link ? (
                      <Link href={data.link}>
                        <span className="text-mzGold text-[17px] font-bold">
                          {data.name}
                        </span>
                      </Link>
                    ) : (
                      <Link href={data.link}>
                        <span className="flex relative h-7 overflow-x-hidden group">
                          {data.name}
                          <span className="absolute w-[100%] h-[2px] bg-mzGold left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                        </span>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
                <HomeDropdownComponent />
                <Link href="/cart">
                  <div
                    className={`flex items-center gap-1 ${
                      pathname === '/cart' || pathname === '/cart/checkout'
                        ? 'text-mzGold font-bold'
                        : 'hover:text-mzGold hover:font-bold'
                    }`}
                  >
                    <IoMdCart />
                    <h4>Cart</h4>
                  </div>
                </Link>
              </div>
            </div>
            <MobileNavBar />
          </>
          <HeroSection />
        </div>
        <Explore />
        <Products />
        <Footer />
      </div>
    </main>
  );
}
