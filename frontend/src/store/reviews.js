import csrfFetch from "./csrf";

const RECEIVE_REVIEWS = 'review/RECEIVE_REVIEWS'
const RECEIVE_REVIEW = 'review/RECEIVE_REVIEW';
const REMOVE_REVIEW = 'review/REMOVE_REVIEW';

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  }
}

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};


export const removeReview = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  };
};

export const getReviews = state => {
  if (!state.reviews) {
    return []
  } else {
    return Object.values(state.reviews)
  }
}

export const getReview = (reviewId) => state => {
  if (!state.reviews) {
    return []
  } else {
    return state.reviews[reviewId]
  } 
}

export const fetchReviews = (productId) => async dispatch => {
  const res = await csrfFetch(`/api/products/${productId}/reviews`)
  if (res.ok) {
    const reviews = await res.json();
    dispatch(receiveReviews(reviews))
  }
}


export const createReview = (review) => async dispatch => {
  const res = await csrfFetch(`/api/reviews`, {
    method: 'POST',
    body: JSON.stringify(review),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  if (res.ok) {
    const review = await res.json();
    dispatch(receiveReview(review))
  }
}

export const updateReview = (review) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: 'PATCH',
    body: JSON.stringify(review),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  if (res.ok) {
    const updatedReview = await res.json();
    dispatch(receiveReview(updatedReview))
  }
}

export const deleteReview = (reviewId) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE'
  })
  dispatch(removeReview(reviewId))
}

function reviewReducer(state = {}, action) {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return { ...nextState, [action.review.id]: action.review }
    case REMOVE_REVIEW:
      delete nextState[action.reviewId];
      return nextState;
    default:
      return state;
  }
}

export default reviewReducer;