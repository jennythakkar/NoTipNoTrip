import React from 'react';
import '../index.css';
import Nav from "../Nav.png";

function Home() {
  return (
    <div className="center-image" >
     <img src={Nav} alt="Nav" />
     <h2 style={{textAlign: "center"}}> A web tool to help delivery drivers determine their minimum cost per mile and whether a delivery is worth it.</h2>
     <br/>
     <h2 style={{textAlign: "center"}}><p style={{ color: "red" }}>Legal Disclaimer</p><p style={{ color: "red" }}>© 2022 Drivers United </p></h2>

        


   </div>
  );
}

export default Home;