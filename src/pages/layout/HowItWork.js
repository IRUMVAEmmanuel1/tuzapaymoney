import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Header/Footer'
import asap from '../../assets/asaph.jpg';
import kate from '../../assets/katende.jpg'
import irumva from '../../assets/irumva.jpg'
import './How.css';

function HowItWork() {
    return (
      <div>
        <Header />
<div>
      <section className="relative">
  <div className="about-section my-20">
    <h1>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
    <p>Resize the browser window to see that this page is responsive by the way.</p>
  </div>
  <h2 style={{textAlign: 'center'}}>Our Team</h2>
  <div className="row">
    <div className="column">
      <div className="card">
        <img src={kate} alt="Jane" style={{width: '100%'}} />
        <div className="container">
          <h2>Hamza Katende</h2>
          <p className="title">CEO &amp; Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>Hamza.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <img src={irumva} alt="Mike" style={{width: '100%'}} />
        <div className="container">
          <h2>Emmanuel IRUMVA</h2>
          <p className="title">Front-End</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>irumvaemmanuel.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <img src={asap} alt="John" style={{width: '100%'}} height="100px" />
        <div className="container">
          <h2>Asaph IRABARUTA</h2>
          <p className="title">Back-End</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>iasaph.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
  </section>
</div>

<Footer />
</div>

    )
}

export default HowItWork
