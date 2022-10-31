# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :decimal(, )      not null
#  description :text             not null
#  featured    :boolean
#  color       :string           not null, is an Array
#  size        :string           not null, is an Array
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category    :string           not null
#
class Product < ApplicationRecord
  validates :name, :description, :color, :size, :category, :gender, presence: true
  validates :name, uniqueness: true


end
