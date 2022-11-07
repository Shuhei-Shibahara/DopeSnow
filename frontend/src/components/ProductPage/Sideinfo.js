import './Sideinfo.css'
import star from "../../images/star.png"
import favorite from '../../images/favorite_icon.png'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCartItem, createCartItem } from '../../store/cartItems'

const Sideinfo = ({product, setShowModal}) => {
  const dispatch = useDispatch();
  const colors = product.color.split(' ') 
  const sizes = product.size.split(' ')
  const user = useSelector(state => state.session.user)
  const cartItem = useSelector(getCartItem(product.id))

  const [pickedColor, setPickedColor] = useState(colors[0])
  const [selectedColor, setSelectedColor] = useState(0)
  const [pickedSize, setPickedSize] = useState(sizes[2]) 
  const [selectedSize, setSelectedSize] = useState(2)

console.log(product)
  const handleAddCart = (e) => {
    e.preventDefault();

    if(!user) return null;

    const userId = user.id

    const newItem = {
      cartItem: {
        productId: product.id,
        userId: user.id,
        quantity: 1,
        name: product.name,
        price: product.price,
        gender: product.gender,
        color: pickedColor,
        size: pickedSize
      }
    }
    setShowModal(true)
   return dispatch(createCartItem(newItem))
  }
  

  const handleColorChange = (color, i) => (e) => {
    e.preventDefault();
    setSelectedColor(i);
    setPickedColor(color);
  }

  const handleSizeChange = (size, j) => (e) => {
    e.preventDefault();
    setSelectedSize(() => j);
    setPickedSize(size);
  }
  


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
        <div className='side_bar_clicked_color'>{pickedColor}</div>
        <div className='side_bar_color_circle_main'>
          <div className='side_bar_color_container'>
            {colors.map((color, i) =>
            (<>
              <div className='color_container'>
                <button onClick={handleColorChange(color, i)} className='future_onclick_for_color'>

                  <div className={`color_image_styling ${parseInt(i) === selectedColor ? 'selected_color' : ''}`} id={`color-${i}`} key={i}>
                    <img src={product.imgUrls[i]} className='color_image' title={color} />
                  </div>
                </button>
                <div className='check_mark'></div>
              </div>
            </>)
            )}
          </div>
        </div>
        <div className="side_bar_line_container">
          <div className="line"></div>
        </div>
        <div className='side_bar_size_circle_main'>
          <div className='side_bar_size_circle_container'>
              <div>
                <nav className='size_button_nav'>
                  {sizes.map((size, j)=>
                  (<>
                    <button onClick={handleSizeChange(size, j)} className={`size_button ${parseInt(j) === selectedSize ? 'selected_size' : ''}`} key={j}>{size}</button>
                  </>) 
                  )}

                </nav>
              </div>
          </div>
        </div>
        <div className='side_bar_cart_favorite_main'>
          <button className='side_bar_shopping_cart_button' onClick={handleAddCart}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><g fill="none" fillRule="evenodd"><path stroke="currentColor" strokeWidth="2" d="M3.5 0v13.65h10.182L17.5 4.095h-14"></path><ellipse fill="currentColor" fillRule="nonzero" cx="4" cy="17.9" rx="1.5" ry="1.575"></ellipse><ellipse fill="currentColor" fillRule="nonzero" cx="12" cy="17.9" rx="1.5" ry="1.575"></ellipse></g></svg>
            <span className="cart_price_text" data-e2e="CURP">$ {product.price} USD</span>
          </button>
          <button className='side_bar_favorite_button'>
            <img src={favorite} className='favorite_icon' />
          </button>
        </div>
        <ul className="side_bar_list_amenities">
          <li>
            <span className="list_check_mark"></span>
            <span>Free shipping and free returns</span>
          </li>
          <li>
            <span className="list_check_mark"></span>
            <span>30 day right of return</span>
          </li>
          <li>
            <span className="list_check_mark"></span>
            <span>Delivery time 2-6 business days</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sideinfo;