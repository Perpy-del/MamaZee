import Image from 'next/image';
import React from 'react';

type Props = {};

const CartPage = (props: Props) => {
  return (
    <div className="pt-[65px] pl-24 pr-28">
      <div className="flex">
        <div>
          <h1 className="text-mzLight text-3xl font-medium">Your cart</h1>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <div className='flex'>
                       <Image src='/product_ex.svg' alt='cart_image' width={79} height={74} className='object-cover object-center' />
                       <div>
                        <h1>Natural Breather Hair Product</h1>
                        <h3>$400</h3>
                       </div>
                       <div>
                        
                       </div>
                    </div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CartPage;
