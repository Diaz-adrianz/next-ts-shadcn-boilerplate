import type { Tstore, TstoreDispatch, TstoreState } from '@/config';
import { useDispatch, useSelector, useStore } from 'react-redux';

export const useAppStore = useStore.withTypes<Tstore>();
export const useAppSelector = useSelector.withTypes<TstoreState>();
export const useAppDispatch = useDispatch.withTypes<TstoreDispatch>();
