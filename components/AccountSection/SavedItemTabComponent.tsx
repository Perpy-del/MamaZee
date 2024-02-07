import { TabsContent } from '../ui/tabs';
import React from 'react';
import { IOrder, data } from './orderHistoryData';
import { Button } from '../ui/button';
import Image from 'next/image';
import RemoveItemDialog from '../CartSection/RemoveItemDialog';

type Props = {}

const SavedItemTabComponent = (props: Props) => {
  return (
    <>
    <TabsContent value="saved-items">
      <div className="w-[500px] h-[750px] rounded border border-[#504E48] bg-transparent pt-6">
        <div className="font-semibold pb-5 mb-10flex gap-3 items-center px-6 border-b border-[#504E48]">
          <h3>Wishlist</h3>
        </div>
        {data?.length === 0 ? (
          <div className="pt-36 text-center">
            <h3 className="font-bold pb-5">No saved item</h3>
            <h3 className="text-sm font-light w-[60%] mx-auto">
              You have not saved any item
            </h3>
          </div>
        ) : (
          <div>
            {data.map((order: IOrder, index: number) => {
              return (
                <div key={index} className="flex justify-between px-5 py-7 border-b border-[#504E48]">
                  <div className="flex gap-4">
                    <Image
                      src={order.imageUrl}
                      alt="order image"
                      width={79}
                      height={74}
                    />
                    <div>
                      <h3 className="font-medium pb-1.5">
                        {order.productName}
                      </h3>
                      <h3 className="font-light text-[15px] pb-1.5">
                        {order.amount}
                      </h3>
                    </div>
                  </div>
                  <div>
                  <Button variant="mzvariant" className="rounded font-light mb-2">
                    Buy again
                  </Button>
                  <RemoveItemDialog removeText={'Remove item'} fromText={'wishlist'} questionText='product from your saved item?' />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </TabsContent>
  </>
  )
}

export default SavedItemTabComponent