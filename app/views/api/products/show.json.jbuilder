

json.extract! @product, :id, :name, :price, :description, :size, :color, :category, :gender
# json.img_urls @product.photos.map {|photo| url_for(photo)}
# json.photoUrl url_for(@product.photos)