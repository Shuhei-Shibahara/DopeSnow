import { useDispatch, useSelector } from "react-redux";
import './Checkout.css'

function CheckOut() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  
  return (
    <>
      <div className="checkout_outer_container">
        <div className='signup_div'>
          <header className="title_container">
            <h3 className="title">{`Sick ${user.name}! Your order with Sick has been successfully processed.`}</h3>
          </header>
        </div>
        <img src='https://www.dopesnow.com/images/pkYlx1I19ge14oX4MQQWs/0ca26f7ce6a74203fa0508d5155dc450/teammates.jpg?w=584&dpr=2' />
      </div>
    </>
  );
}

export default CheckOut;