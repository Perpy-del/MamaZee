import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { IOrder, data } from '../orderHistoryData';

type Props = {};

const AccordionOrder = (props: Props) => {

  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>Order history ({data?.length})</AccordionTrigger>
      <AccordionContent className="pt-2 pb-10">
        {data?.length === 0 ? (
          null
        ) : (
          <div>
            {data.map((order: IOrder, index: number) => {
              return (
                <div key={index} className="flex flex-col gap-3 smd:pb-7 sm:px-3 smd:px-5 pt-7">
                  <div className="flex gap-4">
                    <div className='sm:w-[50%] mdm:w-[30%] smd:w-[25%]'>
                    <Image
                      src={order.imageUrl}
                      alt="order image"
                      width={79}
                      height={74}
                      className='object-cover object-center'
                    />
                    </div>
                    <div>
                      <h3 className="font-medium pb-1.5 text-sm">
                        {order.productName}
                      </h3>
                      <h3 className="font-light text-[13px] pb-1.5">
                        {order.amount}
                      </h3>
                      <h3 className="font-extralight text-xs">
                        {order.orderDate}
                      </h3>
                    </div>
                  </div>
                  <Button variant="mzvariant" className="rounded font-light smd:w-1/2">
                    Buy again
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionOrder;
