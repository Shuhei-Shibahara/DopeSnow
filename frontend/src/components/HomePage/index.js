import { useEffect } from "react";
import backgroundVideo from '../../video/main_snowboard.mp4'
import "./HomePage.css"
import { Link } from "react-router-dom";
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
      </div>
    </>
  )
}