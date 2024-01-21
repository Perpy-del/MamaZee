/* eslint-disable @next/next/no-img-element */
'use client';

import * as React from 'react';
import { productData } from './data';
import { Button } from '../ui/button';

type Props = {};

const ProductShop = (props: Props) => {
  const [hoveredProduct, setHoveredProduct] = React.useState<string | null>(
    null
  );

  const handleMouseEnter = (productName: string) => {
    if (!hoveredProduct) {
      setHoveredProduct(productName);
    }
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <div>
      <div className="text-center pb-[50px]">
        <h1 className="text-[30px] sm:text-[25px] text-mzLight font-[600]">
          Our products
        </h1>
        <h4 className="text-mzLight">
          Hair products crafted for the best hair results
        </h4>
      </div>
      <div>
        <div className="flex justify-between flex-wrap pb-[70px] sm:pb-[30px]">
          {productData.map((product, index) => {
            const isProductHovered = hoveredProduct === product.productName;

            return (
                <div
                  key={index}
                  className="mx-auto pb-[30px] sm:w-[230px] sml:w-[250px] smd:w-[300px] mdl:w-[220px] md:w-[260px] lg:w-[200px] xl:w-[220px] xxl:w-[250px] 2xl:w-[260px] hover:opacity-100"
                  onMouseEnter={() =>
                    handleMouseEnter(product.productName)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="border rounded border-mzBlack w-[260px] sm:w-[230px] sml:w-[250px] smd:w-[300px] mdl:w-[220px] md:w-[260px] lg:w-[200px] xl:w-[220px] xxl:w-[250px] 2xl:w-[260px] cursor-pointer relative">
                    <img
                      src={product.productImage}
                      alt="Product Image"
                      className="object-cover rounded"
                      
                    />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-mzBlack/70 opacity-0 transition duration-300 ease-in-out hover:opacity-100 rounded'>
                      {isProductHovered && (
                        <Button
                          variant="mzvariant"
                          className="rounded w-[170px] absolute bottom-10 left-6 transition "
                        >
                          Add to cart
                        </Button>
                      )}
                    </div>
                  </div>
                  <h3 className="text-mzProdLight uppercase text-[14px] font-[600] py-2 hover:underline cursor-pointer">
                    {product.productName}
                  </h3>
                  <h3 className="text-mzLight">{product.productAmount}</h3>
                </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-between flex-wrap ">
          {productData.map((product, index) => {
            const isProductHovered = hoveredProduct === product.productName;

            return (
                <div
                  key={index}
                  className="mx-auto pb-[30px] sm:w-[230px] sml:w-[250px] smd:w-[300px] mdl:w-[220px] md:w-[260px] lg:w-[200px] xl:w-[220px] xxl:w-[250px] 2xl:w-[260px] hover:opacity-100"
                  onPointerEnter={() =>
                    handleMouseEnter(product.productName)
                  }
                  onPointerLeave={handleMouseLeave}
                >
                  <div className="border rounded border-mzBlack w-[260px] sm:w-[230px] sml:w-[250px] smd:w-[300px] mdl:w-[220px] md:w-[260px] lg:w-[200px] xl:w-[220px] xxl:w-[250px] 2xl:w-[260px] cursor-pointer relative">
                    <img
                      src={product.productImage}
                      alt="Product Image"
                      className="object-cover rounded"
                      
                    />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-mzBlack/70  opacity-0 transition duration-300 ease-in-out hover:opacity-100 rounded'>
                      {isProductHovered && (
                        <Button
                          variant="mzvariant"
                          className="rounded w-[170px] absolute bottom-10 left-6 transition"
                        >
                          Add to cart
                        </Button>
                      )}
                    </div>
                  </div>
                  <h3 className="text-mzProdLight uppercase text-[14px] font-[600] py-2 hover:underline cursor-pointer">
                    {product.productName}
                  </h3>
                  <h3 className="text-mzLight">{product.productAmount}</h3>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductShop;
