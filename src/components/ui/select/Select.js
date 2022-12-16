import React from 'react';
import './select.css'

const Select = (props) => {
  return (
    <div className="selects ms-0">
      <select {...props}  >
        <option  value="all" >Filter by Region</option>
        <option value="Africa">Africa</option> 
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Select;