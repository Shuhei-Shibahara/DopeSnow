import './CategoryDropDown.css'
import { Link } from 'react-router-dom';
const CategoryDropDown= () => {


  return (
    <>
      <div className="drop-down-container">
        <div className='drop-down'>
          <ol>
            <li>
              <div className="div_individual_category">
                <Link to="/products/M/Mens-Snowboard-Jackets" className="category_link">
                  <div className="image_div">
                    <img 
                      className="category_image"
                      alt= "Jackets" 
                      src= "https://ridestore.imgix.net/catalog/product//E/8/E8412_100.JPG?fit=crop&amp;w=38&amp;q=60&amp;dpr=2&amp;usm=15&amp;fm=avif&amp;crop=entropy&amp;h=38" 
                      />
                  </div>
                  <span className="category_name">Jackets</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="div_individual_category">
                <Link to="/products/M/Mens-Snowboard-Pants" className="category_link">
                  <div className="image_div">
                    <img
                      className="category_image"
                      alt="Pants"
                      src="https://ridestore.imgix.net/catalog/product///2/0/2020-12-09-omfoto_dope_byxor-616.jpg?fit=crop&w=38&q=60&dpr=2&usm=15&fm=avif&crop=entropy&h=38"
                    />
                  </div>
                  <span className="category_name">Pants</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="div_individual_category">
                <Link to="/products/M/Mens-T-shirts" className="category_link">
                  <div className="image_div">
                    <img
                      className="category_image"
                      alt="Hoodie"
                      src="https://ridestore.imgix.net/catalog/product//E/9/E9899_1.jpg?fit=crop&w=38&q=60&dpr=2&usm=15&fm=avif&crop=entropy&h=38"
                    />
                  </div>
                  <span className="category_name">Hoodies</span>
                </Link>
              </div>
            </li>
            <li>
              <div className="div_individual_category">
                <Link to="/products/M/Mens-Hoddies" className="category_link">
                  <div className="image_div">
                    <img
                      className="category_image"
                      alt="Hoodie"
                      src="https://ridestore.imgix.net/catalog/product//E/9/E9909_1.jpg?fit=crop&w=38&q=60&dpr=2&usm=15&fm=avif&crop=entropy&h=38"
                    />
                  </div>
                  <span className="category_name">T-shirts</span>
                </Link>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default CategoryDropDown;

