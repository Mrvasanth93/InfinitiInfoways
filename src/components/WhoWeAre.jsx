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
              We specialize in developing secure defence applications, reliable ERP systems, and customized software solutions designed to meet specific client requirements. Our team focuses on building robust, scalable architectures that ensure high performance, data security, and long-term reliability. By combining modern technologies with industry best practices, we help organizations streamline operations, improve efficiency, and manage mission-critical processes with confidence, accuracy, and complete operational control.
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
      <div className="why-choose-us">
        <div className="why-choose-us-container">
          <h2 className="why-choose-us-title">Why Choose Us?</h2>
        <p className="why-choose-us-text">
          We deliver secure, scalable, and reliable software solutions with expert teams, modern technologies, on-time delivery, and a strong commitment to quality and client success.
        </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;