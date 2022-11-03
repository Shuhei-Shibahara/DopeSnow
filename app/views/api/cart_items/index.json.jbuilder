
@cart_items.each do |item|
  json.set! item.product_id do
    json.extract! item, :id, :product_id, :quantity, :gender, :color, :size, :price
  end
end