import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import {
  IAddress,
  data as initialData,
} from '@/components/AccountSection/addressData';
import { useRouter } from 'next/navigation';

const AccordianDeliveryAdd = () => {
  const router = useRouter();
  const [data, setData] = useState<IAddress[]>(initialData);

  const toggleDefaultAddress = (add: IAddress) => {
    const newData = data.map(address => {
      if (address === add) {
        address.setAsDefault = true;
      } else {
        address.setAsDefault = false;
      }
      return address;
    });
    setData(newData);
  };

  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>Delivery address</AccordionTrigger>
      <AccordionContent>
        <>
          <div className="pt-7 pb-5 pl-4 border-t border-[#504E48]">
            <Button
              variant="mzvariant"
              className="rounded font-light text-sm"
              onClick={() => {
                router.push('/account/delivery');
              }}
            >
              Add new address
            </Button>
          </div>
          {data.length === 0 ? null : (
            <div className="flex flex-col gap-5 mx-auto w-[90%]">
              {data.map((address: IAddress, index: number) => {
                return (
                  <div
                    key={index}
                    className="border border-[#504E48] rounded w-full pt-2.5"
                  >
                    <h3 className="pb-2 pl-2.5 pr-3">
                      {address.firstName + ' ' + address.lastName}
                    </h3>
                    <div className="text-sm font-extralight pl-2.5 pr-3">
                      <h3>{address.address}</h3>
                      <h3>
                        {address.city}, {address.state}
                      </h3>
                      <h3>{address.postalCode}</h3>
                      <h3 className="pb-2">{address.phoneNumber}</h3>
                    </div>
                    {address.setAsDefault && (
                      <h3 className="text-[#34A853] text-xs pb-3 pl-2.5">
                        Default address
                      </h3>
                    )}
                    <div className="flex justify-between items-center  border-t border-[#504E48]">
                      <h3
                        className={`py-2 text-sm ${
                          address.setAsDefault
                            ? 'cursor-no-drop text-[#AAAAAA]'
                            : 'cursor-pointer hover:text-mzGold'
                        } pl-2.5`}
                        onClick={() => toggleDefaultAddress(address)}
                      >
                        Set as default
                      </h3>
                      <div className="flex gap-4 pr-3">
                        <Pencil
                          size={15}
                          color="#AC8005"
                          className="hover:cursor-pointer"
                        />
                        <Trash2
                          size={15}
                          color="#AC8005"
                          className="hover:cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordianDeliveryAdd;
