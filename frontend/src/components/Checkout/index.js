import { useDispatch, useSelector } from "react-redux";
import './Checkout.css'

function CheckOut() {
  const user = useSelector(state => state.session.user)
  
  return (
    <>
      <div className="checkout_outer_container">
        <div className='checkout_title_div'>
          <header className="checkout_title_container">
            <p className="checkout_text">{`SICK! ${user.name} your order has been successfully processed.`}</p>
          </header>
        </div>
        <img className="checkout_image" src='https://www.dopesnow.com/images/pkYlx1I19ge14oX4MQQWs/0ca26f7ce6a74203fa0508d5155dc450/teammates.jpg?w=584&dpr=2' />
        <p className="checkout_text bottom_text">THANK YOU</p>
      </div>
    </>
  );
}

export default CheckOut;