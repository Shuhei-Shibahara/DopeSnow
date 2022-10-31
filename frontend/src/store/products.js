import csrfFetch from "./csrf"

const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';
const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

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

export const fetchProduct = (productId) => async dispatch => {
  const res = await csrfFetch(`/api/products/${productId}`)
  if (res.ok){
    const product = await res.json();
    dispatch(receiveProduct(product))
  }
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


    