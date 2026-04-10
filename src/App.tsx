import { create } from 'zustand';

import './App.css';

import { Button } from './components/ui/button';

function App() {
  const useStore = create<{
    count: number;
    inc: () => void;
    dec: () => void;
  }>((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
  }));

  return (
    <>
      <Button onClick={useStore.getState().inc}>Button</Button>
    </>
  );
}

export default App;
