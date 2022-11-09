
@cart_items.each do |item|
  json.set! item.id do
    json.extract! item, :id, :product_id, :quantity, :gender, :name, :color, :size, :price
    # if item.product.photos.attached?
    #   json.imgUrls item.product.photos.map {|photo| photo.url}
    # end
  end
end