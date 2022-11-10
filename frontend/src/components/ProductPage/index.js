import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import  Sideinfo from "./Sideinfo.js"
import Review from "./Review.js";
import './ProductPage.css'
import Description from "../Description";
import Tech from "../Tech"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";


const ProductPage = ({showModal, setShowModal}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(state => state.products[id])
  const [imageShown, setImageShown] = useState(0)
  const reviewsRef = useRef(null)
  
  useEffect(()=>{
    dispatch(fetchProduct(id))
  },[dispatch, id])
  
  if (product === undefined){
    return null
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  
  const category = product.category.split('-').join(' ')
  return(
    <>
      <div>
        <div className='product_show_outside_container'>
          <div className='product_show_main_container'>
            <div className='product_show_main'>
              <div className="btAX" id="topnav">
                <Link className="product_redirect" exact to={`/products/${product.gender}/${product.category}`}>{category}</Link>
                &nbsp;<span>&gt;</span>&nbsp;
                <h1 className="product_page_name">{product.name}</h1>
              </div>
              <div className="product_info_positioning">
                <section className="product_info_container">
                  <div className="product_image_outer_container">
                    <div className="inner_container">
                      <div className="change_image_div">
                        <div className="image_container">
                       
                          <img src={product.imgUrls[imageShown]} className="main_image" />
                          {/* <img src='https://www.dopesnow.com/images/H1274_01_PwpQrhH.jpg?w=368&dpr=2' className="main_image" /> */}
          
                          {/* <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper"> */}
                          {/* <Swiper navigation={true} pagination={pagination} modules={[Navigation, Pagination]} className="mySwiper">

                            <SwiperSlide><img src='https://www.dopesnow.com/images/H1299_01_l01JcrX.jpg?w=694&dpr=2' className="main_image" /></SwiperSlide>
                            <SwiperSlide><img src='https://www.dopesnow.com/images/H1274_01_PwpQrhH.jpg?w=368&dpr=2' className="main_image" /></SwiperSlide>

                          </Swiper> */}

                        </div>
                        
                      </div>

                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Sideinfo reviewsRef={reviewsRef} product={product} showModal={showModal} setShowModal={setShowModal} setImageShown={setImageShown} />
      </div>
      <Description product={product}/>
      <Tech />
      <div ref={reviewsRef}>
        <Review productId={product.id} />  
      </div>
    </>
  )
}

export default ProductPage;