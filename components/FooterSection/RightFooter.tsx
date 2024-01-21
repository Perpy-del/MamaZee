import React from 'react';

type Props = {};

const ContactFooter = (props: Props) => {
  return (
    <div className="flex items-start pt-[20px] xl:pt-[30px] lg:gap-16 sml:gap-9 lg:px-[20px] sm:px-[20px] sm:gap-10 md:gap-16 xl:px-0 flex-wrap">
      <div className='flex flex-col gap-3 xxl:w-[300px]'>
        <h1 className='text-[16px] font-bold'>Products</h1>        
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>SeaFluid Hair Oil</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Natural Breather Hair Product</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>MamaZee Hair Brush Accessory</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>MamaZee Bamboo Hair Comb</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>MamaZee Bamboo Hair Comb</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Natural Breather Hair Product</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Natural Breather Hair Product</h3></a>        
      </div>
      <div className='flex flex-col gap-3 3xl:pr-10'>
        <h1 className='text-[16px] font-bold'>Categories</h1>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Zara&apos;s Oil</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Glow set</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Fruity Set</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Aleo Set</h3></a>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-[16px] font-bold'>Contact Us</h1>
        <h3 className='text-[14px] sm:w-[80%] sml:w-[90vw] lg:w-[80%] xl:w-[75%]' >
          Mama Zee Hair World, <span className='block'>Admiralty Estate, Asaba, Delta State, Nigeria</span>
        </h3>
        <h3 className='text-[14px]'>mamazeehair@gmail.com</h3>
        <h3 className='text-[14px]'>234-906-504-1260</h3>
      </div>
    </div>
  );
};

export default ContactFooter;
