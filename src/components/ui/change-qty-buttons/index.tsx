import { useStore } from '@/store/store';
import { useShallow } from 'zustand/react/shallow';

import { Plus, Minus } from 'lucide-react';

type Props = {
  productId: string;
};

export default function ChangeQtyButtons({ productId }: Props) {
  const { getProductById, decQty, incQty } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQty: state.decQty,
      incQty: state.incQty,
    })),
  );

  const product = getProductById(productId);

  return (
    <>
      {product && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => decQty(product.id)}
            className="cursor-pointer hover:bg-gray-300 active:bg-gray-200 p-2 rounded-full"
          >
            <Minus size={16} />
          </button>
          <span className="text-lg font-bold">{product.qty}</span>
          <button
            type="button"
            onClick={() => incQty(product.id)}
            className="cursor-pointer hover:bg-gray-300 active:bg-gray-200 p-2 rounded-full"
          >
            <Plus size={16} />
          </button>
        </div>
      )}
    </>
  );
}
