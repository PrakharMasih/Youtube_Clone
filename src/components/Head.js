import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
// import { AUTO_COMPLETE_API, AUTO_COMPLETE_API2 } from '../utils/constants';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp'
import { cacheResults } from '../utils/searchSlice';
import SearchBtn from './SearchBtn';

const Head = () => {

  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [suggestionBox, setSuggestionBox] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    if(searchCache[query]){
      setSuggestion(searchCache[query]);     //APPLIED CACHING TO REDUCE API CALL
      // console.log( 'CacheData, NO API CALL MADE', searchCache)
    }
    else{
    const timer = setTimeout(() => {
        getSearchResult();
      }, 200);              //DEBOUNCING OF 200MS TO REDUCE API CALL AT EVERY KEYSTROKES
      return () => {
        clearTimeout(timer);
        // console.log('DEBOUNCING Applied')
      }
    }

  }, [query])


  const getSearchResult = async () => {
    axios({
      // A YT undocumented API for auto suggest search queries
      url: `https://clients1.google.com/complete/search`,
      adapter: jsonpAdapter,
      params: {
        client: "youtube",
        hl: "en",
        ds: "yt",
        q: query,
      }
    })
      .then((res) => {
        if (res.status !== 200) {
          throw Error("Suggest API not 200!");
        }
        setSuggestion(res.data[1]);
        
        dispatch(cacheResults({
          [query]: res.data[1]
        }))
      })
  }

  function handleClick() {
    dispatch(toggleMenu());
  }

  return (
    <>
      <div className="flex justify-between h-15 bg-white sticky top-0 w-full z-10">
        <div className="flex ml-5 ">
          <img className='object-cover h-10 w-10 self-center cursor-pointer hidden sm:block ' onClick={() => handleClick()}
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/menu-9736750-7904881.png?f=webp&w=256"
            alt="icon"
          />
          <img className='object-cover h-20 w-30 cursor-pointer'
            src="https://as1.ftcdn.net/v2/jpg/03/00/38/90/1000_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="youtube-logo"
          />
        </div>
        <div className="flex w-1/2 -ml-20 ">
          <input
            type="text"
            className='border border-gray-300 shadow-inner rounded-l-full bg-snow w-full h-10 p-2 self-center focus:outline-blue-300  '
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setSuggestionBox(true)}
            onBlur={() => setSuggestionBox(false)}
          />
          <button type="submit" className='border border-gray-300 bg-gray-100 rounded-r-full h-10 w-20 self-center'>🔍</button>
        </div>
        <div className="flex">
          <img className='object-cover h-10 w-10 mr-5 self-center '
            src="https://cdn.iconscout.com/icon/free/png-512/free-user-573-130413.png?f=webp&w=256"
            alt="user-logo"
          />
        </div>
      </div>
      {
        suggestionBox && suggestion &&
        <div className=' flex flex-col w-2/5 rounded-lg z-20 fixed top-20 ml-96 bg-gray-100'  >
          {
            suggestion.map((curr, i) =>
              <SearchBtn suggestionResult={curr[0]} key={i} />
            )
          }
          </div>
      }
    </>
  )
}

export default Head;