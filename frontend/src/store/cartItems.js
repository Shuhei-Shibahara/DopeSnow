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


export const removeItem = (productId) => {
  return {
    type: REMOVE_ITEM,
    productId
  };
};

 export const getCartItems = state => {
    if (!state.cartItems) {
      return []
    } else {
      return Object.values(state.cartItems)
    }
  }

  export const getCartItem = (productId) => state => {
    if (!state.cartItems){
      return []
    } else {
      return state.cartItems[productId]
    }
  }

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
    debugger
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
    const updatedCartItem = await res.json();
    dispatch(receiveItem(updatedCartItem))
  }
}

export const deleteCartItem = (productId) => async dispatch => {
  const res = await csrfFetch(`/api/cart_items/${productId}`, {
    method: 'DELETE'
  })
  dispatch(removeItem(productId))
}

function cartReducer(state = {}, action) {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    case RECEIVE_ITEM:
      return { ...nextState, ...action.item }
      // return { ...nextState, [action.item]}
    case REMOVE_ITEM:
      delete nextState[action.prodcutId];
      return nextState;
    default:
      return state;
  }
}

export default cartReducer;