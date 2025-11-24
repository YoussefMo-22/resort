import React from 'react';
import Hero from './components/Hero.jsx';
import ResortSection from './components/ResortSection';
import QuoteSection from './components/QuoteSection';
import './App.css';
import Navbar from './components/Navbar.jsx';
import ResortMap from './components/resortMap.jsx';
import ExperiencesSection from './components/ExperiencesSection.jsx';
import FamiliesSection from './components/FamiliesSection.jsx';
import WillnessSection from './components/WillnessSection.jsx';
import WinnerSection from './components/WinnerSection.jsx';
import RelaxingSection from './components/RelaxingSection.jsx';
import OffersSwiper from './components/OffersSwiper.jsx';
import { offersData } from './data/OffersData.jsx';
import { sportsData } from './data/SportsData.jsx';
import GastronomySection from './components/GastronomySection.jsx';
import VideoSection from './components/VideoSection.jsx';
import SustainabilitySection from './components/SustainabilitySection.jsx';
import NewsSection from './components/NewsSection.jsx';
import FormSection from './components/FormSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ResortSection />
      <QuoteSection />
      <ResortMap />
      <ExperiencesSection />
      <FamiliesSection />
      <WillnessSection />
      <WinnerSection />
      <RelaxingSection />
      <OffersSwiper slides={offersData}/>
      <GastronomySection />
      <VideoSection />
      <SustainabilitySection />
      <OffersSwiper slides={sportsData}/>
      <NewsSection />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;