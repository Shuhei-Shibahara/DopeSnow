# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Product.destroy_all
  
  puts "Creating users..."
  puts "Creating products..."
 ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('products')


  Shuhei = User.create!(email: "wipeout@mail.com", name: "Shuhei", password: 'password')
  10.times do 
    User.create!({
      email: Faker::Internet.unique.email,
      name: Faker::Internet.unique.username(specifier: 3),
      password: 'password'
    }) 
  end

  #mens
  product1 = Product.create!({
    name: "Yeti Snowboard Jacket Men",
    price: 169.00 ,
    description: "The Yeti is a mythical, elusive, mysterious beast... but there is one thing we know about it — that it's the best dang riding hoodie in the mountains! If you're looking for a reliable, cosy, comfy, and gosh-darn steezy softshell to take from the park to the pow, then hunt yourself down one of these and embrace the monster within. With lots of slick touches to make your day at the resort legendary, the Yeti is the only choice for your next snowy adventure.",
    featured: true,
    size: "XS S M L XL XXL",
    color: "Pine-Metal-Blue 2X-Up-Black 2X-Up-Burgundy 2X-Up-Faded-Violet",
    category: "Mens-Snowboard-Jackets",
    gender: "M"
  })

  product2 = Product.create!({
    name: "Adept 2021 Snowboard Jacket Men",
    price: 199.00 ,
    description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the slopes. Highly waterproof, durable, and designed with the whole mountain in mind, the Adept is a staple in the Dope Snow lineup, and for good reason too. So say goodbye to swapping coats on the fly and choose the last one you'll ever want to own. When it comes to checking all the boxes, this is it. One jacket that really can do it all.",
    size: "XS S M L XL XXL",
    color: "Olive-Green",
    category: "Mens-Snowboard-Jackets",
    gender: "M"
  })

  product3 = Product.create!({
    name: "Akin Snowboard Jacket Men",
    price: 259.00 ,
    description: "The Akin is everything you ever wanted in a jacket, and a whole lot more. We took inspiration from old school utility jackets and decked this one out with seven outer pockets. Never worry again with this awesome design. Just zip up, load up, and head into the great unknown. Highly waterproof and insulated enough to tackle the harshest weather, the Akin is an easy park cruiser, and a big mountain bruiser. This is where we'd drop the mic, if we had one.",
    featured: true,
    size: "XS S M L XL XXL",
    color: "Olive-Green Black Burgundy Metal-Blue",
    category: "Mens-Snowboard-Jackets",
    gender: "M"
  })

  product4 = Product.create!({
    name: "Notorious B.I.B Snowboard Pants Men",
    price: 219.00 ,
    description: "Add a little notoriety to your riding with the Notorious bib. It's a head turner and a piste burner, equipped with the latest tech to keep you warm and comfortable all day long. With super slick slouchy style that oozes steeze, and waterproofing that'd put a walrus to shame, the Notorious bib is a ride-everything, all-mountain slayer. And with an insanely comfortable relaxed fit and dropped crotch, unbeatable durability, and lots of storage, we wouldn't blame you if you never took it off. We know we haven't!",
    featured: true,
    size: "XS S M L XL XXL",
    color: "Black Olive-Green Khaki Walnut",
    category: "Mens-Snowboard-Pants",
    gender: "M"
  })

  product5 = Product.create!({
    name: "Iconic Snowboard Pants Men",
    price: 169.00 ,
    description: "What is an Icon? Something that defines its sphere of influence. A true standout. A god among mortals. All of these things. More, even. And that's what we have created here. A defining pair of pants that rules the mountain with the kind of unattainable brilliance that all others aspire to. The Iconic are superbly waterproof, tailored to perfection with a relaxed and dropped-crotch fit, and so damn handsome that you can't quite look directly at them — kind of like the sun. And now, you too can share in their sheer, blinding magnificence, too, by owning your own pair.",
    featured: true,
    size: "XS S M L XL XXL",
    color: "Black-Out Black Olive-Green Metal-Blue",
    category: "Mens-Snowboard-Pants",
    gender: "M"
  })
  product6 = Product.create!({
    name: "Antek Snowboard Pants Men",
    price: 169.00 ,
    description: "The Antek are the perfect pants for the rider who likes to hit the park hard, and the après harder. They're lightweight, shaped to provide total freedom of movement, have oodles of waterproofing. Then we threw in some baggy, retro steez to top it off, along with some cargo style pockets, rounding the Anteks out as a true-blue pair of snow pants that are fit for all occasions, all conditions, and everything in between.",
    featured: true,
    size: "XS S M L XL XXL",
    color: "Grey-Camo Black Olive-Green Sand",
    category: "Mens-Snowboard-Pants",
    gender: "M"
  })

  product7 = Product.create!({
    name: "Daily Capital T-shirt Men",
    price: 29.00 ,
    description: "The Daily T-Shirt from Dope is a super comfortable top with a new and improved design and fit for the 2021 season. Constructed from 100% BCI cotton, it has a mercerised finish for a smoother handfeel and better long term wear. Made from a slightly heavier cotton jersey, the Daily t-shirt is a firm favourite among the Dope crew, and you'll only need to put it on to see why! Material: 100% BCI Cotton, Fabric Weight: 250gsm",
    size: "XS S M L XL XXL",
    color: "Black",
    category: "Mens-T-shirts",
    gender: "M"
  })


  product8 = Product.create!({
    name: "Daily Rose T-shirt Men",
    price: 29.00 ,
    description: "The Daily T-Shirt from Dope is a super comfortable top with a new and improved design and fit for the 2021 season. Constructed from 100% BCI cotton, it has a mercerised finish for a smoother handfeel and better long term wear. Made from a slightly heavier cotton jersey, the Daily t-shirt is a firm favourite among the Dope crew, and you'll only need to put it on to see why! Material: 100% BCI Cotton, Fabric Weight: 250gsm",
    size: "XS S M L XL XXL",
    color: "Black White",
    category: "Mens-T-shirts",
    gender: "M"
  })

  product9 = Product.create!({
    name: "Daily Rise T-shirt Men",
    price: 29.00 ,
    description: "The Daily T-Shirt from Dope is a super comfortable top with a new and improved design and fit for the 2021 season. Constructed from 100% BCI cotton, it has a mercerised finish for a smoother handfeel and better long term wear. Made from a slightly heavier cotton jersey, the Daily t-shirt is a firm favourite among the Dope crew, and you'll only need to put it on to see why! Material: 100% BCI Cotton, Fabric Weight: 250gsm",
    size: "XS S M L XL XXL",
    color: "Black White Burgundy",
    category: "Mens-T-shirts",
    gender: "M"
  })

  product10 = Product.create!({
    name: "Daily 2X-UP Hoodie Men",
    price: 65.00,
    description: "The Daily Hoodie from Dope is a slick and stylish new addition to the lineup, and blends Dope's signature oversized and baggy look with a modern fit and some cool new graphics. Made from a cosy 100% BCI cotton jersey with a brushed back terry inner for some fleecy goodness, it’s the ideal hoodie for kicking back or heading out. And with a mercerised outer for a smoother handfeel, this hoodie is as unique as it is stylish, and perfect for all occasions. Material: 100% BCI Cotton, Fabric Weight: 380gsm",
    featured: true,
    size: "XS S M L XL XXL",
    color: "Black Burgundy Faded-Grape Olive-Green",
    category: "Mens-Hoddies",
    gender: "M"
  })

  product11 = Product.create!({
    name: "Ozed Hoodie Men",
    price: 74.00,
    description: "The Ozed Hoodie from Dope is a comfy regular fitting hoodie with all the classic hoodie features you'd expect. We made the Ozed from a cosy 100% BCI cotton jersey with a unique mercerised outer to give it a smoother and softer handfeel, as well as better longevity. Inside, you get a brushed back terry fabric for that fleecy feel. So, if you’re looking to get a little Doper this summer, then look no further. Material: 100% BCI Cotton, Fabric Weight: 380gsm",
    featured: true,
    size: "XS S M L XL XXL",
    color: "Black",
    category: "Mens-Hoddies",
    gender: "M"
  })

  product12 = Product.create!({
    name: "Daily Range Hoodie Men",
    price: 65.00,
    description: "The Daily Hoodie from Dope is a slick and stylish new addition to the lineup, and blends Dope's signature oversized and baggy look with a modern fit and some cool new graphics. Made from a cosy 100% BCI cotton jersey with a brushed back terry inner for some fleecy goodness, it’s the ideal hoodie for kicking back or heading out. And with a mercerised outer for a smoother handfeel, this hoodie is as unique as it is stylish, and perfect for all occasions. Material: 100% BCI Cotton, Fabric Weight: 380gsm",
    size: "XS S M L XL XXL",
    color: "Black Faded-Grape",
    category: "Mens-Hoddies",
    gender: "M"
  })
  #Womens

    product13 = Product.create!({
    name: "Adept W Snowboard Jacket Women",
    price: 219.00 ,
    description: "Simplicity redefined. The Adept is a reliable zip-through jacket with all the features you need for a long day on the slopes. Highly waterproof, durable, and designed with the whole mountain in mind, the Adept is a staple in the Dope Snow lineup, and for good reason too. So say goodbye to swapping coats on the fly and choose the last one you'll ever want to own. When it comes to checking all the boxes, this is it. One jacket that really can do it all.",
    featured: true,
    size: "XXS XS S M L XL",
    color: "Pink Black Olive-Green Faded-Green",
    category: "Womens-Snowboard-Jackets",
    gender: "W"
  })

  product14 = Product.create!({
    name: "Yeti W Snowboard Jacket Women",
    price: 169.00 ,
    description: "The Yeti is a mythical, elusive, mysterious beast... but there is one thing we know about it — that it's the best dang riding hoodie in the mountains! If you're looking for a reliable, cosy, comfy, and gosh-darn steezy softshell to take from the park to the pow, then hunt yourself down one of these and embrace the monster within. With lots of slick touches to make your day at the resort legendary, the Yeti is the only choice for your next snowy adventure.",
    size: "XXS XS S M L XL",
    color: "Pine-Black 2X-Up-Black 2X-Up-Metal-Blue 2X-Up-Soft-Green",
    category: "Womens-Snowboard-Jackets",
    gender: "W"

  })

  product15 = Product.create!({
    name: "Annok W Snowboard Jacket Women",
    price: 219.00 ,
    description: "Dope's very own signature style, the Annok stays in the range to reign supreme over all other anoraks. We gave it waterproofing and breathability to tackle everything the mountain has on offer, and lots of slick little details like our contrast drawstrings and triple pocket system. Which makes the Annok one serious street-style inspired anorak that's ready to slash everything from the park to the pow, and look awesome doing it.",
    featured: true,
    size: "XXS XS S M L XL",
    color: "Cumulus Black Olive-Green",
    category: "Womens-Snowboard-Jackets",
    gender: "W"

  })

  product16 = Product.create!({
    name: "Con W 2021 Snowboard Pants Women",
    price: 219.00 ,
    description: "The Con pants perfectly blend form and function, and are a team and crowd favourite for good reason. These pants are special because they not only have that slimmer, thigh-hugging fit you've been craving, but are also super comfortable and provide total freedom of movement. So, you still get that skinny-profile, but with none of the restriction. And all that is because they're made with our special 4-way stretch material. Which makes the Con the ultimate pair of slim-fit riding pants perfect for the whole mountain. You're welcome.",
    featured: true,
    size: "XXS XS S M L XL",
    color: "Black",
    category: "Womens-Snowboard-Pants",
    gender: "W"
  })

  product17 = Product.create!({
    name: " Notorious B.I.B W Snowboard Pants Women",
    price: 219.00 ,
    description: "Add a little notoriety to your riding with the Notorious bib. It's a head turner and a piste burner, equipped with the latest tech to keep you warm and comfortable all day long. With super slick slouchy style that oozes steeze, and waterproofing that'd put a walrus to shame, the Notorious bib is a ride-everything, all-mountain slayer. And with an insanely comfortable relaxed fit and dropped crotch, unbeatable durability, and lots of storage, we wouldn't blame you if you never took it off. We know we haven't!",
    size: "XXS XS S M L XL",
    color: "Black Faded-Violet Soft-Green Pink",
    category: "Womens-Snowboard-Pants",
    gender: "W"
  })
  product18 = Product.create!({
    name: "Tigress W Snowboard Pants Women",
    price: 169.00,
    description: "Skinny, stretchy snow pants. You might be sold already, just from those four words. But if not, allow us to sweeten the deal. We threw in a little spandex to give these pants some elasticity, and then cranked things up with some awesome design touches. They've got waterproofing for days, a 2-way stretch, as well as a snug fit with a bootcut hem, you know, just for a splash of retro flair. There are few pairs of pants out there that look like this, and even fewer that can handle everything mother earth serves up. From the jungle to the slopes, the tiger is on the hunt!",
    featured: true,
    size: "XXS XS S M L XL",
    color: "Light-Grey Black Walnut",
    category: "Womens-Snowboard-Pants",
    gender: "W"
  })

  product19 = Product.create!({
    name: "Regular Range T-shirt Women",
    price: 29.00 ,
    description: "The Regular T-Shirt from Dope is a slick new addition to the 2021 lineup, and features an all new fit and fabric construction to go with its unmistakable style. Made from super soft 100% cotton with a mercerised outer for a softer, smoother handfeel and better wear versus traditional cotton, it's not only made to look good, but perform, too. And with the Better Cotton Initiative stamp of approval, you can feel great about wearing it, too. Material: 100% BCI Cotton, Fabric Weight: 170gsm",
    size: "XXS XS S M L XL",
    color: "Black White Faded-Grape",
    category: "Womens-T-shirts",
    gender: "W"
  })


  product20 = Product.create!({
    name: "Regular Rose T-shirt Women",
    price: 29.00 ,
    description: "The Regular T-Shirt from Dope is a slick new addition to the 2021 lineup, and features an all new fit and fabric construction to go with its unmistakable style. Made from super soft 100% cotton with a mercerised outer for a softer, smoother handfeel and better wear versus traditional cotton, it's not only made to look good, but perform, too. And with the Better Cotton Initiative stamp of approval, you can feel great about wearing it, too. Material: 100% BCI Cotton, Fabric Weight: 170gsm",
    size: "XXS XS S M L XL",
    color: "Black White",
    category: "Womens-T-shirts",
    gender: "W"
  })

  product21 = Product.create!({
    name: "Regular Beak T-shirt Women",
    price: 29.00 ,
    description: "The Regular T-Shirt from Dope is a slick new addition to the 2021 lineup, and features an all new fit and fabric construction to go with its unmistakable style. Made from super soft 100% cotton with a mercerised outer for a softer, smoother handfeel and better wear versus traditional cotton, it's not only made to look good, but perform, too. And with the Better Cotton Initiative stamp of approval, you can feel great about wearing it, too. Material: 100% BCI Cotton, Fabric Weight: 170gsm",
    size: "XXS XS S M L XL",
    color: "Faded-Green",
    category: "Womens-T-shirts",
    gender: "W"
  })

  product22 = Product.create!({
    name: "Ozed W Hoodie Women",
    price: 74.00,
    description: "The Ozed Hoodie from Dope is a comfy regular fitting hoodie with all the classic hoodie features you'd expect. We made the Ozed from a cosy 100% BCI cotton jersey with a unique mercerised outer to give it a smoother and softer handfeel, as well as better longevity. Inside, you get a brushed back terry fabric for that fleecy feel. So, if you're looking to get a little Doper this summer, then look no further. Material: 100% BCI Cotton, Fabric Weight: 380gsm",
    featured: true,
    size: "XXS XS S M L XL",
    color: "Black",
    category: "Womens-Hoddies",
    gender: "W"
  })

  product23 = Product.create!({
    name: "Regular Rose Hoodie Women",
    price: 65.00,
    description: "The Regular Hoodie from Dope is our brand new women-specific fit hoodie with the perfect amount of bagginess and a little extra drop to make it super comfy and cosy with our signature oversized feel. Made from a chunky 100% BCI cotton jersey with a mercerised outer to give it a super smooth and soft handfeel, and a comfy inner for that cosy snugness, the Regular hoodie is everything you ever wanted in a slouchy pullover, and so much more. Material: 100% BCI Cotton, Fabric Weight: 380gsm",
    featured: true,
    size: "XXS XS S M L XL",
    color: "Bleached-Black Black",
    category: "Womens-Hoddies",
    gender: "W"
  })

  product24 = Product.create!({
    name: "Regular Range Hoodie Women",
    price: 65.00,
    description: "The Regular Hoodie from Dope is our brand new women-specific fit hoodie with the perfect amount of bagginess and a little extra drop to make it super comfy and cosy with our signature oversized feel. Made from a chunky 100% BCI cotton jersey with a mercerised outer to give it a super smooth and soft handfeel, and a comfy inner for that cosy snugness, the Regular hoodie is everything you ever wanted in a slouchy pullover, and so much more. Material: 100% BCI Cotton, Fabric Weight: 380gsm",
    size: "XXS XS S M L XL",
    color: "Faded-Grape",
    category: "Womens-Hoddies",
    gender: "W"
  })

  puts 'done'
end