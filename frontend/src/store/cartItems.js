import csrfFetch from "./csrf";

const RECEIVE_ITEMS = 'cartItem/RECEIVE_ITEMS'
const RECEIVE_ITEM = 'cartItem/RECEIVE_ITEM';
const REMOVE_ITEM = 'cartItem/REMOVE_ITEM';

export const receiveItems = (items) => {
  return {
    type: RECEIVE_ITEMS,
    items
  }
}

export const receiveItem = (item) => {
  return {
    type: RECEIVE_ITEM,
    item
  };
};


export const removeItem = (cartItemId) => {
  return {
    type: REMOVE_ITEM,
    cartItemId
  };
};


export const fetchCartItems = () => async dispatch => {
  const res = await csrfFetch(`/api/cart_items`)
  if (res.ok){
    const cartItems = await res.json();
    dispatch(receiveItems(cartItems))
  }
}


export const createCartItem = (cartItem) => async dispatch => {
  const res = await csrfFetch(`/api/cart_items`, {
    method: 'POST',
    body: JSON.stringify(cartItem),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  if (res.ok){
    const cartItem = await res.json();
    dispatch(receiveItem(cartItem))
  }
}

export const updateCartItem = (cartItem) => async dispatch => {
  const res = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
    method: 'PATCH',
    body: JSON.stringify(cartItem),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  if (res.ok){
    const cartItem = await res.json();
    dispatch(receiveItem(cartItem))
  }
}

export const deleteCartItem = (cartItemId, productId) => async dispatch => {
  const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
    method: 'DELETE'
  })
  dispatch(removeItem(productId))
}

function cartReducer(state = {}, action) {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.user.cartItems;
    case RECEIVE_ITEM:
      return { ...nextState, ...action.user.cartItem }
    case REMOVE_ITEM:
      delete nextState[action.cartItemId];
      return nextState;
    default:
      return state;
  }
}

export default cartReducer;