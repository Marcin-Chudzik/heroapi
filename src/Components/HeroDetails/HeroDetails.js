import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getBasicHeroInfoById } from '../../requests.js';
import Loader from '../Loader/Loader.js';
import * as icons from '../../assets/icons';
import HeroStatBar from '../HeroStatBar/HeroStatBar.js';
import './HeroDetails.css';

export default function HeroDetails() {
  const [ heroData, setHeroData ] = useState([]); 
  const [ isLoading, setLoadingState ] = useState(true);
  const { id } = useParams();
  const { powerstats, biography, appearance, work, connections, image } = heroData;

  useEffect(() => {
    setLoadingState(true);
    getBasicHeroInfoById(id).then(data => {
      if (data.error) {
        return;
      }

      setHeroData(data);
      setTimeout(() => setLoadingState(false), '600');
    })
  }, [id]);

  return (
    <section className='hero__details'>
      <h1>Hero Details</h1>
      { !isLoading && (
        <div className='container'>
          <img src={ image.url } alt='hero image' />
          <h2>{ heroData.name }</h2>
          
          <div className='hero__info'>
            <div className='hero__info__item'>
              <h3>Appearance</h3>
                { Object.keys(appearance).map(key => {
                  if (typeof(appearance[key]) === 'object') {
                    return <p>{ `${key[0].toUpperCase()}${key.slice(1)}` }: { appearance[key][1] }</p>
                  } else {
                    return <p>{ `${key[0].toUpperCase()}${key.slice(1)}` }: { appearance[key] }</p>
                  }
                })}
            </div>

            <div className='hero__info__item'>
              <h3>Biography</h3>
                { Object.keys(biography).map(key => {
                  if (typeof(biography[key]) === 'object') {
                    return <p>{ `${key[0].toUpperCase()}${key.slice(1)}` }: { biography[key][1] }</p>
                  } else {
                    return <p>{ `${key[0].toUpperCase()}${key.slice(1)}` }: { biography[key] }</p>
                  }
                })}
            </div>

            <div className='hero__info__item'>
              <h3>Connections</h3>
                { Object.keys(connections).map(key => {
                  if (typeof(connections[key]) === 'object') {
                    return <p>{ `${key[0].toUpperCase()}${key.slice(1)}` }: { connections[key][1] }</p>
                  } else {
                    return <p>{ `${key[0].toUpperCase()}${key.slice(1)}` }: { connections[key] }</p>
                  }
                })}
            </div>

            <div className='hero__info__item'>
              <h3>Work</h3>
                { Object.keys(work).map(key => {
                  if (typeof(work[key]) === 'object') {
                    return <p>{ `${key[0].toUpperCase()}${key.slice(1)}` }: { work[key][1] }</p>
                  } else {
                    return <p>{ `${key[0].toUpperCase()}${key.slice(1)}` }: { work[key] }</p>
                  }
                })}
            </div>

            <div className='hero__info__item'>
              <h3>Statistics</h3>
              <div className='hero__simplified__stats'>
                { Object.keys(powerstats).map(statistic => (
                  <HeroStatBar key={`${ id }-${ statistic }`} statistic={ powerstats[statistic] } img={ icons[statistic] }/>
                ))}
              </div>
            </div>
          </div>
        </div>)
      }{
        isLoading && <Loader />
      }
    </section>
  );
}
