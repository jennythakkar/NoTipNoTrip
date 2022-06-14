import React from 'react';
import Symbol from "../symbol.png";
import '../index.css';


function Calculator() {
  return (
    <div className='center-image'>
      <img src={Symbol} alt = "Symbol" /> 
      <h2 style={{textAlign: "center"}}> Use the calculator below to determine what your minimum cost per mile should be to cover your vehicle operating expenses. </h2>
      <br/>
      <h2 style={{textAlign: "center"}}><p style={{ color: "red" }}>Legal Disclaimer</p><p style={{ color: "red" }}>© 2022 Drivers United </p></h2>

    </div>
  );
}

export default Calculator;