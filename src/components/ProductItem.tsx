import { useState } from 'react';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from './ui/alert-dialog';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductItemProps {
  title: string;
  date: string;
  price: number;
  status: string;
  image: string;
  mode?: 'order' | 'wishlist';
  onRemove?: () => Promise<void> | void;
}

export default function ProductItem({
  title,
  date,
  price,
  status,
  image,
  mode = 'order',
  onRemove,
}: ProductItemProps) {
  const [isRemoving, setIsRemoving] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleRemove = async () => {
    try {
      setIsRemoving(true);
      await onRemove?.();
      toast.success('Item removed successfully!');
      setVisible(false); // trigger fade-out
    } catch (error) {
      toast.error('Failed to remove item.');
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <div
            data-status={status}
            className="flex w-[617px] items-center justify-between border-b border-gray-200 pb-4 last:border-b-0"
          >
            {/* Left side */}
            <div className="flex h-20 w-64 gap-6">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded bg-neutral-100 p-2.5">
                <img
                  className="h-16 w-11 object-contain"
                  src={image}
                  alt={title}
                />
              </div>

              <div className="flex flex-col justify-center gap-1">
                <p className="body-medium text-gray-900">{title}</p>
                <p className="label-normal-medium text-gray-500">
                  Ordered on: {date}
                </p>

                {mode === 'order' ? (
                  <p className="label-normal-medium text-gray-700">
                    ${price.toFixed(2)}
                  </p>
                ) : (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        disabled={isRemoving}
                        className="flex items-center gap-1 p-0 text-red-500 hover:text-red-700"
                      >
                        {isRemoving ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
                        ) : (
                          <>
                            <Trash2 className="h-4 w-4" />
                            Remove Item
                          </>
                        )}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action will remove the item from your wishlist.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel disabled={isRemoving}>
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleRemove}
                          disabled={isRemoving}
                        >
                          {isRemoving ? 'Removing...' : 'Remove'}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-6">
              <div className="flex items-center border-b border-gray-900 pb-1">
                {mode === 'wishlist' ? (
                  <span className="body-medium text-gray-900">
                    ${price.toFixed(2)}
                  </span>
                ) : (
                  <span className="body-medium text-gray-900">{status}</span>
                )}
              </div>
              <Button variant="outline">
                {mode === 'wishlist' ? 'Add to Cart' : 'View Item'}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
