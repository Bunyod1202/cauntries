import React from 'react';
import './select.css'

const Select = () => {
  return (
    <div className="selects ms-0">
      <select className="select" name="user-country">
        <option  value="uzbekistan" >Filter by Region</option>
        <option value="usa">Africa</option> 
        <option value="qatar">America</option>
        <option value="dubai">Asia</option>
        <option value="dubai">Europe</option>
        <option value="dubai">Oceania</option>
      </select>
    </div>
  );
};

export default Select;