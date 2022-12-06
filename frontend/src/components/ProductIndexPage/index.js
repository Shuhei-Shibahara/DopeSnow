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

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  
  return(
    <>
      <section className="product_section">
        {products.map(product =>
          (<>
             <article className="indiviual_product_container">
              <div onClick={scrollToTop}>
                <Link to={`/product/${product.id}`} className="individual_product">
                  <div className="individual_product_image_container">
                    <div className="image_container_spacing"> 
                    <img src={product.imgUrls[0]} className="product_main_image" />
                    </div>
                  </div>
                <div className="product_text_whole_container">
                  <div className="product_price_name_container">
                    <div className="product_name_index">{product.name}</div>
                    <div className="product_price_index"><span>$ {product.price} USD&nbsp;</span></div>
                  </div>
                </div>
                </Link>

              </div>

             </article>
          </>)
          )}
      </section>
    </>
  )
}

