'use client';

import * as React from 'react';
import ProductCategory from '@/components/ProductCategory';
import ProductComponent from '@/components/ProductSection/ProductComponent';

type Props = {}

const GlowSetPage = (props: Props) => {
  return (
    <ProductComponent>
    <ProductCategory productCategory="Glow Set" />
    </ProductComponent>
  )
}

export default GlowSetPage