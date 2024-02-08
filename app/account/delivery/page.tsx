'use client';

import { MoveLeft } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';
import DeliveryBillingComponent from '@/components/CartSection/DeliveryBillingComponent';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CustomTheme } from '@/components/CartSection/CustomTheme';
import { Button } from '@/components/ui/button';

type Props = {};

const SmallDeliveryPage = (props: Props) => {
  const router = useRouter();
  const outerTheme = useTheme();

  return (
    <div className="px-5 pt-10 pb-28">
      <div
        className="flex items-center gap-3 pb-11 cursor-pointer"
        onClick={() => {
          router.push('/account/acct');
        }}
      >
        <MoveLeft size={18} />
        <h3 className="text-sm">Add new delivery address</h3>
      </div>
      <ThemeProvider theme={CustomTheme(outerTheme)}>
        <div>
          <DeliveryBillingComponent />
          <Button variant="mzvariant" className="rounded w-full">
            Save changes
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default SmallDeliveryPage;
