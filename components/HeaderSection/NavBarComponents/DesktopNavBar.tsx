import React from 'react';
import { navData } from '../data';
import { IoMdCart } from 'react-icons/io';
import Link from 'next/link';
import NavLogo from './NavLogo';

type Props = {};

const DesktopNavBar = (props: Props) => {
  return (
    <div className="pt-[15px] sm:px-[10px] flex justify-between">
      {/* DESKTOP */}
      <div className="sm:hidden md:flex">
        <NavLogo />
      </div>
      <div className="md:flex md:gap-5 lg:gap-10 items-center sm:hidden">
        {navData.map((data: any, index: number) => (
          <a href={data.link} target="_blank" key={index}>
            <span className="flex relative h-7 overflow-x-hidden group">
              {data.name}
              <span className="absolute w-[100%] h-[2px] bg-mzGold left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
          </a>
        ))}
        <Link href="/cart">
          <div className="flex items-center gap-1 hover:text-mzGold hover:font-bold">
            <IoMdCart />
            <h4>Cart</h4>
          </div>
        </Link>
        <Link href="/shop">
          <h4 className="bg-mzGold text-white rounded px-4 py-1 hover:transition-transform hover:scale-105 hover:text-bold duration-500 ease-in-out hover:bg-[#daab2d]">
            Log in
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavBar;
