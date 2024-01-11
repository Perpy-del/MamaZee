'use client';

import Image from 'next/image';
import * as React from 'react';
import { navData } from './data';
import { XCircle, MoveRight } from 'lucide-react';
import { IoMdCart } from 'react-icons/io';
import Link from 'next/link';

type Props = {};

const NavBar = (props: Props) => {
  const ref = React.useRef<string | any>('');
  const [showNav, setShowNav] = React.useState<boolean>(false);

  const handleNavMenuClicked = () => {
    setShowNav(true);
  };

  const handleCloseButtonClicked = () => {
    setShowNav(false);
  };

  const handleClick = (e: any) => {
    if (e.target.contains(ref.current)) {
      setShowNav(false);
    }
  };

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
        {/* DESKTOP */}
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

      {/* MOBILE DEVICES */}
      <>
        <div
          className="md:hidden flex items-center relative justify-between px-[20px] transition-transform duration-500"
        >
          <div
            className="flex items-center gap-2"
          >
            {showNav ? (
              <XCircle
                className="text-mzGold sm:text-[25px] smd:text-[30px] cursor-pointer"
                onClick={handleCloseButtonClicked}
              />
            ) : (
              <div className="sm:w-6 sm:h-5 sm:flex flex-col justify-between items-center md:hidden text-4xl text-mzGold cursor-pointer overflow-hidden group" onClick={handleNavMenuClicked}>
                <span className="w-full rounded-2xl h-[2px] bg-mzGold inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                <span className="w-full rounded-2xl h-[2px] bg-mzGold inline-flex transform translate-x-2 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                <span className="w-full rounded-2xl h-[2px] bg-mzGold inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
                <span className="w-full rounded-2xl h-[2px] bg-mzGold inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
              </div>
            )}
            <a href="/">
              <Image
                src="/mz_black.svg"
                alt="logo"
                width={150}
                height={72}
                className="sm:w-[50%] smd:w-[75%] md:w-[90%] lg:w-[100%]"
              />
            </a>
          </div>
          <IoMdCart className="text-mzGold sm:text-[25px] smd:text-[30px] cursor-pointer" />
        </div>
      </>
      {showNav && (
        <div className="md:hidden sm:flex flex-col w-full gap-10 px-[20px] h-screen pt-20">
          {navData.map((data: any, index: number) => (
            <a
              href={data.link}
              target="_blank"
              key={index}
              className="flex items-center justify-between"
            >
              <h4 className="text-[18px]">{data.name}</h4>
              <MoveRight />
            </a>
          ))}
          <Link href="/shop">
            <h4 className="bg-mzGold text-white rounded px-4 py-2.5 text-center mt-10">
              Log in
            </h4>
          </Link>
        </div>
      )}
    </>
  );
};

export default NavBar;
