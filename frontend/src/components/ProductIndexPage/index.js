import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProducts } from "../../store/products";
import './ProductIndexPage.css'


export default function ProductIndex(){
  const {gender, category} = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => Object.values(state.products))
  
  useEffect(() => {
    dispatch(fetchProducts(gender, category))
  },[dispatch, gender, category])
  
  return(
    <>
      <section className="product_section">
        {products.map(product =>
          (<>
             <article className="indiviual_product_container">
              <Link to={`/product/${product.id}`} className="individual_product">
                <div className="individual_product_image_container">
                  <div className="image_container_spacing"> 
                  <img src="https://sick-snow.s3.us-west-2.amazonaws.com/Screen+Shot+2022-11-01+at+9.24.02+AM.png" className="product_main_image"/>
                  </div>
                </div>
              <div className="product_text_whole_container">
                <div className="product_price_name_container">
                  <div className="product_name_index">{product.name}</div>
                  <div className="prodcut_price_index"><span>$ {product.price} USD&nbsp;</span></div>
                </div>
              </div>
              </Link>

             </article>
          </>)
          )}
      </section>
    </>
  )
}

