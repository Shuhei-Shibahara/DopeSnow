import csrfFetch from "./csrf"

const SET_PRODUCTS = 'products/SET_PRODUCTS';
const SET_PRODUCT = 'products/SET_PRODUCT'

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

export const setProduct = product => ({
  type: SET_PRODUCT,
  product
})

export const fetchProducts = () => async dispatch => {
  const res = await csrfFetch(`api/products`)
  const products = await res.json();
  dispatch(setProducts(products))
}
