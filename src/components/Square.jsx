import React from 'react';
import './Square.style.css';

const Square = ({ value }) => {
  // console.log(props);
  return (
    <button type="button" className="btn">
      {value}
    </button>
  );
};

export default Square;
