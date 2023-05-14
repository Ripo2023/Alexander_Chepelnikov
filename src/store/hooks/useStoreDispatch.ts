import { useDispatch } from 'react-redux';
import { StoreDispatchType } from '../index';

const useStoreDispatch = () => useDispatch<StoreDispatchType>();

export default useStoreDispatch;
