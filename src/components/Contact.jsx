import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <div className="contact-header-container">
          <h2 className="contact-main-title">Feel Free to Get in touch</h2>
          <p className="contact-subtitle">Reach out anytime, we’re ready to discuss your ideas.</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <div className="form-card">
              <h3 className="form-title">Leave your Message</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input full-width"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="6"
                  required
                ></textarea>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="contact-info-wrapper">
            <h3 className="contact-info-title">
              <h4>Contact Us</h4>
              <div className="title-underline"></div>
            </h3>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon office-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <h4 className="contact-label">Office</h4>
                  <p className="contact-text">LINDERN LUFE SCIENCES 13, 14/2 Srinivasa nagar 7th main road , Trichy 17</p>
                </div>
              </div>
              <div className="contact-items-row">
                <div className="contact-item">
                  <div className="contact-icon phone-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label">Phone</h4>
                    <p className="contact-text">90035 84527</p>
                  </div>
                </div>
                <div className="contact-item">
                <div className="contact-icon email-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <h4 className="contact-label">Email</h4>
                  <p className="contact-text">habbebrahman@gmail.com</p>
                </div>
              </div>
              </div>
            </div>

            <div className="divider-line"></div>

            <div className="social-media-section">
              <h4 className="social-title">Connect with us:</h4>
              <div className="social-icons">
                <a className='social-icon' href="">
                  <FaFacebookF color='#1b00b4' />
                </a>
                <a className='social-icon' href="">
                  <FaTwitter color='#0087b4' />
                </a>
                <a className='social-icon' href="">
                  <FaLinkedinIn color='#868686' />
                </a>
                <a className='social-icon' href="">
                  <FaInstagram color='#b4002a' />
                </a>
                <a className='social-icon' href="">
                  <FaWhatsapp color='#00b460' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;