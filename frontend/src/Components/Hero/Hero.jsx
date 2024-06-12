import React from 'react';
import './Hero.css';
import arrow_icon from '../Images/arrow.png';
import hero_image from '../Images/hero_img.webp';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        
        <div className='hero-text'>
        <p>New</p>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest collections</div>
          <img src={arrow_icon} alt='' />
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt='' />
      </div>
    </div>
  );
};

export default Hero;
