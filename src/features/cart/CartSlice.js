import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  status: '',
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    orderNow: {
      prepare(name, status) {
        return {
          payload: {
            name,
            status,
          },
        };
      },
      reducer(state, action) {
        state.name = action.payload.name;
        state.status = action.payload.status;
      },
    },
  },
});

export const { orderNow, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
