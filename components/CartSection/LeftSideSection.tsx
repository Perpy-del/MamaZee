import React from 'react';
import { CustomTheme } from '@/components/CartSection/CustomTheme';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Dot } from 'lucide-react';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import CartTextField from '@/components/CartSection/CartTextField';
import DeliveryBillingComponent from '@/components/CartSection/DeliveryBillingComponent';
import { cardImageData } from './data';
import { Button } from '../ui/button';

type Props = {};

const LeftSideSection = (props: Props) => {
  const outerTheme = useTheme();

  return (
    <form>
      <ThemeProvider theme={CustomTheme(outerTheme)}>
        <h3 className="font-medium text-lg pb-3">Contact</h3>
        <CartTextField label="Email address" margin="50px" />
        <DeliveryBillingComponent topicText="Delivery" />
        <h3 className="font-medium text-lg pb-3">Shipping method</h3>
        <CartTextField
          label="Enter your address to select preferable shipping method"
          margin="50px"
        />
        <h3 className="font-medium text-lg pb-5">Payment method</h3>
        <div className="flex justify-between items-center pb-8">
          <div className="flex md:gap-3 mdg:gap-0 lg:gap-3 items-center">
            <Dot className="text-mzLight" size={30} />
            <h3 className="font-medium sm:text-sm md:text-base mdg:text-sm lg:text-base">Credit cards</h3>
          </div>
          <div className="flex gap-2 sm:flex-wrap">
            {cardImageData.map((card, index) => {
              return (
                <div key={index} className='sm:w-[18px] smd:w-[30px] md:w-[37px] mdg:w-[25px] lg:w-[37px]'>
                  <Image
                    src={card}
                    alt="credit-card"
                    width={37}
                    height={25}
                    className="object-cover object-center"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <CartTextField label="Card number" margin="20px" />
        <div className="flex sm:flex-row md:flex-col mdg:flex-row sm:gap-8 md:gap-0 mdg:gap-8">
          <CartTextField label="Expiration date (MM/YY)" margin="20px" />
          <CartTextField label="Security code (CVV)" margin="20px" />
        </div>
        <CartTextField label="Name on card" margin="20px" />
        <div className="flex items-center gap-2 pb-12">
          <Checkbox id="address" />
          <label htmlFor="address" className='sm:text-sm md:text-base'>
            Use shipping address as billing address{' '}
          </label>
        </div>
        <DeliveryBillingComponent topicText="Billing address" />
        <h3 className="font-medium text-lg pb-4">Remember me</h3>
        <div className="flex items-center sm:gap-4 md:gap-2 pb-12">
          <Checkbox id="save-info" />
          <label htmlFor="save-info" className='sm:text-sm md:text-base'>
            Save my information for a faster checkout{' '}
          </label>
        </div>
        <Button variant="mzvariant" className="w-full rounded h-12 text-base sm:hidden md:block">
          Pay now
        </Button>
      </ThemeProvider>
    </form>
  );
};

export default LeftSideSection;
