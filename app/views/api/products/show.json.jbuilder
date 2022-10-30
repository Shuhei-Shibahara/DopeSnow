
json.product do 
    json.set! @product.id do
      json.extract! product, :id, :name, :price, :description, :size, :color, :category
    end
end 