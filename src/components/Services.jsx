import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineDeviceMobile, HiOutlineColorSwatch, HiOutlineSpeakerphone } from 'react-icons/hi';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <HiOutlineDesktopComputer />,
      title: 'Web development',
      description: 'We build fast, responsive, secure websites for modern business growth.'
    },
    {
      icon: <HiOutlineDeviceMobile />,
      title: 'Mobile App development',
      description: 'We create user friendly mobile apps for Android and iOS platforms.'
    },
    {
      icon: <HiOutlineColorSwatch />,
      title: 'UI / UX Design',
      description: 'We design intuitive, clean interfaces that deliver better user experiences.'
    },
    {
      icon: <HiOutlineSpeakerphone />,
      title: 'Digital Marketing',
      description: 'We promote your brand online using SEO, ads, and social strategies.'
    }
  ];

  return (
    <section id='services' className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="header-line"></div>
          <div className="services-pill">
            <span className="services-label">Services</span>
          </div>
          <div className="header-line"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;