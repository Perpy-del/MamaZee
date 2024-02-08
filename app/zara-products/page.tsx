'use client';

import * as React from 'react';
import { productData } from '@/components/ProductSection/data';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ProductCategory from '@/components/ProductCategory';

type Props = {
  productCategory: string
};

const ZaraOilPage = ({productCategory}: Props) => {
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
    <>
    <ProductCategory productCategory="Zara's Oils" />
    </>
  );
};

export default ZaraOilPage;
