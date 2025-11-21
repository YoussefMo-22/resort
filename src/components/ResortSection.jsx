// components/ResortSection.js
import React from 'react';
import './ResortSection.css';

const ResortSection = () => {
  return (
    <section className="section resort-section">
      <div className="background" style={{ backgroundColor: '#fff' }}>
        <div className="section-heading page-width">
          <div className="section-heading-wrapper">
            <div className="section-heading-text">
              <div className="title">
                <p className="pre-heading supporting-title block-animate-up">The Resort</p>
                <h2 className="heading-holder center large">
                  <p><span className="medium">FIVE </span></p>
                  <p><span className="medium">HOTELS</span></p>
                  <p><span className="medium"><em><span className="gold-header">ONE </span></em></span></p>
                  <p><span className="medium"><em><span className="gold-header">RESORT</span></em></span></p>
                </h2>
              </div>
              
              <div className="link-desktop">
                <span className="description block-animate-up">
                  <p>Set at the heart of three natural worlds, Sani Resort is an enchanting paradise with a captivating spirit.</p>
                  <p>Where the visions of five unique hotels intertwine to create an award winning 5* resort like no other.</p>
                </span>
                <p><a href="/our-hotels" className="cta-anchor link">Choose Yours<span className="cta-anchor-after"></span></a></p>
              </div>
            </div>
            
            <div className="section-heading-images">
              <div className="image first-img-container">
                <img 
                  src="https://sani-prd-cdn.azureedge.net/media/qcrbkvtn/sani_beach_main_pool_v2-copy.jpg?v=1db6825d640a100&format=jpg&quality=80&width=432&height=576"
                  alt="Sani beach pool with umbrella"
                  className="vue-responsive-image anim-img"
                />
                <img 
                  src="https://sani-prd-cdn.azureedge.net/media/kzzftmzw/sani-bousoulas-2-copy.jpg?v=1dbf56162253500&format=jpg&quality=80&width=432&height=576"
                  alt="Aerial view of Bousoulas beach"
                  className="vue-responsive-image anim-img hidden-image hidden-image-right"
                />
              </div>
              
              <div className="link-mobile">
                <div className="title">
                  <p className="pre-heading supporting-title block-animate-up">The Resort</p>
                  <h2 className="heading-holder"></h2>
                </div>
                <span className="description block-animate-up">
                  <p>Set at the heart of three natural worlds, Sani Resort is an enchanting paradise with a captivating spirit.</p>
                  <p>Where the visions of five unique hotels intertwine to create an award winning 5* resort like no other.</p>
                </span>
                <p className="block-animate-up"><a href="/our-hotels" className="cta-anchor link">Choose Yours<span className="cta-anchor-after"></span></a></p>
              </div>
              
              <div className="image second-img-container">
                <img 
                  src="https://sani-prd-cdn.azureedge.net/media/1mspiyy3/sanibeach_main_pool_v2-copy.jpg?v=1db6825dbdaf480&format=jpg&quality=80&width=432&height=576"
                  alt="Sani Asterias Beachfront"
                  className="vue-responsive-image anim-img"
                />
                <img 
                  src="https://sani-prd-cdn.azureedge.net/media/3x1byd1h/sani-club-_-ouzerie-restaurant-_-family-dining-copy.jpg?v=1db6825dcdbc2b0&format=jpg&quality=80&width=432&height=576"
                  alt="Family enjoying world class cuisine at a restaurant"
                  className="vue-responsive-image anim-img hidden-image hidden-image-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResortSection;