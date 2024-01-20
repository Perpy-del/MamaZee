import React from 'react';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { navData } from '../data';
import { IoMdCart } from 'react-icons/io';
import MenuCloseIcon from './LeftSideNav';

type Props = {};

const MobileNavBar = (props: Props) => {
  const [showNav, setShowNav] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Apply or remove the overflow-hidden class based on the showNav state
    const handleBodyOverflow = () => {
      document.body.style.overflow = showNav ? 'hidden' : 'auto';
    };

    handleBodyOverflow();

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showNav]);

  return (
    <div className='overflow-hidden'>
      {/* MOBILE DEVICES */}
      <>
        <div className="md:hidden flex items-center relative justify-between px-[20px] transition-transform duration-500">
          <MenuCloseIcon showNav={showNav} setShowNav={setShowNav} />
          <IoMdCart className="text-mzGold sm:text-[25px] smd:text-[30px] cursor-pointer" />
        </div>
      </>

      {/* Nav Items themselves */}
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
          <Link href="/auth/login">
            <h4 className="bg-mzGold text-white rounded px-4 py-2.5 text-center mt-10">
              Log in
            </h4>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNavBar;
