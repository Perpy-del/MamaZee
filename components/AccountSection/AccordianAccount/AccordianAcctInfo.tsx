import React from 'react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CustomTheme } from '@/components/CartSection/CustomTheme';
import CartTextField from '@/components/CartSection/CartTextField';
import { Button } from '@/components/ui/button';

type Props = {};

const AccordianAcctInfo = (props: Props) => {
  const outerTheme = useTheme();

  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>Account information</AccordionTrigger>
      <AccordionContent className="py-10">
        <ThemeProvider theme={CustomTheme(outerTheme)}>
          <div className="px-5">
            <CartTextField label={'First name'} margin={'40px'} />
            <CartTextField label={'Last name'} margin={'40px'} />
            <CartTextField label={'Email Address'} margin={'40px'} />
            <CartTextField label={'Current password'} margin={'40px'} />
            <CartTextField label={'New password'} margin={'40px'} />
            <CartTextField label={'Confirm password'} margin={'40px'} />
          </div>
        </ThemeProvider>
        <div className="text-center">
          <Button variant="mzvariant" className="rounded w-[90%]">
            Save changes
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordianAcctInfo;
