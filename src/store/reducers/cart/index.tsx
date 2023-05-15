import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    id: 0,
    cart: [],
  },
  reducers: {
    setCart(state, action: PayloadAction<any>) {
      state.id = Date.now();
      // @ts-ignore
      state.cart = action.payload;
    },
    addToCart(state, action: PayloadAction<any>) {
      console.log(action.payload);
      // @ts-ignore
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
