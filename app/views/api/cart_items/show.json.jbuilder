
# json.cartItem do 
json.extract! @cart_item, :id, :quantity, :name, :price, :gender, :color, :size, :product_id
 if @cart_item.product.photos.attached?
      json.imgUrls @cart_item.product.photos.map {|photo| photo.url}
  end

# end