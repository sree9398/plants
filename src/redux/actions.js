export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';

export const addToCart = (plant) => ({
  type: ADD_TO_CART,
  payload: plant,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const incrementItem = (id) => ({
  type: INCREMENT_ITEM,
  payload: id,
});

export const decrementItem = (id) => ({
  type: DECREMENT_ITEM,
  payload: id,
});
