import './Creative2.css';
import React from 'react';


const Creative2 = ({ logoImg, bgImg, ctaImg, copyImg, selectedOption }) => {
    return (
      <div className={`Creative container block `}>
        <div className={`bg-${selectedOption} block`} style={{ backgroundImage: `url(${bgImg})` }} />
        <div className={`logo-${selectedOption} block`} style={{ backgroundImage: `url(${logoImg})` }} />
        <div className={`cta-${selectedOption} block`} style={{ backgroundImage: `url(${ctaImg})` }} />
        <div className={`copy-${selectedOption} block`} style={{ backgroundImage: `url(${copyImg})` }} />
      </div>
    );
  }
  
  export default Creative2;
