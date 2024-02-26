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
      const alreadyAddedItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (alreadyAddedItem) {
        alreadyAddedItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const alreadyAddedItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      alreadyAddedItem.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const alreadyAddedItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (alreadyAddedItem.quantity > 1) {
        alreadyAddedItem.quantity -= 1;
      }
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

export const { orderNow, addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
