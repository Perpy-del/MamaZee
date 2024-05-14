'use client';

import * as React from 'react';
import ProductCategory from '@/components/ProductCategory';
import ProductComponent from '@/components/ProductSection/ProductComponent';

type Props = {};

const AloeSetPage = (props: Props) => {
  return (
    <ProductComponent>
      <ProductCategory productCategory="Aloe Set" />
    </ProductComponent>
  );
};

export default AloeSetPage;
