import { useEffect } from "react";
import backgroundVideo from '../../video/main_snowboard.mp4'

export default function Home(){
  
  return (
    <>
    <h1>Home Page</h1>
      <div className="main_div">
        <div className="main_container">
          <div className="video_container">
            <video autoPlay loop muted id='video' src={backgroundVideo} />
          </div>
        </div>
      </div>
    </>
  )
}