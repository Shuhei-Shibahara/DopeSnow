import { useSelector } from "react-redux";
import { getProducts } from "../../store/products";
import ProductIndex from "../ProductIndexPage";

const SearchIndex = () => {
  const products = useSelector(getProducts);

  let searchResults;
  if (products.length === 0) {
    searchResults = (
      <div className="search-error">Oh no, no matching products found...</div>
    )
  } else {
    searchResults = (
      <>
        <ul className="search-result-list">
          {products.map(product =>
            <li><ProductIndex key={product.id} product={product} /></li>
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