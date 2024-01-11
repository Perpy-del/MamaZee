import React from 'react';
import Image from 'next/image';
import { XCircle } from 'lucide-react';

type MenuCloseIconProps = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuCloseIcon = ({ showNav, setShowNav }: MenuCloseIconProps) => {
  const ref = React.useRef<string | any>('');

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
      {/* Menu / Close Icon for the Nav Items */}
      <div className="flex items-center gap-2">
        {showNav ? (
          <XCircle
            className="text-mzGold sm:text-[25px] smd:text-[30px] cursor-pointer"
            onClick={handleCloseButtonClicked}
          />
        ) : (
          <div
            className="sm:w-6 sm:h-5 sm:flex flex-col justify-between items-center md:hidden text-4xl text-mzGold cursor-pointer overflow-hidden group"
            onClick={handleNavMenuClicked}
          >
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
    </>
  );
};

export default MenuCloseIcon;
