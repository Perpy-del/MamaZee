import { useContext } from 'react';
import { MamazeeContext } from '../context/MamaZeeContext';

export function useMamazeeHook() {
  const context = useContext(MamazeeContext);
  return context;
}
