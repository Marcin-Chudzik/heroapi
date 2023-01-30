import React from 'react';
import './HeroStatBar.css';

function HeroStatBar({ statistic, img }) {
    return (
        <div className='stat'>
            <img src={ img } alt='icon'/>
            <div className='stat__bar' style={{ width: `${statistic*2}px` }}></div>
            <p>{ statistic }</p>
        </div>
)};

export default HeroStatBar;