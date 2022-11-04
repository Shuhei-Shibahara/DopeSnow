

json.extract! @product, :id, :name, :price, :description, :size, :color, :category, :gender
if @product.photos.attached?
  json.imgUrls @product.photos.map {|photo| photo.url}
else
  json.imgUrls ""
end

# json.photoUrl url_for(@product.photos)
