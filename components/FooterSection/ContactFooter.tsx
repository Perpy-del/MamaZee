import React from 'react';

type Props = {};

const ContactFooter = (props: Props) => {
  return (
    <div className="flex items-start pt-[20px] gap-16">
      <div className='flex flex-col gap-3 w-[300px]'>
        <h1 className='text-[16px] font-bold'>Products</h1>        
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>SeaFluid Hair Oil</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Natural Breather Hair Product</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>MamaZee Hair Brush Accessory</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>MamaZee Bamboo Hair Comb</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>MamaZee Bamboo Hair Comb</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Natural Breather Hair Product</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Natural Breather Hair Product</h3></a>        
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-[16px] font-bold'>Categories</h1>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Zara&apos;s Oil</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Glow set</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Fruity Set</h3></a>
        <a href="" className='hover:font-semibold hover:underline'><h3 className='text-[14px]'>Aleo Set</h3></a>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-[16px] font-bold'>Contact Us</h1>
        <h3 className='text-[14px]' >
          Mama Zee Hair World Admiralty Estate, Asaba, Delta State, Nigeria
        </h3>
        <h3 className='text-[14px]'>mamazeehairworld@gmail.com</h3>
        <h3 className='text-[14px]'>234-809-852-0298</h3>
      </div>
    </div>
  );
};

export default ContactFooter;
