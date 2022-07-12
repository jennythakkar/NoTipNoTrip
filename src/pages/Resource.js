import React from 'react';
import Pizza from "../assets/pizza.png";
import '../index.css';


function Resource() {
  return (
    <div className='center-image'>
      <img src={Pizza} alt = "Pizza" /> 
      <h1 style={{textAlign: "center"}}><p style={{ color: "red" }}>IS THIS TRIP WORTH IT?</p></h1>
      <h2> stype={{textAlign: "center"}}>Use the calculator below to determine, based on your minimum per mile, whether the trip is worth accepting or not. </h2>
      <br/>
      <h2 style={{textAlign: "center"}}><p style={{ color: "red" }}>Legal Disclaimer</p><p style={{ color: "red" }}>© 2022 Drivers United </p></h2>

    </div>
  );
}

export default Resource;