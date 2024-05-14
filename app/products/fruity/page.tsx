'use client';

import * as React from 'react';
import ProductCategory from '@/components/ProductCategory';
import ProductComponent from '@/components/ProductSection/ProductComponent';

type Props = {}

const FruitySetPage = (props: Props) => {
  return (
    <ProductComponent>
    <ProductCategory productCategory="Fruity Set" />
    </ProductComponent>
  )
}

export default FruitySetPage