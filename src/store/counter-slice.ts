import { type StateCreator } from 'zustand';
import type { Store } from '@/types/store';

type CounterState = {
  count: number;
};

type CounterActions = {
  inc: () => void;
  dec: () => void;
};

export type CounterSlice = CounterState & CounterActions;

export const createCounterSlice: StateCreator<
  Store,
  [['zustand/immer', never]],
  [],
  CounterSlice
> = (set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
});

// const useCounterStore = create<{
//   count: number;
//   inc: () => void;
//   dec: () => void;
// }>((set) => ({
//   count: 0,
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   dec: () => set((state) => ({ count: state.count - 1 })),
// }));
