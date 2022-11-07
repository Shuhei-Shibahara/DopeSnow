class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy, :update]

  def create
    @review = Review.new(review_params)
    if @review&.save
      render '/api/reviews/show'
    else
      render json: {errors: ['Could not create a review']}, status: 422;
    end
  end

  def destroy
    @review = Review.find_by_id(params[:id])
      if @review.user_id == current_user.id
          @review.destroy
          render json: {message: ['This review has been destroyed']}
      else
        render json: {errors: ['Cannot delete other peoples reviews']}
      end
  end

  def index
    @reviews = Review.where(product_id: params[:product_id])
    render 'api/reviews/index'
  end

  def update
    @review = Review.find_by_id(params[:id])
      if @review.user_id == current_user.id
        if @review&.update(review_params)
          render 'api/reviews/show'
        else
          render json: {errors: ['Could not update review']}, status: 422;
        end
      else
        render json: {errors: ['Cannot update someone elses review']}, status: 422;
      end
    end
  end

  private

  def review_params
    Params.require(:reviews).premit(:id, :product_id, :user_id, :body, :title, :rating)
  end
end
