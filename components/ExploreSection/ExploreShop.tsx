import React from 'react';
import { exploreCards } from './data';
import Image from 'next/image';
import { Button } from '../ui/button';

type Props = {};

const ExploreShop = (props: Props) => {
  return (
    <div>
      <div className='pb-[60px] text-center'>
        <h1 className='text-[30px] font-bold'>Explore our store</h1>
        <h4>Hair products crafted for the best hair results</h4>
      </div>
      <div className='flex gap-[20px]'>
        {exploreCards.map((card, index) => {
          return (
            <div key={index} className='flex flex-col'>
              <div className='w-[270px] h-[400px]'>
              <Image
                src={card.cardImage}
                alt="product_cards"
                width={288}
                height={400}
                className='w-fit object-cover'
              />
              </div>
              <div className='flex flex-col gap-[10px] text-center'>
                <h2 className='uppercase text-[18px] font-bold'>{card.product}</h2>
                <h3 className='text-[14px]'>{card.prodDescription}</h3>
                <Button variant='mzvariant' className='rounded'>{card.prodButton}</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreShop;
