
# json.cartItem do 
    json.set! @cart_item.product_id do
        json.extract! @cart_item, :id, :quantity, :price, :gender, :color, :size
    end
# end