import React from 'react';
import '../index.css';
import Stock from "../stock.png";
import Running from "../running.png";
import HandHold from "../handhold.png";
import Rich from "../rich.png";
import Power from "../power.png";
import Symbol from "../symbol.png";
import Nav from "../Nav.png";

function About() {
  return (
     
  <div class="center-image" >
   <img src={Nav} alt="Nav" />
      <img src={Stock} alt="Stock" />
      <h2 style={{textAlign: "center"}}>As <p style={{ color: "red" }}> Independent contractors, </p> it is not a deliver drivers’ responsibility to take low paying orders.</h2>
      <img src={Running} alt = "Running" />     
      <h2 style={{textAlign: "center"}}><p style={{ color: "red" }}>We have the power </p> to determine whether a delivery is finanically viable for us.</h2>
      <img src={HandHold} alt = "HandHold"/> 
      <h2 style={{textAlign: "center"}}><p style={{ color: "red" }}> Together</p> it is our responsbility  and an act of solidarity, to <p style={{ color: "red" }}> decline low paying or no tip orders </p> to deter customers from this behavior.</h2>
      <img src={Rich} alt = "Rich" /> 
      <h2 style={{textAlign: "center"}}><p style={{ color: "red" }}>Nobody wants to complete a delivery and get paid poorly. </p> We as drivers can actively discourage this by declining low pay deliveries.</h2>
      <img src={Symbol} alt = "Symbol" /> 
      <h2 style={{textAlign: "center"}}>To help delivery drivers, we built this site to help <p style={{ color: "red" }}> determine their minimum cost per mile. </p> Meaning, what is the minimum per mile they must make in order to cover their operational expenses.</h2>
      <img src={Power} alt = "Power" /> 
      <h2 style={{textAlign: "center"}}>From one delivery driver to another. Let’s <p style={{ color: "red" }}>“No Tip, No Trip” </p> together!</h2>
      <h2 style={{textAlign: "center"}}><p style={{ color: "red" }}>Legal Disclaimer</p><p style={{ color: "red" }}>© 2022 Drivers United </p></h2>
  </div>
  );
}

export default About;



