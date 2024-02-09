import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Heart, Plus, Minus } from 'lucide-react';
import Image from 'next/image';

type Props = {
  productName: string;
  productAmt: string;
  productDesc: string;
  productImage: string;
};

const ProductDescriptionDialog = ({
  productName,
  productAmt,
  productDesc,
  productImage
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <h3 className="text-mzProdLight uppercase text-[14px] font-[600] py-2 hover:underline cursor-pointer">
          {productName}
        </h3>
      </DialogTrigger>
      <DialogContent className="sm:w-[250px] mdm:w-[320px] md:w-[700px] lg:w-[950px] lg:h-[520px] 3xl:w-[1700px] 3xl:h-[750px]">
        <div className="flex sm:flex-col-reverse md:flex-row items-center sm:gap-4 justify-between 3xl:justify-center md:px-5 w-full 3xl:px-28">
          <div className="sm:w-[90px] mdm:w-[120px] md:w-[50%] lg:w-[40%]">
            <Image
              src={productImage}
              alt="cart_image"
              width={435}
              height={435}
              className="object-cover object-center"
            />
          </div>
          <div className="sm:full md:w-[50%] lg:w-[55%] 3xl:[70%] sm:mt-2 md:mt-0">
            <h3 className="sm:text-lg md:text-xl 3xl:text-3xl font-bold">{productName}</h3>
            <h3 className="sm:py-2.5 sm:text-justify md:text-left md:py-2.5 lg:pt-[15px] lg:pb-5 3xl:py-10 font-semibold 3xl:text-2xl">{productAmt}</h3>
            <h3 className="sm:text-xs md:text-sm 3xl:text-xl font-light sm:pb-2.5 lg:pb-9 md:leading-6">{productDesc}</h3>
            <div className="flex gap-3 items-center sm:text-sm md:text-base sm:pb-2 md:pb-6 3xl:pb-14 hover:text-mzGold hover:font-semibold transition-all transform duration-300 ease-in-out cursor-pointer md:w-full lg:w-[35%]">
              <Heart size={18} />
              <h3 className='3xl:text-2xl'>Add to wishlist</h3>
            </div>
            <div className="flex gap-2.5">
              <div className="flex gap-2 items-center mdm:p-2 border border-[#A2A3B1] md:px-3 rounded">
                <Minus size={15} className='m-2 cursor-pointer' />
                <span className="text-lg">1</span>
                <Plus size={15} className='m-2 cursor-pointer' />
              </div>
              <Button
                variant="mzvariant"
                className="rounded font-light focus:ring-0 ring-0 h-12 w-full 3xl:w-1/3 3xl:text-lg"
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDescriptionDialog;
