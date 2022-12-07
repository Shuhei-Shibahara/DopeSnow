import { CiSearch } from 'react-icons/ci';
import './SearchBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <section className='search-section'>
        {/* <h2>Search Results</h2> */}
        <div className='search-bar'>
          <input type='text' placeholder='Search Terms' value={query} onChange={e => setQuery(e.target.value)} />
          <Link to={{ pathname: '/search-results', state: { query, fromApp: true } }}><CiSearch /></Link>
        </div>
      </section>
      
    </>
  )
}

export default SearchBar;