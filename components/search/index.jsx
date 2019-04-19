import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import './styles.scss';

const defaultResponse = {
  data: [],
  status: 'default'
}

const Search = (props) => {
  const [beerList, setBeerList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [allowRequest, setAllowRequest] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { searchUrl } = props;

  const search = async (url) => {
    setIsLoading(true);
    const res = await fetch(url);
    if (res.status === 200) {
      const response = await res.json();
      setIsLoading(false);

      console.log('\n\n\n response is: ', response);
      if (response.status === 'success' && response.data) {
        setBeerList(response.data);
      } else {
        // Error from api
        setBeerList([]);
      }
    } else {
      // Error from server
      setBeerList([]);
    }
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value && value.length >= 3 && allowRequest) {
      setAllowRequest(false);
      search(`/search/?q=${value}`);
      setTimeout(() => setAllowRequest(true), 1000);
    }
  };

  useEffect(() => {
    if (searchUrl) search(searchUrl);
  }, []);

  return (
    <div className="beerone-search">
      {!searchUrl && <div className="beerone-search-form">
        Search for a beer:
        <input
          id="search-input"
          className="beerone-search-input"
          onChange={handleOnChange}
        />
      </div>}
      <ul className="beerone-search-list">
        {beerList.map(beer => (
          <li className="beerone-search-result" onClick={() => props.onResultSelect(beer)}>
            {beer.nameDisplay || beer.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
