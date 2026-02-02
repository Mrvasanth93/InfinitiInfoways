import React from 'react';
import './Hero.css';
import clientLogo1 from "../assets/clients_logo/client_logo_1 (1).png"
import clientLogo2 from "../assets/clients_logo/client_logo_1 (2).png"
import clientLogo3 from "../assets/clients_logo/client_logo_1 (3).png"
import clientLogo4 from "../assets/clients_logo/client_logo_1 (4).png"
import clientLogo5 from "../assets/clients_logo/client_logo_1 (5).png"
import clientLogo6 from "../assets/clients_logo/client_logo_1 (6).png"
import clientLogo7 from "../assets/clients_logo/client_logo_1 (7).png"

const Hero = () => {
  return (
    <>
      <section id='home' className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Business meeting" 
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              We Build Smart Digital Solutions
            </h1>
            <h2 className="hero-subtitle">
              for Your Business
            </h2>
            <button className="hero-cta-button">
              <a href="#contact">Get In Touch</a>
            </button>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="clients-container">
          <h2 className="clients-title">Our Clients</h2>
          <div className="clients-logos-wrapper">
            <div className="clients-logos">
              <div className="client-logo">
                <span><img src={clientLogo1} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo2} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo3} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo4} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo5} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo6} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo7} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo1} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo2} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo3} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo4} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo5} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo6} alt="" /></span>
              </div>
              <div className="client-logo">
                <span><img src={clientLogo7} alt="" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;