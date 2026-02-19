import { VCard } from '@itaanng/any-component/components/VCard';

import './index.css';
import logo from './logo.svg';
import reactLogo from './react.svg';

export function App() {
  return (
    <VCard classNames={{ Root: 'max-w-xl' }}>
      <VCard.Slot name='Header.Badge'>
        <img alt='Bun Logo' className='h-24 p-4 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]' src={logo} />
      </VCard.Slot>
      <VCard.Slot name='Header.Action'>
        <img alt='React Logo' className='h-24 animate-[spin_20s_linear_infinite] p-5 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]' src={reactLogo} />
      </VCard.Slot>
      <VCard.Slot name='Header.Title'>
        <h1>Bun + React</h1>
      </VCard.Slot>
      <VCard.Slot name='Content.Avatar'>
        <img alt='Bun Logo' className='h-24' src={logo} />
      </VCard.Slot>
      <VCard.Slot name='Content.Description'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR, then save to test HMR, then save to test HMR
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </VCard.Slot>
      <VCard.Slot name='Content.Excerpt'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR, then save to test HMR, then save to test HMR, then save to test HMR, then save to test HMR
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR, then save to test HMR, then save to test HMR, then save to test HMR, then save to test HMR
        </p>
      </VCard.Slot>
    </VCard>
  );
}

export default App;
