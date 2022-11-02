import './Sideinfo.css'
import star from "../../images/star.png"

const Sideinfo = ({product}) => {

  const colors = product.color.split(' ')
  const sizes = product.size.split(' ')

  return(
    <>
      <div className="main_side_container">
        <div className='side_bar_name_container'>
          <div className="side_bar_name">Yeti</div>
          <div className="side_bar_logo">Sick</div>
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
        <div className='side_bar_color_circle_main'>
          <div className='side_bar_color_container'>
            {colors.map(color =>
            (<>
              <div className='color_container'>
                <button className='future_onclick_for_color'>
                  <div className='color_image_styling'>
                    <img src="https://sick-snow.s3.us-west-2.amazonaws.com/m-yeti-main.png" className='color_image' title={color}/>
                  </div>
                </button>
                <div className='check_mark'></div>
              </div>
            </>)
            )}
          </div>
        </div>
        <div class="side_bar_line_container">
          <div class="line"></div>
        </div>
        <div className='side_bar_size_circle_main'>
          <div className='side_bar_size_circle_container'>
              <div>
                <nav className='size_button_nav'>
                  {sizes.map(size=>
                  (<>
                    <button className='size_button'>{size}</button>
                  </>) 
                  )}

                </nav>
              </div>
          </div>
        </div>
        <div className='side_bar_cart_favorite_main'>
          <button className='side_bar_shopping_cart_button'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="2" d="M3.5 0v13.65h10.182L17.5 4.095h-14"></path><ellipse fill="currentColor" fill-rule="nonzero" cx="4" cy="17.9" rx="1.5" ry="1.575"></ellipse><ellipse fill="currentColor" fill-rule="nonzero" cx="12" cy="17.9" rx="1.5" ry="1.575"></ellipse></g></svg>
            <span class="nvrF" data-e2e="CURP">$ {product.price} USD</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sideinfo;