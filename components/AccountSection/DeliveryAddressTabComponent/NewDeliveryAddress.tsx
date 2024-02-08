import React from 'react';
import { MoveLeft } from 'lucide-react';
import DeliveryBillingComponent from '@/components/CartSection/DeliveryBillingComponent';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CustomTheme } from '@/components/CartSection/CustomTheme';
import { Button } from '@/components/ui/button';

type Props = {
    toggleToPrevPage: () => void;
};

const NewDeliveryAddress = ({ toggleToPrevPage }: Props) => {
  const outerTheme = useTheme();

  return (
    <div className="md:w-full mdg:w-[500px] xxl:w-[630px] 3xl:w-[900px] h-[750px] rounded border border-[#504E48] bg-transparent pt-6">
      <div className="font-semibold pb-5 mb-10 px-6 border-b border-[#504E48]">
        <div className="w-[55%] hover:text-mzGold flex gap-3 items-center cursor-pointer" onClick={toggleToPrevPage}>
          <MoveLeft />
          <h3>Add new delivery address</h3>
        </div>
      </div>
      <ThemeProvider theme={CustomTheme(outerTheme)}>
        <div className='px-7'>
        <DeliveryBillingComponent />
        <Button variant='mzvariant' className='rounded w-full'>Save changes</Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default NewDeliveryAddress;
