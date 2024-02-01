import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogClose,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Trash2, X } from 'lucide-react';

type Props = {};

const RemoveItemDialog = (props: Props) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-transparent hover:bg-transparent flex gap-1 items-center p-0 h-5">
            <Trash2 size={15} color="#FD4536" />
            <h3 className="text-[#FD4536] text-sm">Remove</h3>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove from cart</AlertDialogTitle>
            <AlertDialogDescription>
              Do you really want to remove this item from cart?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete</AlertDialogAction>
          </AlertDialogFooter>
          <AlertDialogClose className="text-mzGold absolute smd:top-5 smd:right-5 sm:top-2 sm:right-2 p-2.5 hover:bg-mzTextBlack rounded-full cursor-pointer">
            <X size={20} />
          </AlertDialogClose>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default RemoveItemDialog;
