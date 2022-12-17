import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const CardId = () => {
  const params = useParams()
  const bake = useNavigate()
  const [flag, setFlag] = useState({
    isError: false,
    isLoading: true,
    data:[]
  })


  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.id}`)
      .then(response => response.json())
      .then(json => {
        setFlag({
          isError: false,
          isLoading: false,
          data: json
        })
        if (json.status === 404) {
          setFlag({
            isError: true,
            isLoading: false,
            data: []
         })
        }
      })
      .catch(error => { })
  },[params])
  return (
    <div>
       <section className="hero">
          <div className="container">
            <div className="bak-group">
              <button className="btn-back" onClick={()=>bake(-1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left "
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>Back
              </button>
           </div>
           {flag.data.map(item =>
          <div key={item.name} className="row  margen">
          <div className="col-12 col-sm-12 col-md-12 col-xl-6">
            <div className="img-group">
              <img className="img" src={item.flags.png} alt=""/>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-xl-6">
          <div className="cols">
            <div className="col-card">
              <h2 className="card-title">{item.name.common}</h2>
              <ul className="list">
                <li className="list-item">
                        <p>
                          Native Name: <span>{item.name.official}</span>
                        </p>
                        <p>
                        Population: <span>{item.population}</span>
                        </p>
                        <p>
                    Region: <span>{item.region}</span>
                        </p>
                       <p>Sub Region: <span>{item.subregion}</span>
                        </p>
                        <p>
                    Capital: <span>{item.capital}</span>
                        </p>
          
                </li>
                <li className="list-item">
                  <p>Top Level Domain: <span>{item.tld[0]}</span></p>
                  <p> Currencies: <span>{Object.keys(item.currencies)}</span></p>
                  <p>Languages: <span>{Object.values(item.languages)+","}</span></p>    
                </li>
              </ul>
              <div className="btn-groups">
                <span>Border Countries: </span>
                      <div className="button">
                        {item?.borders?.map(border =>   <button key={border} className="btn">{border}</button>)}

             </div>
              </div>
             </div>
                </div>
              </div>
            </div>
      )}
          </div>
        </section>
   
    </div>
  );
};

