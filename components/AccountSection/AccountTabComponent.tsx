import React from 'react';
import { TabsContent } from '../ui/tabs';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CustomTheme } from '@/components/CartSection/CustomTheme';
import CartTextField from '@/components/CartSection/CartTextField';
import { Button } from '../ui/button';

type Props = {};

const AccountTabComponent = (props: Props) => {
  const outerTheme = useTheme();

  return (
    <>
      <TabsContent value="account">
        <div className="md:w-full mdg:w-[400px] mdg:mr-[25px] lg:mr-0 lg:w-[500px] xxl:w-[630px] 3xl:w-[900px] h-[750px] rounded border border-[#504E48] bg-transparent pt-6">
          <h3 className="font-semibold text-lg pb-5 mb-10 pl-6 border-b border-[#504E48]">
            Account information
          </h3>
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
        </div>
      </TabsContent>
    </>
  );
};

export default AccountTabComponent;
