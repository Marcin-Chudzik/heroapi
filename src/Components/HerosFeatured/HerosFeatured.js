import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests.js';
import HeroSimplified from '../HeroSimplified/HeroSimplified.js';
import Loader from '../Loader/Loader.js';
import './HerosFeatured.css';

const featuredHeroesIds = [502, 15, 485];

export default function HerosFeatured() {
  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []);

  const [ featuredHeroesList, setFeaturedHeroesList ] = useState([]);
  const [ isLoading, setLoadingState ] = useState(true);

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];

    for (const heroId of featuredHeroesIds) {
      const data = await getBasicHeroInfoById(heroId);
      heroes.push({ name: data.name, powerstats: data.powerstats, imgUrl: data.image.url, id: data.id });
    }

    setFeaturedHeroesList(heroes);
    setTimeout(() => setLoadingState(false), '600');
  };

  return (
    <section>
      <h1>Featured Heroes</h1>
      { ! isLoading && <div className='featured__list'>
        {featuredHeroesList.map(({ name, powerstats, imgUrl, id}) => (
          <HeroSimplified key={ id } name={ name } powerstats={ powerstats } imgUrl={ imgUrl } id={ id }/>
        ))}
      </div>}
      { isLoading && <Loader />}
    </section>
  );
}
