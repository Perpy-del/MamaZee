import React from 'react';
import CartTextField from '@/components/CartSection/CartTextField';

interface dbInterface {
  topicText: string;
}

const DeliveryBillingComponent = (props: dbInterface) => {
  return (
    <>
      <h3 className="font-medium text-lg pb-3">{props.topicText}</h3>
      <CartTextField label="Country or Region" margin="20px" />
      <div className="flex sm:flex-row md:flex-col mdg:flex-row sm:gap-8 md:gap-0 mdg:gap-8">
        <CartTextField label="First name" margin="20px" />
        <CartTextField label="Last name" margin="20px" />
      </div>
      <CartTextField label="Company (optional)" margin="20px" />
      <CartTextField label="Address" margin="20px" />
      <div className="flex sm:flex-col lg:flex-row sm:gap-0 lg:gap-8">
        <CartTextField label="City" margin="20px" />
        <CartTextField label="State" margin="20px" />
        <CartTextField label="Postal code" margin="20px" />
      </div>
      <CartTextField label="Phone number" margin="56px" />
    </>
  );
};

export default DeliveryBillingComponent;
