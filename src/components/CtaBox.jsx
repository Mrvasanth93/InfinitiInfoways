import React from 'react';
import { FiPhone } from 'react-icons/fi';
import './CtaBox.css';

const CtaBox = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-box">
          <h2 className="cta-title">Have A Project Mind ? Lets talk</h2>
          <p className="cta-description">
            Have an idea or project in mind? Let’s collaborate to build secure, scalable,
            <br />
            and impactful digital solutions.
          </p>
          <button className="cta-button">
            <FiPhone  />
            +91 - 90035 884527
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBox;