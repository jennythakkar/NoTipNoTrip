import React from 'react';
import Pizza from "../pizza.png";
import Footer from '../components/Footer';
import '../index.css';


function Resource() {
  return (
    <div className='center-image'>
      <img src={Pizza} alt = "Pizza" /> 
      <h1 style={{textAlign: "center"}}><p style={{ color: "red" }}>IS THIS TRIP WORTH IT?</p></h1>
      <h2> stype={{textAlign: "center"}}>Use the calculator below to determine, based on your minimum per mile, whether the trip is worth accepting or not. </h2>
      <br/>
     <Footer />

    </div>
  );
}

export default Resource;