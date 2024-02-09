'use client';

import React from 'react';
import { cartProductData } from '@/components/CartSection/data';
import CartEmptyState from '@/components/CartSection/CartEmptyState';
import CartSmallScreenComponent from '@/components/CartSection/CartSmallScreenComponent';
import CartLargeScreenComponent from '@/components/CartSection/CartLargeScreenComponent';

type Props = {};

const CartPage = (props: Props) => {

  return (
    <>
      {/* Desktop */}
      <div className="pt-[65px] md:pl-5 md:pr-[60px] mdg:pl-16 mdg:pr-20 3xl:pl-48 3xl:pr-96 sm:hidden md:block md:min-h-screen 3xl:min-h-[50vh]">
        {cartProductData.length === 0 ? (
          <CartEmptyState />
        ) : (
          <CartLargeScreenComponent />
        )}
      </div>

      {/* Mobile */}
      <div className="pt-[65px] md:hidden sm:block sm:px-5 mdl:px-10">
        {cartProductData.length === 0 ? (
          <CartEmptyState />
        ) : (
          <CartSmallScreenComponent />
        )}
      </div>
    </>
  );
};

export default CartPage;
