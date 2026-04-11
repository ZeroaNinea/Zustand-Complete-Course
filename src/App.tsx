import { useShallow } from 'zustand/react/shallow';

import { useStore } from '@/store/store';
import { PRODUCTS_DATA } from '@/lib/mockData';

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
      <section className="flex flex-col items-center mt-5 gap-2">
        <h1 className="text-3xl font-bold text-cyan-950">Products</h1>
        <div className="space-y-2 w-100">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="border border-gray-500 p-3 rounded-sm"
            >
              <h4 className="font-semibold">{product.title}</h4>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center mt-5 gap-3">
        <h1 className="text-3xl font-bold text-cyan-950">Counter</h1>
        <div className="border border-gray-500 w-24 h-24 flex items-center justify-center rounded-2xl text-gray-500 text-3xl font-medium">
          {count}
        </div>
        <div className="flex gap-3 mb-5">
          <button
            onClick={inc}
            className="rounded-md p-2 bg-blue-400 hover:bg-blue-500 text-white active:bg-blue-400 cursor-pointer"
          >
            Increment
          </button>
          <button
            onClick={dec}
            className="rounded-md p-2 bg-blue-400 hover:bg-blue-500 text-white active:bg-blue-400 cursor-pointer"
          >
            Decrement
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
