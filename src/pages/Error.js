import React from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../assets/images/error.jpg';

export const Errors = () => {
  const bace = useNavigate()
  return (
    <div>
      <img className='error-img' src={Error} alt="reeor" />
      <button onClick={()=> bace(-1)} className='bace'>Home</button>
    </div>
  );
};

