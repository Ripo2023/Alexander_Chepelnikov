import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
  },
  reducers: {
    addOrder(state, action: PayloadAction<any>) {
      // @ts-ignore
      state.orders.push(action.payload);
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
