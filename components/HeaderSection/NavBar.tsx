import Image from 'next/image';
import React from 'react';
import { navData } from './data';
import Link from 'next/link';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="px-[80px] pt-[15px] flex justify-between">
      <a href="/">
        <Image src="/mz_black.svg" alt="logo" width={150} height={72} />
      </a>
      <div className="flex gap-10 items-center">
        {navData.map((data: any, index: number) => (
          <a href={data.link} target="_blank" key={index}>
            <span className="flex relative h-7 overflow-x-hidden group">
              {data.name}
              <span className="absolute w-[100%] h-[2px] bg-[#BE8C04] left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
          </a>
        ))}
        <Link href="/shop">
          <h4 className="bg-[#BE8C04] text-white rounded px-3 py-2 hover:transition-transform hover:scale-105 hover:text-bold duration-500 ease-in-out hover:bg-[#daab2d]">
            Log in
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
