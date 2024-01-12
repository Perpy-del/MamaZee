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
import Image from 'next/image';

type Props = {};

const HeroSection = (props: Props) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000 })
  )

  return (
    <div className="pl-[15px] flex justify-between items-center py-[60px] gap-5">
      <div className="flex flex-col gap-[20px] w-[50%]">
        <h1 className="text-[66px] font-[800] leading-tight">
          Gorgeous Hair is the best Revenge
        </h1>
        <h4 className="text-mzTextLight text-[18px] w-[90%] pb-3">
          Natural hair products that replenish your hair leaving it beautiful
          and soft
        </h4>
        <Button variant="mzvariant" size="mzsize">
          Shop now
        </Button>
      </div>
      <div className='border-mzBlack'>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-[450px] mr-8 ml-5 -mt-10 border-mzBlack"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className='border-mzBlack'>
            {carouselImages.map((carousel, index) => (
              <CarouselItem key={index} className='border-mzBlack'>
                <div className="p-1 border-mzBlack">
                  <Card className='border-mzBlack'>
                    <CardContent className="flex aspect-square items-center justify-center object-fill bg-mzBlack">
                      <span className="text-4xl font-semibold border-mzBlack">
                        <img alt='carousel_image' src={carousel.image} className='border-mzBlack' />                        
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="default" />
          <CarouselNext variant="default" />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
