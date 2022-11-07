# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  price      :string           not null
#  size       :string           not null
#  gender     :string           not null
#  color      :string           not null
#  name       :string           not null
#
class CartItem < ApplicationRecord

  validates :product_id, :user_id, :name, :quantity, :size, :gender, :color, :price, presence: true
  validates :product_id, uniqueness: {scope: :user_id}
  
  belongs_to :user
  belongs_to :product
end
 
