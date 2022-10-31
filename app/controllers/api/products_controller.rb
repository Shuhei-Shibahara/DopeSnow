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
        when "Men's Snowboard Jackets"
          @products ||= Product.where("gender = ?", 'M').where("category = ?", "Men's Snowboard Jackets")
        when "Men's Snowboard Pants"
          @products ||= Product.where("gender = ?", 'M').where("category = ?", "Men's Snowboard Pants")
        when "Men's T-shirts"
          @products ||= Product.where("gender = ?", 'M').where("category = ?", "Men's T-shirts")
        when "Men's Hoddies"
          @products ||= Product.where("gender = ?", 'M').where("category = ?", "Men's Hoddies")
        else
          @products ||= Product.where("gender = ?", 'M')
        end
    
      when 'W'
        case params[:category] 
        when "Women's Snowboard Jackets"
          @products ||= Product.where("gender = ?", 'W').where("category = ?", "Women's Snowboard Jackets")
        when "Women's Snowboard Pants"
          @products ||= Product.where("gender = ?", 'W').where("category = ?", "Women's Snowboard Pants")
        when "Women's T-shirts"
          @products ||= Product.where("gender = ?", 'W').where("category = ?", "Women's T-shirts")
        when "Women's Hoddies"
          @products ||= Product.where("gender = ?", 'W').where("category = ?", "Women's Hoddies")
        else
          @products ||= Product.where("gender = ?", 'W')
        end

      end
      
    end
    
  end 

  def show
    @product = Product.find_by_id(params[:id])
    render :show
  end 

end
