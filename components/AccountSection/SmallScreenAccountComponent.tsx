import React from 'react';
import { FaUser } from 'react-icons/fa';
import { ShoppingBag } from 'lucide-react';
import { Heart, MoveRight } from 'lucide-react';

type Props = {};

const SmallScreenAccountComponent = (props: Props) => {
  return (
    <div className="sm:block md:hidden border border-[#504E48] h-[310px] rounded">
      <div className="flex px-5 py-7 justify-between items-center border-b border-[#504E48] cursor-pointer">
        <div className="flex gap-2 items-center">
          <FaUser size={15} />
          <h3 className="font-medium text-sm">My account</h3>
        </div>
        <MoveRight size={15} />
      </div>
      <div className="flex px-5 py-7 justify-between items-center border-b border-[#504E48] cursor-pointer">
        <div className="flex gap-2 items-center">
          <ShoppingBag size={15} />
          <h3 className="font-medium text-sm">My orders</h3>
        </div>
        <MoveRight size={15} />
      </div>
      <div className="flex px-5 py-7 justify-between items-center border-b border-[#504E48] cursor-pointer">
        <div className="flex gap-2 items-center">
          <Heart size={15} />
          <h3 className="font-medium text-sm">Wishlist</h3>
        </div>
        <MoveRight size={15} />
      </div>
      <h3 className="pl-6 pt-7 font-bold cursor-pointer hover:text-[#FD4536]">
          LOGOUT
        </h3>
    </div>
  );
};

export default SmallScreenAccountComponent;
