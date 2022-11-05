
@cart_items.each do |item|
  json.set! item.id do
    json.extract! item, :id, :product_id, :quantity, :gender, :name, :color, :size, :price
  end
end