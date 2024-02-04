import Image from 'next/image';
import React from 'react';

type Props = {};

const ProductSection = (props: Props) => {
  return (
    <div className="flex sm:gap-3 smd:gap-7 md:gap-8 items-center pb-[30px] sm:text-sm smd:text-base md:text-base">
      <div className="flex sm:gap-2 md:gap-5 items-center">
        <h3>1{" "}pc</h3>
        <div className='md:w-[60px] sm:w-[40px]'>
        <Image
          src="/product_ex.svg"
          alt="cart_image"
          width={79}
          height={60}
          className="object-cover object-center"
        />
        </div>
        <h3 className='md:w-[50%]'>Natural Breather Hair Product</h3>
      </div>
      <h3>$400</h3>
    </div>
  );
};

export default ProductSection;
