'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ProductDescriptionDialog from '@/components/ProductSection/ProductDescriptionDialog';
import { productData } from '@/components/ProductSection/data';

type Props = {};

const CartEmptyState = (props: Props) => {
  const router = useRouter();

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
    <div className="pt-5">
      <div className="sm:text-left smd:text-center pb-24 border-b border-[#504E48]">
        <h1 className="sm:text-xl smd:text-2xl md:text-3xl font-semibold pb-2.5">
          Your cart is currently empty
        </h1>
        <h3 className="sm:text-sm sm:font-light md:text-base md:font-normal">
          Browse our categories and discover our best deals!
        </h3>
        <Button
          variant="mzvariant"
          className="rounded sm:w-full sml:w-[90%] smd:w-[200px] font-normal mt-10"
          onClick={() => router.push('/#products')}
        >
          Continue shopping
        </Button>
      </div>
      <div className="flex justify-between flex-wrap py-16">
        {productData.slice(0, 4).map((product, index) => {
          const isProductHovered = hoveredProduct === product.productName;
          return (
            <div
              key={index}
              className="mx-auto lg:pb-[30px] sm:w-[230px] sm:pb-[60px] sml:w-[250px] smd:w-[300px] mdl:w-[220px] md:w-[260px] lg:w-[200px] xl:w-[220px] xxl:w-[250px] 2xl:w-[260px] hover:opacity-100"
              onMouseEnter={() => handleMouseEnter(product.productName)}
              onMouseLeave={handleMouseLeave}
              // onClick={}
            >
              <div className="border rounded border-mzBlack w-[260px] sm:w-[230px] sml:w-[250px] smd:w-[300px] mdl:w-[220px] md:w-[260px] lg:w-[200px] xl:w-[220px] xxl:w-[250px] 2xl:w-[260px] lg:cursor-pointer relative">
                <Image
                  src={product.productImage}
                  alt="Product Image"
                  className="object-cover rounded"
                  width={300}
                  height={300}
                  priority
                />
                <div className="absolute top-0 left-0 w-full h-full lg:flex items-center justify-center bg-mzBlack/70 opacity-0 transition duration-300 ease-in-out hover:opacity-100 rounded sm:hidden">
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
              <ProductDescriptionDialog
                productName={product.productName}
                productAmt={product.productAmount}
                productDesc={product.productDescription}
                productImage={product.productImage}
              />
              <div className="flex items-center justify-between w-full">
                <h3 className="text-mzLight">{product.productAmount}</h3>
                <Button variant="mzvariant" className="rounded h-9 lg:hidden">
                  Add to cart
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartEmptyState;
