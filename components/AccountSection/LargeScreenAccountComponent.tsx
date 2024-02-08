import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaUser } from 'react-icons/fa';
import { ShoppingBag } from 'lucide-react';
import { Heart } from 'lucide-react';
import AccountTabComponent from '@/components/AccountSection/AccountTabComponent';
import DeliveryAddressTab from '@/components/AccountSection/DeliveryAddressTab';
import OrderHistorySection from '@/components/AccountSection/OrderHistorySection';
import SavedItemTabComponent from '@/components/AccountSection/SavedItemTabComponent';

type Props = {};

const LargeScreenAccountComponent = (props: Props) => {
  return (
    <Tabs defaultValue="account" className="w-full sm:hidden md:flex">
      <TabsList className="md:w-full mdg:w-[500px] lg:w-[340px] 3xl:w-[650px] h-[500px] 3xl:h-[530px] mr-[25px] 3xl:mr-[50px] rounded border border-[#504E48] bg-transparent">
        <div className="pl-6 pt-6 pb-6 border-b border-[#504E48]">
          <div className="flex gap-2 items-center">
            <FaUser />
            <h3 className='3xl:text-xl'>My account</h3>
          </div>
          <div className="flex flex-col items-start">
            <TabsTrigger value="account" className="mt-5 mb-3 3xl:text-lg">
              Account information
            </TabsTrigger>
            <TabsTrigger value="delivery-address" className="mb-3 3xl:text-lg">
              Delivery address
            </TabsTrigger>
          </div>
        </div>
        <div className="pl-6 pt-6 pb-6 border-b border-[#504E48]">
          <div className="flex gap-2 items-center">
            <ShoppingBag size={20} />
            <h3 className='3xl:text-xl'>My orders</h3>
          </div>
          <TabsTrigger value="order-history" className="mt-5 mb-3 3xl:text-lg">
            Order history
          </TabsTrigger>
        </div>
        <div className="pl-6 pt-6 pb-6 border-b border-[#504E48]">
          <div className="flex gap-2 items-center">
            <Heart size={20} />
            <h3 className='3xl:text-xl'>Wishlist</h3>
          </div>
          <TabsTrigger value="saved-items" className="mt-5 mb-3 3xl:text-lg">
            Saved items
          </TabsTrigger>
        </div>
        <h3 className="pl-6 pt-6 font-bold 3xl:text-lg cursor-pointer hover:text-[#FD4536]">
          LOGOUT
        </h3>
      </TabsList>
      <AccountTabComponent />
      <DeliveryAddressTab />
      <OrderHistorySection />
      <SavedItemTabComponent />
    </Tabs>
  );
};

export default LargeScreenAccountComponent;
