import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createUserSlice } from '@/store/user-slice';
import { createCartSlice } from '@/store/cart-slice';
import { type Store } from '@/types/store';

export const useStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createUserSlice(...a),
          ...createCartSlice(...a),
        })),
      ),
      {
        name: 'local-storage',
      },
    ),
  ),
);
