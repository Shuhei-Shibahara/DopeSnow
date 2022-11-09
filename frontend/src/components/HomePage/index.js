import { useEffect } from "react";
import backgroundVideo from '../../video/main_snowboard.mp4'
import "./HomePage.css"
import { Link } from "react-router-dom";
import MenJacket from "./MenJacket";
export default function Home(){
  

  return (
    <>
      <div className="main_div">
        <div className="main_container">
          <div className="video_container">
            <video autoPlay loop muted id='video' src={backgroundVideo} />
            <div className="video_text">
              <div className="main_video_text">Sick 2022</div>
              <Link exact to="/products">
              <button className="shop_now_button">Shop Now</button>
              </Link>
              <div className="bottom_text_video">
                <strong>Try at home before you decide. </strong>
                  Free shipping and free returns
              </div>
            </div>
          </div>
        </div>
        <div className="category_navigation_container">
          <Link exact to="/products/W">
            <img className="category_image_nav" src="https://www.dopesnow.com/images/4Q275QLvyNiYd0wVLaLL5W/8c82031ebfdd0d32349cec5a165e7cc2/JOH00279_2x.jpg?w=308&dpr=1" />
            <div className="title_product_nav">Women</div>
            <div className="category_product_nav">Snow</div>
          </Link>
          <Link exact to="/products/M">
            <img className="category_image_nav" src="https://www.dopesnow.com/images/3do5jgyv3YqM7cfD7GTAuM/43c616fd60b531154b1b16aa1a801aa2/JOH04867_2x.jpg?w=308&dpr=1" />
            <div className="title_product_nav">Men</div>
            <div className="category_product_nav">Snow</div>
          </Link>
          <Link exact to="/products/W">
            <img className="category_image_nav" src="https://www.dopesnow.com/images/1XvqBsbJTgOPgJPs6RUbEB/366e3b3c647605d7e82aae14779998b7/DOPE-category-800x979_0002_Women_Outdoor.jpg?w=308&dpr=1" />
            <div className="title_product_nav">Women</div>
            <div className="category_product_nav">Casual</div>
          </Link>
          <Link exact to="/products/M">
            <img className="category_image_nav" src="https://www.dopesnow.com/images/55qIM7VquW5kNWmBtlb77u/634067ac3cac8be5bdb0b80aea78aa62/DOPE-category-800x979_0001_Men_Outdoor.jpg?w=308&dpr=1" />
            <div className="title_product_nav">Men</div>
            <div className="category_product_nav">Casual</div>
          </Link>
        </div>
        <MenJacket />
      </div>
    </>
  )
}