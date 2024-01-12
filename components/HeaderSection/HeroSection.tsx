/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { carouselImages } from './data';

type Props = {};

const HeroSection = (props: Props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000 })
  )

  return (
    <div className="pl-[15px] flex sm:flex-col sm:pt-[85px] sm:gap-10 sm:justify-between sm:px-[20px] md:flex-row md:gap-5 md:items-center md:justify-between md:mr-[50px] lg:pt-[60px] xl:gap-5 xl:pt-[70px] 2xl:pl-[200px] 2xl:gap-0 2xl:pr-[300px] 2xl:pt-[40px] 2xl:justify-around">
      <div className="flex sm:flex-col gap-5 sm:items-center sm:pb-[40px] md:items-start 2xl:gap-10">
        <h1 className="sm:text-[30px] leading-tight font-[800] sm:text-center sm:w-[90%] md:text-left md:text-[25px] lg:text-[36px] xl:text-[50px] xl:w-[80%]">
          Gorgeous Hair is the best Revenge
        </h1>
        <h4 className="text-mzTextLight text-[18px] sm:text-[16px] sm:w-[90%] smd:w-[55%] pb-3 sm:text-center md:text-left md:w-[75%] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 2xl:w-[65%]">
          Natural hair products that replenish your hair leaving it beautiful
          and soft
        </h4>
        <Button variant="mzvariant" size="mzsize">
          Shop now
        </Button>
      </div>
      <div className='border-mzBlack sm:ml-[-10px] sm:mr-[-1px] md:mr-[50px] xl:mr-[60px]'>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-[470px] mr-8 ml-5 -mt-10 border-mzBlack"

          <CarouselContent className='border-mzBlack bg-mzBlack'>
            {carouselImages.map((carousel, index) => (
              <CarouselItem key={index} className=''>
                <div className="">
                  <Card className='bg-mzBlack border-mzBlack'>
                    <CardContent className="">
                      <span className="">
                        <img alt='carousel_image' src={carousel.image} className='border-mzBlack bg-mzBlack' />                        
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" />
          <CarouselNext variant="ghost" />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
