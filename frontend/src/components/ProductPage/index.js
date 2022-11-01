import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/products";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(state => state.products[id])
  
  useEffect(()=>{
    dispatch(fetchProduct(id))
  },[dispatch, id])

  return(
    <>
      <h1>test</h1>
    </>
  )
}

export default ProductPage;