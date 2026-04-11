import { useShallow } from 'zustand/react/shallow';

import { useStore } from '@/store/store';

// import { create } from 'zustand';

import './App.css';

// const store = create<{
//   count: number;
//   inc: () => void;
//   dec: () => void;
// }>((set) => ({
//   count: 0,
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   dec: () => set((state) => ({ count: state.count - 1 })),
// }));

function App() {
  const { address, count, inc, dec } = useStore(
    useShallow((state) => ({
      address: state.address,
      count: state.count,
      inc: state.inc,
      dec: state.dec,
    })),
  );

  // const store = useCounterStore();

  // const address = useStore((state) => state.address);

  console.log(address);

  return (
    <main className="flex flex-col items-center">
      <section className="mt-5">
        <h1 className="text-3xl font-bold text-cyan-950">Products</h1>
      </section>
      <section className="flex flex-col items-center mt-5">
        <h1 className="text-3xl font-bold text-cyan-950 mb-5">Counter</h1>
        <div className="border border-gray-500 w-24 h-24 flex items-center justify-center rounded-2xl text-gray-500 text-3xl font-medium">
          {count}
        </div>
        <div>
          <button
            onClick={inc}
            className="rounded-md p-2 m-3 bg-blue-400 hover:bg-blue-500 text-white active:bg-blue-400 cursor-pointer"
          >
            Increment
          </button>
          <button
            onClick={dec}
            className="rounded-md p-2 m-3 bg-blue-400 hover:bg-blue-500 text-white active:bg-blue-400 cursor-pointer"
          >
            Decrement
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
