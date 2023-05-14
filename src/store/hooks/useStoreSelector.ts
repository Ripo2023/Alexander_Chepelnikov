import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootReducerType } from '../index';

const useStoreSelector: TypedUseSelectorHook<RootReducerType> = useSelector;

export default useStoreSelector;
