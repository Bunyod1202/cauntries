import React from 'react';
import './select.css'
const Select = (props) => {

  return (
    <div className="selects m-0">
      <select {...props}  >
      {props.children}
      </select>
    </div>
  );
};

export default Select;