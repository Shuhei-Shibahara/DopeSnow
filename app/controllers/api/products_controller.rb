class Api::ProductsController < ApplicationController

  def index
    case 
    when params[:gender] == "undefined" && params[:category] == "undefined"
      @products = Product.all
      render :index

    else 
      case params[:gender] 
      when 'M'
        case params[:category]
        when "Mens-Snowboard-Jackets"
          @products ||= Product.where("gender = ?", 'M').where("category = ?", "Mens-Snowboard-Jackets")
        when "Mens-Snowboard-Pants"
          @products ||= Product.where("gender = ?", 'M').where("category = ?", "Mens-Snowboard-Pants")
        when "Mens-T-shirts"
          @products ||= Product.where("gender = ?", 'M').where("category = ?", "Mens-T-shirts")
        when "Mens-Hoddies"
          @products ||= Product.where("gender = ?", 'M').where("category = ?", "Mens-Hoddies")
        else
          @products ||= Product.where("gender = ?", 'M')
        end
    
      when 'W'
        case params[:category] 
        when "Womens-Snowboard-Jackets"
          @products ||= Product.where("gender = ?", 'W').where("category = ?", "Womens-Snowboard-Jackets")
        when "Womens-Snowboard-Pants"
          @products ||= Product.where("gender = ?", 'W').where("category = ?", "Womens-Snowboard-Pants")
        when "Womens-T-shirts"
          @products ||= Product.where("gender = ?", 'W').where("category = ?", "Womens-T-shirts")
        when "Womens-Hoddies"
          @products ||= Product.where("gender = ?", 'W').where("category = ?", "Womens-Hoddies")
        else
          @products ||= Product.where("gender = ?", 'W')
        end

      end
      
    end
    
  end 

  def show
    @product = Product.find_by_id(params[:id])
    # debugger
    render :show
  end 

end
