import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IAddress, data as initialData } from '../addressData';
import { Pencil, Trash2 } from 'lucide-react';

type Props = {
  toggleNewDeliveryAddress: () => void;
};

const CurrentDeliveryAddress = ({ toggleNewDeliveryAddress }: Props) => {
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
    <div className="w-[500px] h-[750px] rounded border border-[#504E48] bg-transparent pt-6">
      <>
        <div className="font-semibold flex justify-between items-center text-lg pb-5 mb-10 px-6 border-b border-[#504E48]">
          <h3>Delivery address</h3>
          <Button variant="mzvariant" className="rounded" onClick={toggleNewDeliveryAddress}>
            Add new address
          </Button>
        </div>
        {data.length === 0 ? (
          <div className="pt-36 text-center">
            <h3 className="font-bold pb-5">No address added</h3>
            <h3 className="text-sm font-light w-[50%] mx-auto">
              Click on add new address to create a delivery address
            </h3>
          </div>
        ) : (
          <div className="flex gap-5 mx-auto w-[90%]">
            {data.map((address: IAddress, index: number) => {
              return (
                <div
                  key={index}
                  className="border border-[#504E48] rounded w-1/2 pt-2.5"
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
    </div>
  );
};

export default CurrentDeliveryAddress;
