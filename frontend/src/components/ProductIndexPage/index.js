import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/products";


export default function ProductIndex(){
  const {gender, category} = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => Object.values(state.products))
  useEffect(() => {
    dispatch(fetchProducts(gender, category))
  },[dispatch])
  
  return(
    <>
      <h1>Product Index</h1>
      {products.map(product =>
        (<>
            <h2>{product.name}</h2>
            <ul>
              <li>{product.price}</li>
              <li>{product.description}</li>
            </ul>
        </>)
        )}
    </>
  )
}