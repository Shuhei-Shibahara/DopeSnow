import { useState } from "react";
import "./SearchBar.css";
import { searchProducts } from "../../store/products";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CiSearch } from 'react-icons/ci';


const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProducts(query));
    history.push("/search");
    setShowSearchBar(false);
    setQuery("");
  }

  const handleSearchBar = (e) => {
    if (showSearchBar) {
      setShowSearchBar(false)
    } else {
      setShowSearchBar(true)
    }
  }

  return (
    <>
      {showSearchBar ?
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            id="search-input"
            placeholder="Search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            />
        </form> : ""
      }

      <button type="submit" id="search-icon" onClick={handleSearchBar}><CiSearch size={25}/></button>
    </>
  )
}

export default SearchBar;