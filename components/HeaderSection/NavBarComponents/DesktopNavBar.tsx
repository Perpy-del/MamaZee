import React from 'react';
import { navData } from '../data';
import { IoMdCart } from 'react-icons/io';
import Link from 'next/link';
import NavLogo from './NavLogo';
import { usePathname } from 'next/navigation';
import { AccountDropdownComponent } from './AccountDropdownComponent';
import HomeDropdownComponent from './HomeDropdownComponent';

type Props = {};

const DesktopNavBar = async(props: Props) => {
  const pathname = usePathname()

  return (
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
        {/* <HomeDropdownComponent /> */}
        <AccountDropdownComponent />
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
  );
};

export default DesktopNavBar;
