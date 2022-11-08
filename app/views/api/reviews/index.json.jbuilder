
@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :rating, :user_id, :product_id
    json.name review.user.name
  end
end 