
@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :description, :size, :color, :category, :gender
    if product.photos.attached?
      json.imgUrls product.photos.map {|photo| photo.url}
    else
      json.imgUrls ""
    end
  end
end 