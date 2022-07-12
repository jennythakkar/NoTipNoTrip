import React from 'react';
import '../index.css';
import Nav from "../Nav.png";
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="center-image" >
     <img src={Nav} alt="Nav" />
     <h2 style={{textAlign: "center"}}> A web tool to help delivery drivers determine their minimum cost per mile and whether a delivery is worth it.</h2>
     <br/>
     <Footer />

        


   </div>
  );
}

export default Home;