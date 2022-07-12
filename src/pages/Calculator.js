import React from 'react';
import Symbol from "../symbol.png";
import '../index.css';
import Footer from '../components/Footer';



function Calculator() {
  return (
    <div className='center-image'>
      <img src={Symbol} alt = "Symbol" /> 
      <h2 style={{textAlign: "center"}}> Use the calculator below to determine what your minimum cost per mile should be to cover your vehicle operating expenses. </h2>
      <br/>
      <Footer />

    </div>
  );
}

export default Calculator;