'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import RemoveItemDialog from '@/components/CartSection/RemoveItemDialog';
import { ICardProductData, cartProductData } from './data';

type Props = {};

const CartSmallScreenComponent = (props: Props) => {
  const router = useRouter();

  const [itemNum, setItemNum] = React.useState<number>(1);

  const decreaseItemNum = () => {
    if (itemNum > 1) setItemNum(prevItem => prevItem - 1);
  };

  const increaseItemNum = () => {
    setItemNum(prevItem => prevItem + 1);
  };

  return (
    <div>
      <h1 className="text-mzLight text-2xl font-medium pb-10">Your cart</h1>
      <div className="flex flex-col">
        <div>
          <table className="table-auto w-full">
            <thead className="border-collapse">
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartProductData.map((product: ICardProductData, index: number) => {
                return (
                  <tr key={index}>
                    <td>
                      <div className="flex flex-col gap-2">
                        <Image
                          src={product.imageUrl}
                          alt="cart_image"
                          width={79}
                          height={74}
                          className="object-cover object-center"
                        />
                        <div className="w-[90%]">
                          <h1 className="font-medium pb-3">
                            {product.name}
                          </h1>
                          <h3 className="text-sm font-bold pb-3">${product.amount}</h3>
                        </div>
                      </div>
                      <RemoveItemDialog
                        removeText={'Remove'}
                        fromText={'cart'}
                        questionText="item from cart"
                      />
                    </td>
                    <td>
                      <div className="flex items-center px-1 py-1 gap-1 rounded border justify-center border-[#D9D9D9]-500 w-[90%]">
                        <span
                          className="text-xl px-2 hover:bg-mzTextBlack cursor-pointer"
                          onClick={decreaseItemNum}
                        >
                          -
                        </span>
                        <span className="p-1">{itemNum}</span>
                        <span
                          className="text-xl px-2 hover:bg-mzTextBlack cursor-pointer"
                          onClick={increaseItemNum}
                        >
                          +
                        </span>
                      </div>
                      <h3 className="mt-2.5 font-bold">
                        ${product.amount * itemNum}
                      </h3>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="min-h-screen">
          <div className="mt-5 flex justify-between pt-5">
            <h2 className="font-medium">Subtotal</h2>
            <h2 className="font-medium">$20000</h2>
          </div>
          <h5 className="text-xs font-medium text-[#A4A4A4] pb-14 pt-2.5">
            Delivery fees not included
          </h5>
          <Button
            className="block mb-4 sm:w-full mdl:w-[70%] mdl:mx-auto h-12 rounded"
            variant="mzvariant"
            onClick={() => router.push('/cart/checkout')}
          >
            Checkout
          </Button>
          <Button
            className="sm:w-full mdl:w-[70%] h-12 mdl:mx-auto flex justify-center"
            variant="mzTrans"
            onClick={() => router.push('/#products')}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSmallScreenComponent;
