import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { createReview, fetchReviews } from "../../store/reviews";
import { useHistory } from 'react-router-dom';
import './ReviewSubmit.css'

const ReviewSubmit = ({productId}) => {
  const [rating, setRating] = useState(5);
  const [body, setBody] = useState();
  const [title, setTitle] = useState('Title');
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user)
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchReviews(productId))
  },[dispatch])

  const starRating = {
    size: 35,
    count: 5,
    isHalf: false,
    value: rating,
    color: "grey",
    activeColor: "gold",
    onChange: newValue => {
      setRating(newValue);
    }
  };

  const handleNewReview = (e) => {
    e.preventDefault();
    
    if (user){
      const newReview = {
        body: body,
        title: title,
        rating: rating,
        user_id: user.id,
        product_id: productId
      }
      
      e.target.reset();
      setBody('');
      setRating(5);
      setTitle('Title')
      setErrors([]);
      return dispatch(createReview(newReview))
        .catch(async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twiceL
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if, e.g., server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
  
        });
    } else {
      history.push('/login')
    }
    
    
  }

  return(
    <div className='main_review_text_container'>
      <div className='all_users_review_text_container'>
        <div className='all_users_review_text_inside_container'>
          <div className='all_users_review_title'>Leave a review</div>
            <section className='individual_review_main_container'>
              <header className='container_for_stars'>
                <div className='stars_position_container'>
                  <div>
                    <div className='star_box_container'>
                    <ReactStars {...starRating} />
                    </div>
                  </div>
                </div>
              <ul className="error_message">
                {errors.map(error => <li key={error}>{error}</li>)}
              </ul>
              <form onSubmit={handleNewReview}>
                <div className="review_submit_body_container">
                  <div className='review_body_container'>
                    <textarea className="review_main_text" placeholder="Write a review" rows="4" cols="50" onChange={(e) => setBody(e.target.value)} />
                  </div>
                  <button class="review_button">Submit</button>
                </div>
              </form>
              </header>
            </section>
        </div>
      </div>
    </div>
  )
}

export default ReviewSubmit