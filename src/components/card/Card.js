import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img,name,population,region,capital}) => {
  return (
    <div key={name} className="col-12 col-sm-6 col-md-6 col-xl-3 p-0">
      <div className="flag-item">
        <Link to={`/${name}`}>
          <div className="ftag-item-top">
            <img className='card-img-top card-img' src={img} width="264" height="200" alt="flag"/>
          </div>
          <div className="ftag-item-bottom">
            <h2 className="title">{name}</h2>
            <p className="text"> <span>Population:</span> {population}</p>
            <p className="text"> <span>Region:</span> {region}</p>
            <p className="text"> <span>Capital:</span> {capital}</p>
          </div>
        </Link>
      </div>
    </div> 
  );
};

export default Card;