class Api::CartItemsController < ApplicationController

  before_action :require_logged_in

  def create
    @cart = CartItem.new(cart_params)
    if @cart&.save
      render '/api/cart_item/show'
    else
      render json: {errors: ['Could not create cart']}, status: 422;
    end
  end

  def index
    user_id = current_user.id
    @cart = CartItem.find_by(user_id: user_id)
    render '/api/cart_item/index'
  end

  private

  def cart_params
    params.require(:cart_item).require(:id, :product_id, :user_id,:quantity)
  end
end
