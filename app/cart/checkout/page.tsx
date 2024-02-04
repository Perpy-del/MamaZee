'use client';

import React from 'react';
import { Separator } from '@/components/ui/separator';
import LeftSideSection from '@/components/CartSection/LeftSideSection';
import ProductSection from '@/components/CartSection/ProductSection';
import CartTextField from '@/components/CartSection/CartTextField';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CustomTheme } from '@/components/CartSection/CustomTheme';
import { Button } from '@/components/ui/button';

type Props = {};

const CheckoutPage = (props: Props) => {
  const outerTheme = useTheme();

  return (
    <div className="bg-mzBlack pt-14 sm:px-5 md:pr-14 xl:px-28 3xl:pl-56 3xl:pr-80">
      <h1 className="font-semibold text-3xl">Checkout</h1>
      <Separator className="mt-4 bg-[#36342F]" />
      <div className="flex sm:flex-col md:flex-row">
        <div className="pt-10 sm:pb-5 md:pb-60 sm:w-full md:w-[60%] lg:w-1/2 sm:border-0 md:border-r border-[#36342F] md:pr-10">
          <LeftSideSection />
        </div>
        <div className="md:pt-10 md:pl-10">
          <h3 className="font-medium text-lg pb-6">Order Summary</h3>
          <ProductSection />
          <ProductSection />
          <ThemeProvider theme={CustomTheme(outerTheme)}>
            <div className="flex my-5 items-center gap-8">
              <CartTextField label={'Discount code'} margin={'20px'} />
              <Button variant='mzvariant' className='md:text-base w-1/2 rounded'>Apply</Button>
            </div>
          </ThemeProvider>
          <div className='flex justify-between mb-5 text-[15px] font-light'>
            <h3>Subtotal</h3>
            <h3>$800</h3>
          </div>
          <div className='flex justify-between mb-5 text-[15px] font-light'>
            <h3>Shipping</h3>
            <h3>$100</h3>
          </div>
          <div className='flex justify-between mb-5 text-lg'>
            <h3>Total</h3>
            <h3>$900</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
