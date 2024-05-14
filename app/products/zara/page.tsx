'use client';

import * as React from 'react';
import ProductCategory from '@/components/ProductCategory';
import ProductComponent from '@/components/ProductSection/ProductComponent';

const ZaraOilPage = () => {
  return (
    <ProductComponent>
      <ProductCategory productCategory="Zara's Oils" />
    </ProductComponent>
  );
};

export default ZaraOilPage;
