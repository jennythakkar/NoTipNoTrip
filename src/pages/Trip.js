import React from 'react';
import '../index.css';
import Footer from '../components/Footer';



function Trip() {
  return (
    <div className='center-image'>
      <h1 style={{textAlign: "center"}}><p style={{ color: "red" }}>OUR STORY</p></h1>
      <br/>
      <h2 style={{textAlign: "center"}}>We launched the <p style={{ color: "red" }}>No Tip, No Trip!</p> website to provide deliver drivers the tools they need to succeed.</h2>
      <br/>
      <h2 style={{textAlign: "center"}}>As delivery drivers ourselves, we have experienced first hand the issues and problems within the industry.</h2>
      <br/>
      <h2 style={{textAlign: "center"}}>Our goal is to encourage other deliver drivers to embrace their "independent contractor" status and refuse low pay and no tip orders.</h2>
      <br/>
      <h2 style={{textAlign: "center"}}>Our role in the industry deserves equal respect and dignity</h2>
      <br/>
      <h2 style={{textAlign: "center"}}>As drivers, it is our responsibility to deter customers from taking advantage of the service we provide and continue our fight for a living wage.</h2>
      <br/>
      <Footer />


    </div>
  );
}

export default Trip;