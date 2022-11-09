import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import  Sideinfo from "./Sideinfo.js"
import Review from "./Review.js";
import './ProductPage.css'
import Description from "../Description";
import Tech from "../Tech"

const ProductPage = ({showModal, setShowModal}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(state => state.products[id])
  
  useEffect(()=>{
    dispatch(fetchProduct(id))
  },[dispatch, id])

  if (product === undefined){
    return null
  }

  return(
    <>
      <div>
        <div className='product_show_outside_container'>
          <div className='product_show_main_container'>
            <div className='product_show_main'>
              <div className="btAX" id="topnav">
                <Link className="product_redirect" exact to={`/products/${product.gender}/${product.category}`}>{product.category}</Link>
                &nbsp;<span>&gt;</span>&nbsp;
                <h1 className="product_page_name">{product.name}</h1>
              </div>
              <div className="product_info_positioning">
                <section className="product_info_container">
                  <div className="product_image_outer_container">
                    <div className="inner_container">
                      <div className="change_image_div">
                        <div className="image_container">
                          {/* {product.imgUrls.map(imgurl =>
                            <img src={imgurl} className="main_image" />

                            )} */}
                          <img src={product.imgUrls[0]} className="main_image" />



                        </div>
                        
                      </div>

                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Sideinfo product={product} showModal={showModal} setShowModal={setShowModal} />
      </div>
      <Description product={product}/>
      <Tech />
      <Review productId={product.id} />  
    </>
  )
}

export default ProductPage;