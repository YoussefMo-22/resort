// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero.jsx';
import ResortSection from './components/ResortSection';
import QuoteSection from './components/QuoteSection';
// import Experiences from './components/Experiences';
// import Awards from './components/Awards';
// import OffersCarousel from './components/OffersCarousel';
// import Gastronomy from './components/Gastronomy';
// import Sustainability from './components/Sustainability';
// import News from './components/News';
// import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ResortSection />
      <QuoteSection />
      {/* <Experiences />
      <Awards />
      <OffersCarousel />
      <Gastronomy />
      <Sustainability />
      <News />
      <Footer /> */}
    </div>
  );
}

export default App;