import React from 'react';
import './Images.css';

const Image = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Superhero" className="superhero-image" />;
};

export default Image;
