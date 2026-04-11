import { type CartSlice } from '@/store/cart-slice';
import { type UserSlice } from '@/store/user-slice';
import { type CounterSlice } from '@/store/counter-slice';

export type Store = UserSlice & CartSlice & CounterSlice;
