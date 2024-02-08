import { TabsContent } from '../ui/tabs';
import React from 'react';
import { IOrder, data } from './orderHistoryData';
import { Button } from '../ui/button';
import Image from 'next/image';

type Props = {};

const OrderHistorySection = (props: Props) => {
  return (
    <>
      <TabsContent value="order-history">
        <div className="md:w-[420px] mdg:w-[500px] xxl:w-[630px] 3xl:w-[900px] h-[750px] rounded border border-[#504E48] bg-transparent pt-6">
          <div className="font-semibold pb-5 mb-10flex gap-3 items-center px-6 border-b border-[#504E48]">
            <h3>Order history ({data?.length})</h3>
          </div>
          {data?.length === 0 ? (
            <div className="pt-36 text-center">
              <h3 className="font-bold pb-5">No transaction history.</h3>
              <h3 className="text-sm font-light w-[60%] mx-auto">
                You have not made any purchase recently.
              </h3>
            </div>
          ) : (
            <div>
              {data.map((order: IOrder, index: number) => {
                return (
                  <div key={index} className="flex justify-between px-5 pt-7">
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
                        <h3 className="font-extralight text-sm">
                          {order.orderDate}
                        </h3>
                      </div>
                    </div>
                    <Button variant="mzvariant" className="rounded font-light">
                      Buy again
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </TabsContent>
    </>
  );
};

export default OrderHistorySection;
