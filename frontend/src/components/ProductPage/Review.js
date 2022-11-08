import './Review.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, getReviews } from '../../store/reviews';


const Review = ({productId}) => {
  const dispatch = useDispatch();
  const reviews = useSelector(getReviews)
  
  useEffect(()=>{
    dispatch(fetchReviews(productId))
  },[dispatch])

  // const createRating = () => {
  //   const ratingStars = []
  //   for (let i=0; i < productId.rating; i++){
  //     ratingStars.push(<img src={star} className="review_star_image" />)
  //   }

  //   <div className={`${value}-stars`}></div>
    
  // }

  return(
   <div className="review_whole_container">
    <div className="what_people_text">What people are saying</div>
    <h2 className='rating_review_text'>Ratings & Reviews</h2>
    <div>
      <div className='main_rating_visual_container'>
        <div className='main_rating_star_inside_container'>
          <span className='main_rating_star'><svg viewBox="0 0 13 13" width="13" height="13"><clipPath id="x1"><path fill="#73848c" d="M6.5 9.933l4.017 2.423-1.063-4.571L13 4.711 8.326 4.31 6.5 0 4.674 4.31 0 4.71l3.546 3.074-1.063 4.571z"></path></clipPath><path fill="#d9dfe6" fill-opacity="1" d="M6.5 9.933l4.017 2.423-1.063-4.571L13 4.711 8.326 4.31 6.5 0 4.674 4.31 0 4.71l3.546 3.074-1.063 4.571z" data-percentage="100"></path><rect fill="white" height="100%" width="100%" clip-path="url(#x1)"></rect></svg></span>
        </div>
          <span className='rating_number'>4.8</span>
      </div>
    </div>
    <div className='main_review_text_container'>
      <div className='all_users_review_text_container'>
        <div className='all_users_review_text_inside_container'>
          <div className='all_users_review_title'>Reviews</div>

          {reviews.map(review =>
            <section className='individual_review_main_container'>
              <header className='container_for_stars'>
                <div className='stars_position_container'>
                  <div>
                    <div className='star_box_container'>
                      {/* <img className={`stars_${review.rating}`} /> */}
                      <img className={`stars_5`} />
                    </div>
                  </div>
                </div>
              </header>
              <div className='review_body_container'>
                <div className='review_main_text'>{review.body}</div>
              </div>
              <div className='review_author_container'>
                <div className='review_author_text'>- author 1</div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
   </div>
  )
}

export default Review;