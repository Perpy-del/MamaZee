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
      <div className="flex flex-col gap-5 pb-[20px] xl:px-[30px] sm:px-0 items-center sml:px-[20px] md:px-0 mdl:px-[50px]">
        <div className="flex">
          {productCarousel.map((product, index) => {
            return (
              <div key={index} className={`${currentIndex === index ? 'flex flex-wrap' : 'hidden'} justify-center h-full w-full`}>
                <div className="sm:w-[100%] xl:w-[50%] md:w-[60%] xxl:w-[40%] 3xl:w-[25%] md:rounded-l mdl:w-[80%] lg:w-[50%]">
                  <img src={product.productImage} alt="Image" className='md:rounded-l' />
                </div>
                <div className="sm:w-[100%] xl:w-[50%] xxl:w-[40%] md:w-[60%] 3xl:w-[50%] bg-mzLight xl:px-[40px] xxl:py-[30px] 3xl:px-[60px] 3xl:py-[50px] mdl:w-[80%] xl:py-[50px] sm:pt-[10px] sm:px-[20px] sm:pb-[40px] mdl:p-[20px] flex flex-col lg:gap-5 md:p-[20px] sm:gap-2 sm:rounded-b mdg:rounded-r lg:w-[50%] lg:p-[30px]">
                  <h1 className="text-mzBlack xl:text-[25px] sm:text-[20px] font-[600] 3xl:text-[40px] mdl:text-[18px]">
                    {product.productName}
                  </h1>
                  <h3 className="text-mzTextBlack lg:text-[14px] sm:text-justify sm:text-[13px] md:text-[12px] xl:text-[16px] 3xl:text-[24px] 3xl:w-[95%]">
                    {product.productDesc}
                  </h3>
                  <Button
                    variant="mzvariant"
                    size="mzsize"
                    className="xl:mt-[40px] sm:mt-[10px] 3xl:text-[18px] 3xl:mt-[20px]"
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
