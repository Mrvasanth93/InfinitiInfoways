import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import CtaBox from './components/CtaBox';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HowItWorks />
      <WhoWeAre />
      <Services />
      <CtaBox />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
