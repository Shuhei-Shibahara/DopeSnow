class Api::CartItemsController < ApplicationController

  before_action :require_logged_in, only: [:create, :destroy]

  def create
    @cart_item = CartItem.new(cart_params)
    if @cart_item&.save
      render '/api/cart_items/show'
    else
      render json: {errors: ['Could not create cart']}, status: 422;
    end
  end

  def index
    # user_id = current_user[:id]
    user_id = current_user.id
    @cart_items = CartItem.where(user_id: user_id)
    render '/api/cart_items/index'
  end

  def update
    @cart_item = CartItem.find_by_id(params[:id])
    if @cart_item.update(cart_params)
        render 'api/cart_items/show'
    else 
        render json: {errors: ['Could not add to cart']}, status: 422;
    end
  end

  def destroy
    @cart_item = CartItem.find_by_id(params[:id])
    if @cart_item.destroy
      render json: {message: ['This item has been removed from cart']}
    end
  end

  private

  def cart_params
    params.require(:cart_item).permit(:id, :product_id, :user_id, :quantity, :name, :price, :gender, :color, :size)
  end
end
