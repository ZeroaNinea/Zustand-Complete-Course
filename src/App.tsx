import { create } from 'zustand';

import './App.css';

const useStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

function App() {
  const store = useStore();

  return (
    <>
      <main>
        <div className="border border-gray-500 w-24 h-24 flex items-center justify-center rounded-2xl text-gray-500 text-3xl font-medium">
          {store.count}
        </div>
        <div>
          <button
            onClick={store.inc}
            className="rounded-md p-2 m-3 bg-blue-400 hover:bg-blue-500 text-white active:bg-blue-400 cursor-pointer"
          >
            Increment
          </button>
          <button
            onClick={store.dec}
            className="rounded-md p-2 m-3 bg-blue-400 hover:bg-blue-500 text-white active:bg-blue-400 cursor-pointer"
          >
            Decrement
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
