import React from 'react';
import { Link } from 'react-router-dom';
import * as icons from '../../assets/icons';
import HeroStatBar from '../HeroStatBar/HeroStatBar.js';
import './HeroSimplified.css';

export default function HeroSimplified({ name, powerstats, imgUrl, id }) {
  return (
    <div className='hero__simplified'>
      <div className='hero__simplified__info'>
        <h2>{ name }</h2>
        <Link to={`/hero/${id}`}>
          <img src={ imgUrl } alt={ name } />
        </Link>
      </div>
      <div className='hero__simplified__stats'>
        { Object.keys(powerstats).map(statistic => (
          <HeroStatBar key={`${ id }-${ statistic }`} statistic={ powerstats[statistic] } img={ icons[statistic] }/>
        ))}
      </div>
    </div>
  );
}
