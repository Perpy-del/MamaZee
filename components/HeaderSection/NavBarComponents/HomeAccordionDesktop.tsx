import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { usePathname, useRouter } from 'next/navigation';
import { FaUser } from 'react-icons/fa';
import { Heart, ShoppingBag, MoveRight } from 'lucide-react';
import { useMamazeeHook } from '@/hooks/useMamazeeHook';

export function HomeAccordionDesktop() {
  const { userName, loggedInUser } = useMamazeeHook();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-0 pt-0 text-[18px]">
          <div
            className={`flex items-center gap-2 text-mzLight ${
              pathname === '/account' ? 'text-mzGold font-bold' : ''
            }`}
          >
            {loggedInUser ? (
              <h4 className="text-mzGold font-bold">Hi, {userName}</h4>
            ) : (
              <h4>Account</h4>
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div
            className="flex items-center justify-between border-b border-[#504E48]"
            onClick={() => router.push('/account/acct')}
          >
            <div className="flex gap-5 items-center py-3 cursor-pointer">
              <FaUser size={20} />
              <h3 className="3xl:text-xl">Account</h3>
            </div>
            <MoveRight size={16} />
          </div>
          <div
            className="flex items-center justify-between border-b border-[#504E48]"
            onClick={() => router.push('/account/order')}
          >
            <div className="flex gap-5 items-center py-3 cursor-pointer">
              <ShoppingBag size={20} />
              <h3 className="3xl:text-xl">Orders</h3>
            </div>
            <MoveRight size={16} />
          </div>
          <div
            className="flex items-center justify-between"
            onClick={() => router.push('/account/wish')}
          >
            <div className="flex gap-5 items-center py-3 cursor-pointer">
              <Heart size={20} />
              <h3 className="3xl:text-xl">Wishlist</h3>
            </div>
            <MoveRight size={16} />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
