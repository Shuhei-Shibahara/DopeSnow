import { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import edit from '../../images/edit.png'
import trash from '../../images/trash.png'
import { deleteReview, fetchReviews, updateReview } from '../../store/reviews';



const ReviewDisplay = ({review, productId}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(review.title)
  const [body, setBody] = useState(review.body)
  const [rating, setRating] = useState(review.rating)
  const [showUpdate, setShowUpdate] = useState(false)
  const user = useSelector(state => state.session.user)


  const handleDeleteReview = (review) => {
    if (user.id === review.userId) {
      dispatch(deleteReview(review.id))
    }
  }

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
  const handleBodyChange = (e) => setBody(e.currentTarget.value);

  const handleUpdateReview = (e) => {
    e.preventDefault()
    const updatedReview = {
      id: review.id,
      body: body,
      title: title,
      rating: rating,
      user_id: user.id,
      product_id: productId
    }
    dispatch(updateReview(updatedReview))
    // dispatch(fetchReviews(productId))
    setShowUpdate(false)
  }



  return showUpdate ? (
    <>
      <section className='individual_review_main_container'>
        <div className='stars_position_container'>
          <div>
            <div className='star_box_container'>
              <ReactStars {...starRating} />
            </div>
          </div>
        </div>
        <form onSubmit={handleUpdateReview}>
          <div className='review_author_container'>
            <input className='review_author_text' type="text" onChange={(e) => setTitle(e.target.value)} value={review.title}/>
          </div>
          <div className='review_body_container'>
          <input className="review_main_text" type='text' onChange={handleBodyChange} value={body}/>
          </div>
          <button class="side_bar_shopping_cart_button">Submit</button>
        </form>
      </section>  
    </>
  ) : (
      <section className='individual_review_main_container'>
        <header className='container_for_stars'>
          <div className='star_box_container'>
            <img className={`stars_${review.rating}`} />
            <div>
              <img src={edit} height="24px" width="24px" onClick={()=>setShowUpdate(true)} />
              <img src={trash} onClick={() => handleDeleteReview(review)} />
            </div>
          </div>
        </header>
        <div className='review_body_container'>
          <div className='review_main_text'>{review.body}</div>
        </div>
        <div className='review_author_container'>
          <div className='review_author_text'>- {review.name}</div>
        </div>
      </section>
  )


  // return (
  //   <>
  //     { !showUpdate &&
  //       <section className='individual_review_main_container'>
  //         <header className='container_for_stars'>
  //           <div className='star_box_container'>
  //             <img className={`stars_${review.rating}`} />
  //             <div>
  //               <img src={edit} height="24px" width="24px" onClick={() => handleUpdateReview(review)} />
  //               <img src={trash} onClick={() => handleDeleteReview(review)} />
  //             </div>
  //           </div>
  //         </header>
  //         <div className='review_body_container'>
  //           <div className='review_main_text'>{review.body}</div>
  //         </div>
  //         <div className='review_author_container'>
  //           <div className='review_author_text'>- {review.name}</div>
  //         </div>
  //       </section>
  //     }
  //     {/* {showUpdate &&
  //       <div className='stars_position_container'>
  //         <div>
  //           <div className='star_box_container'>
  //             <ReactStars {...starRating} />
  //           </div>
  //         </div>
  //       </div>
  //       <form onSubmit={handleNewReview()}>
  //         <div className='review_author_container'>
  //           <input className='review_author_text' type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
  //         </div>
  //         <div className='review_body_container'>
  //           <textarea className="review_main_text" placeholder="Write a review" rows="4" cols="50" onChange={(e) => setBody(e.target.value)} />
  //         </div>
  //         <button class="side_bar_shopping_cart_button">Submit</button>
  //       </form>
  //       <div/>
  //     } */}
  //   </>
  // )
}

export default ReviewDisplay;
