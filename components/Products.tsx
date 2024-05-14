'use client';

import React from 'react'
import ProductShop from './ProductSection/ProductShop'
import ProductCarousel from './ProductSection/ProductCarousel'

type Props = {}

const Products = (props: Props) => {
  return (
    <div className='bg-mzBlack px-[80px] lg:px-[80px] 2xl:px-[200px] sm:px-[20px] mdl:px-[60px] md:px-[80px] py-[100px]' id='products'>
      <ProductShop />
      <ProductCarousel />
    </div>
  )
}

export default Products