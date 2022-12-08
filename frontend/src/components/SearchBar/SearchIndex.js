import { useSelector } from "react-redux";
import { getProducts } from "../../store/products";
import { Link } from "react-router-dom";


const SearchIndex = () => {
  const products = useSelector(getProducts);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  let searchResults;
  if (products.length === 0) {
    searchResults = (
      <div className="search-error">Oops... There was no match found</div>
    )
  } else {
    searchResults = (
      <>
        <ul className="search-result-list">
          {products.map(product =>
            <article className="indiviual_product_container">
              <div onClick={scrollToTop}>
                <Link to={`/product/${product.id}`} className="individual_product">
                  <div className="individual_product_image_container">
                    <div className="image_container_spacing">
                      <img src={product.imgUrls[0]} className="product_main_image" />
                    </div>
                  </div>
                  <div className="product_text_whole_container">
                    <div className="product_price_name_container">
                      <div className="product_name_index">{product.name}</div>
                      <div className="product_price_index"><span>$ {product.price} USD&nbsp;</span></div>
                    </div>
                  </div>
                </Link>

              </div>

            </article>
          )}
        </ul>
      </>
    )
  }

  return (
    <>  <h1 id="search-header">Matching Results</h1>
      {searchResults}
    </>
  )
}

export default SearchIndex;