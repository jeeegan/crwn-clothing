import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cart => cart.reduce((acc, val) => acc + val.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cart => cart.reduce((acc, val) => acc + val.quantity * val.price, 0)
)