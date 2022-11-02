import './Sideinfo.css'
import star from "../../images/star.png"

const Sideinfo = ({product}) => {

  return(
    <>
      <div className="main_side_container">
        <div className='side_bar_name_container'>
          <div className="side_bar_name">Yeti</div>
          <div className="side_bar_logo">Dope</div>
          <div className="side_bar_review_main_container">
            <div className='side_bar_review_styling'>
              <img src={star} className="review_star_image" />
              <img src={star} className="review_star_image" />
              <img src={star} className="review_star_image" />
              <img src={star} className="review_star_image" />
              <img src={star} className="review_star_image" />
            </div>
          </div>
        </div>
        <div className='side_bar_color_title'>Color</div>
        <div className='side_bar_clicked_color'>{product.color}</div>
      </div>
    </>
  )
}

export default Sideinfo;