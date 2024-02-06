import React, { useState } from 'react';
import { TabsContent } from '@/components/ui/tabs';
import CurrentDeliveryAddress from './DeliveryAddressTabComponent/CurrentDeliveryAddress';
import NewDeliveryAddress from './DeliveryAddressTabComponent/NewDeliveryAddress';

type Props = {};

const DeliveryAddressTab = (props: Props) => {
  const [newDeliveryAddress, setNewDeliveryAddress] = useState<boolean>(false);

  const createNewDeliveryAddress = () => {
    setNewDeliveryAddress(true);
  }
  const backToPreviousPage = () => {
    setNewDeliveryAddress(false);
  }

  return (
    <>
      <TabsContent value="delivery-address">
        {newDeliveryAddress ? (
          <NewDeliveryAddress toggleToPrevPage={backToPreviousPage} />
        ) : (
            <CurrentDeliveryAddress toggleNewDeliveryAddress={createNewDeliveryAddress} />
        )}
      </TabsContent>
    </>
  );
};

export default DeliveryAddressTab;
