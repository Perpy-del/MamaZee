/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { productCarousel } from './data';
import { Button } from '../ui/button';

type Props = {};

const ProductCarousel = (props: Props) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const showImage = (index: number) => {
    setCurrentIndex(index);
    clearInterval(intervalIdRef.current); // Clear the interval when a button is clicked
  };

  React.useEffect(() => {
    startAutoSwitching();
    return () => {
      clearInterval(intervalIdRef.current); // Cleanup on component unmount
    };
  }, []);

  const intervalIdRef = React.useRef<any>();
  const startAutoSwitching = () => {
    intervalIdRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productCarousel.length);
    }, 5000);
  };

  return (
    <div className="text-mzLight pt-[100px]">
      <div className="pb-[60px] text-center">
        <h1 className="font-[600] text-[30px] sm:text-[25px]">
          Luxury and affordable
        </h1>
        <h3 className="text-mzProdLight">
          Hair products crafted for the best hair results
        </h3>
      </div>
      <div className="flex flex-col gap-5 pb-[20px] px-[30px] items-center">
        <div className="flex">
          {productCarousel.map((product, index) => {
            return (
              <div key={index} className={`${currentIndex === index ? 'flex' : 'hidden'} justify-center h-full`}>
                <div className="w-[45%]">
                  <img src={product.productImage} alt="Image" />
                </div>
                <div className="w-[45%] bg-mzLight px-[40px] py-[50px] flex flex-col gap-5 rounded-r">
                  <h1 className="text-mzBlack text-[25px] font-[600]">
                    {product.productName}
                  </h1>
                  <h3 className="text-mzTextBlack text-[14px]">
                    {product.productDesc}
                  </h3>
                  <Button
                    variant="mzvariant"
                    size="mzsize"
                    className="mt-[40px]"
                  >
                    Shop now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2">
          {productCarousel.map((_, index) => {
            return (
              <div
                key={index}
                className={`w-2 h-2 ${
                  currentIndex === index ? 'bg-mzGold' : 'bg-mzLight'
                } rounded-full cursor-pointer`}
                onClick={() => {
                  showImage(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
