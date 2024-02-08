'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MoveLeft } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import AccordionWishlist from '@/components/AccountSection/AccordianAccount/AccordionWishlist';

type Props = {}

const WishlistPage = (props: Props) => {
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
          <h3>Wishlist</h3>
        </div>
        <div className="border border-[#504E48] rounded">
          <Accordion
            type="single"
            collapsible
            className="w-full sm:block md:hidden"
          >
            <AccordionWishlist />
            {/* <AccordionOrder /> */}
          </Accordion>
        </div>
      </div>
    );
  };

export default WishlistPage