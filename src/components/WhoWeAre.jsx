import React from 'react';
import './WhoWeAre.css';
import img1 from '../assets/who_are_us/img_1.jfif'
import img2 from '../assets/who_are_us/img_2.jfif'
import img3 from '../assets/who_are_us/img_3.jfif'

const WhoWeAre = () => {
  return (
    <section id='about' className="who-are-us">
      <div className="who-are-us-container">
        <div className="content-wrapper">
          <h2 className="section-title-who">
            <h4>Who are Us</h4>
            <div className="title-underline"></div>
          </h2>
          <div className="text-content">
            <p className="description-text">
              We specialize in building secure defence applications, robust ERP systems, and custom software solutions tailored to client needs. Our focus is reliability, data security, and scalable architecture, helping organizations streamline operations and manage critical processes with confidence and precision.
            </p>
          </div>
        </div>
        <div className="images-content">
          <div className="image-container start">
            <img src={img1} alt="" className="card-image" />
          </div>
          <div className="image-container center">
            <img src={img2} alt="" className="card-image" />
          </div>
          <div className="image-container end">
            <img src={img3} alt="" className="card-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;