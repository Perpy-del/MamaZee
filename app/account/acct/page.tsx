'use client';

import { Accordion } from '@/components/ui/accordion';
import { MoveLeft } from 'lucide-react';
import React from 'react';
import AccordianAcctInfo from '@/components/AccountSection/AccordianAccount/AccordianAcctInfo';
import AccordianDeliveryAdd from '@/components/AccountSection/AccordianAccount/AccordianDeliveryAdd';
import { ToggleAddressProps } from '@/components/AccountSection/DeliveryAddressTabComponent/CurrentDeliveryAddress';
import { useRouter } from 'next/navigation';

const SmallAccountPage = () => {
  const router = useRouter();

  return (
    <div className="px-5 pt-10 pb-28">
      <div
        className="flex items-center gap-4 pb-11 cursor-pointer"
        onClick={() => {
          router.push('/account');
        }}
      >
        <MoveLeft size={18} />
        <h3>My account</h3>
      </div>
      <div className="border border-[#504E48] rounded">
        <Accordion
          type="single"
          collapsible
          className="w-full sm:block md:hidden"
        >
          <AccordianAcctInfo />
          <AccordianDeliveryAdd />
        </Accordion>
      </div>
    </div>
  );
};

export default SmallAccountPage;
