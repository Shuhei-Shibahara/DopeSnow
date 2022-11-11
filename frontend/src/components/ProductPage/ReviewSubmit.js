import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { createReview, fetchReviews } from "../../store/reviews";
import './ReviewSubmit.css'

const ReviewSubmit = ({productId}) => {
  const [rating, setRating] = useState(5);
  const [body, setBody] = useState();
  const [title, setTitle] = useState('Title');
  const user = useSelector(state => state.session.user)
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
    
    const newReview = {
      body: body,
      title: title,
      rating: rating,
      user_id: user.id,
      product_id: productId
    }
    dispatch(createReview(newReview))
    e.target.reset();
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
              <form onSubmit={handleNewReview}>
                {/* <div className='review_author_container'>
                  <input className='review_title' type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                </div> */}
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