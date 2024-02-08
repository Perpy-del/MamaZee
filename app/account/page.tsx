'use client';

import { Separator } from '@/components/ui/separator';
import React from 'react';
import LargeScreenAccountComponent from '@/components/AccountSection/LargeScreenAccountComponent';
import SmallScreenAccountComponent from '@/components/AccountSection/SmallScreenAccountComponent';

type Props = {};

const AccountPage = (props: Props) => {
  return (
    <div className="bg-mzBlack pt-14 pb-20 sm:px-5 md:pr-14 xl:px-28 3xl:pl-56 3xl:pr-80">
      <h1 className="font-semibold sm:text-2xl md:text-3xl">
        Account overview
      </h1>
      <Separator className="mt-4 bg-[#36342F] sm:hidden md:block" />
      <div className="pt-8 mdg:ml-10 3xl:ml-36 lg:mr-10 2xl:mr-0">
        <LargeScreenAccountComponent />
        <SmallScreenAccountComponent />
      </div>
    </div>
  );
};

export default AccountPage;
