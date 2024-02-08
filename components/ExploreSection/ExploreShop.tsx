/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { exploreCards } from './data';
import { Button } from '../ui/button';
import { Card, CardShopContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  // CarouselItem,
  CarouselShopItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {};

const ExploreShop = (props: Props) => {
  const router = useRouter();

  return (
    <div id='explore'>
      <div className="md:pb-[30px] sm:pb-[45px] text-center">
        <h1 className="lg:text-[30px] font-bold sm:text-[24px] 3xl:text-[45px]">
          Explore our store
        </h1>
        <h4 className="sm:text-[14px] 3xl:text-[24px] lg:text-[16px]">
          Hair products crafted for the best hair results
        </h4>
      </div>
      <>
        {/* Desktop Version */}
        <div className="flex md:justify-between mdl:justify-evenly mdg:justify-around mx-auto p-[50px] sm:hidden mdl:flex flex-wrap mdl:pl-[10px] pr-[5px] 3xl:px-[200px]">
          {exploreCards.map((card, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-5 pb-12"
              >
                <div className="transform duration-500 ease-in-out cursor-pointer hover:scale-105">
                  <Image
                    src={card.cardImage}
                    alt="product_cards"
                    className="w-[95%] mdl:w-[250px] lg:w-[200px] xl:w-[250px] mdg:w-[180px] 3xl:w-[400px]"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
                <div className="flex flex-col gap-[10px] text-center sm:gap-1 mdg:w-[80%] xl:w-[90%]">
                  <h2 className="uppercase text-[18px] font-bold 3xl:text-[24px]">
                    {card.product}
                  </h2>
                  <h3 className="text-[14px] lg:text-[12px] sm:text-[13px] mdg:text-[12px] 3xl:text-[18px]">
                    {card.prodDescription}
                  </h3>
                  <Button
                    variant="mzvariant"
                    className="rounded w-[100%] mx-auto 3xl:text-[18px]"
                    onClick={() => router.push(card.href)}
                  >
                    {card.prodButton}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Version */}
        <Carousel className="w-full max-w-[288px] mx-auto sm:pl-3 smd:pl-4 smd:flex mdl:hidden">
          <CarouselContent>
            {exploreCards.map((card, index) => (
              <CarouselShopItem key={index} className='pr-2 items-center'>
                {/* <div className=""> */}
                  <Card className='border-mzLight'>
                    <CardShopContent className=" items-center justify-center">
                      <div className=''>
                        <Image
                          src={card.cardImage}
                          alt="product_cards"
                          className="object-contain"
                          width={500}
                          height={500}
                          priority
                        />
                      </div>
                      <div className="flex flex-col gap-[10px] text-center sm:gap-1">
                        <h2 className="uppercase text-[18px] font-bold">
                          {card.product}
                        </h2>
                        <h3 className="text-[14px] sm:text-[13px]">
                          {card.prodDescription}
                        </h3>
                        <Button
                          variant="mzvariant"
                          className="rounded w-[100%] mx-auto"
                        >
                          {card.prodButton}
                        </Button>
                      </div>
                    </CardShopContent>
                  </Card>
                {/* </div> */}
              </CarouselShopItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant={null} />
          <CarouselNext variant={null} />
        </Carousel>
      </>
    </div>
  );
};

export default ExploreShop;
 