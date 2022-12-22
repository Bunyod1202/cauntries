import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Card = ({ img, name, population, region, capital }) => {
  const { t } = useTranslation();
  return (
    <div key={name} className="col-12 col-sm-6 col-md-6 col-xl-3 p-0">
      <div className="flag-item">
        <Link to={`/card/${name}`}>
          <div className="ftag-item-top">
            <img className='card-img-top card-img' src={img} width="264" height="200" alt="flag"/>
          </div>
          <div className="ftag-item-bottom">
            <h2 className="title">{name}</h2>
            <p className="text"> <span>{t("population")}:</span> {population}</p>
            <p className="text"> <span>{t("region")}:</span> {region}</p>
            <p className="text"> <span>{t("capital")}:</span> {capital}</p>
          </div>
        </Link>
      </div>
    </div> 
  );
};

export default Card;