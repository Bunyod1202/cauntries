import React from 'react';

const Card = ({img,name,population,region,capital}) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-xl-3 p-0">
      <div className="flag-item">
        <a href="/">
          <div className="ftag-item-top">
            <img className='card-img-top' src={img} width="264" height="200" alt="flag"/>
          </div>
          <div className="ftag-item-bottom">
            <h2 className="title">{name}</h2>
            <p className="text"> <span>Population:</span> {population}</p>
            <p className="text"> <span>Region:</span> {region}</p>
            <p className="text"> <span>Capital:</span> {capital}</p>
          </div>
        </a>
      </div>
    </div> 
  );
};

export default Card;