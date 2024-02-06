'use client';

import Footer from '@/components/Footer';
import NavBar from '@/components/HeaderSection/NavBar';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaUser } from 'react-icons/fa';
import { ShoppingBag } from 'lucide-react';
import { Heart } from 'lucide-react';
import AccountTabComponent from '@/components/AccountSection/AccountTabComponent';
import DeliveryAddressTab from '@/components/AccountSection/DeliveryAddressTab';

type Props = {};

const AccountPage = (props: Props) => {
  return (
    <div>
      <div className="bg-mzBlack text-mzLight md:pl-[40px] mdg:pl-20 mdg:pr-14">
        <NavBar />
        <div className="bg-mzBlack pt-14 pb-20 sm:px-5 md:pr-14 xl:px-28 3xl:pl-56 3xl:pr-80">
          <h1 className="font-semibold text-3xl">Account overview</h1>
          <Separator className="mt-4 bg-[#36342F]" />
          <div className="pt-8 ml-10">
            <Tabs defaultValue="account" className="w-full flex">
              <TabsList className="w-[340px] h-[500px] mr-[25px] rounded border border-[#504E48] bg-transparent">
                <div className="pl-6 pt-6 pb-6 border-b border-[#504E48]">
                  <div className="flex gap-2 items-center">
                    <FaUser />
                    <h3>My account</h3>
                  </div>
                  <div className="flex flex-col items-start">
                    <TabsTrigger value="account" className="mt-5 mb-3">
                      Account information
                    </TabsTrigger>
                    <TabsTrigger value="delivery-address" className="mb-3">
                      Delivery address
                    </TabsTrigger>
                  </div>
                </div>
                <div className="pl-6 pt-6 pb-6 border-b border-[#504E48]">
                  <div className="flex gap-2 items-center">
                    <ShoppingBag size={20} />
                    <h3>My orders</h3>
                  </div>
                  <TabsTrigger value="order-history" className="mt-5 mb-3">
                    Order history
                  </TabsTrigger>
                </div>
                <div className="pl-6 pt-6 pb-6 border-b border-[#504E48]">
                  <div className="flex gap-2 items-center">
                    <Heart size={20} />
                    <h3>Wishlist</h3>
                  </div>
                  <TabsTrigger value="saved-items" className="mt-5 mb-3">
                    Saved items
                  </TabsTrigger>
                </div>
                <h3 className="pl-6 pt-6 font-bold cursor-pointer hover:text-[#FD4536]">
                  LOGOUT
                </h3>
              </TabsList>
              <AccountTabComponent />
              <DeliveryAddressTab />
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;
