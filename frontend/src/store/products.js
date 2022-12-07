import csrfFetch from "./csrf"

const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';
const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';
const SET_PRODUCTS = 'products/SET_PRODUCTS';

export const setProducts = payload => ({
  type: SET_PRODUCTS,
  payload
})

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
})

export const fetchProducts = (gender, category) => async dispatch => {
  const res = await csrfFetch(`/api/products?gender=${gender}&category=${category}`)
  if (res.ok){
    const products = await res.json();
    dispatch(receiveProducts(products))
  }
}

export const fetchProduct = (cartId,productId) => async dispatch => {
  const res = await csrfFetch(`/api/products/${cartId}`)
  if (res.ok){
    const product = await res.json();
  
    dispatch(receiveProduct(product))
  }
}

export const searchProducts = (query) => async dispatch => {
  const res = await csrfFetch(`/api/products/search/${query}`)
  if (res.status >= 400) throw res;

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveProducts(data));
  }
}

export const getProducts = (state) => {
  return state.products ? Object.values(state.products) : []
}

export default function productsReducer(state = {}, action){
  Object.freeze(state);
  const nextState = {...state};

  switch(action.type){
    case RECEIVE_PRODUCTS:
        return {...action.products}
    case RECEIVE_PRODUCT:
        return {...nextState, [action.product.id]: action.product}
    default:
      return state;
  }
}


    