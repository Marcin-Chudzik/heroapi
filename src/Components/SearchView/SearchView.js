import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { searchHeroesByName } from '../../requests.js';
import HeroSimplified from '../HeroSimplified/HeroSimplified.js';
import Loader from '../Loader/Loader.js';
import './SearchView.css';

function SearchView() {
  const [ searchList, setSearchListContent ] = useState([]);
  const [ isLoading, setLoadingState ] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then(searchResults => {
      const { data } = searchResults;

      if (data.error) {
        return;
      };

      const { results } = data;
      setSearchListContent(results);
      setTimeout(() => setLoadingState(false), '600');
    });
  }, [name]);

  return(
    <section>
      <h1>Founded Heroes</h1>
      { !isLoading && 
        (<div className='featured__list'>
          { searchList.map(({ name, powerstats, image, id}) => (
          <HeroSimplified key={ id } powerstats={ powerstats } imgUrl={ image.url } name={ name } id={ id }/>
          ))}
        </div>)
      }{
        isLoading && <Loader />
      }
    </section>
  );
};

export default SearchView;
