import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FaUser } from 'react-icons/fa';

export function AccountDropdownComponent() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex relative h-7 overflow-x-hidden group cursor-pointer">
          <div
            className={`flex items-center gap-2 ${
              pathname === '/account'
                ? 'text-mzGold font-bold'
                : ''
            }`}
          >
            <FaUser size={12} />
            <h4>Account</h4>
          </div>
          <span className="absolute w-[100%] h-[2px] bg-mzGold left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:w-36 lg:w-40 rounded">
        <DropdownMenuLabel>
          <Link href="/auth/login">
            <Button className="bg-mzGold text-mzLight h-10 w-full mt-5 mb-2 rounded hover:transition-transform hover:scale-105 hover:text-bold duration-500 ease-in-out hover:bg-[#daab2d]">
              Log in
            </Button>
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="py-4">
          <DropdownMenuItem
            className="flex gap-5 items-center pb-3 cursor-pointer"
            onClick={() => router.push('/account/acct')}
          >
            <FaUser />
            <h3 className="3xl:text-xl">Account</h3>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex gap-5 items-center pb-3 cursor-pointer"
            onClick={() => router.push('/account/#order')}
          >
            <ShoppingBag size={20} />
            <h3 className="3xl:text-xl">Orders</h3>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex gap-5 items-center pb-3 cursor-pointer"
            onClick={() => router.push('/account/#wish')}
          >
            <Heart size={20} />
            <h3 className="3xl:text-xl">Wishlist</h3>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
