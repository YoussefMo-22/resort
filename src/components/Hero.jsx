// components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section hero-module">
      <div className="background" style={{ backgroundColor: '#fff' }}>
        <div className="hero hero-wrapper">
          <video 
            controlsList="nodownload" 
            autoPlay 
            loop 
            muted 
            className="full-screen-video"
            poster="https://player.vimeo.com/progressive_redirect/playback/1098192613/rendition/1080p/file.mp4?loc=external&log_user=0&signature=dd01f33c37df02f47a1e988bc03c51d7864eb059b283df173106592df1b41b08&width=1900&height=1200"
          >
            <source 
              src="https://player.vimeo.com/progressive_redirect/playback/1098192613/rendition/1080p/file.mp4?loc=external&log_user=0&signature=dd01f33c37df02f47a1e988bc03c51d7864eb059b283df173106592df1b41b08#t=1.2" 
              type="video/mp4" 
            />
          </video>
          
          <div className="hero-wrapper-white-background"></div>
          <div className="gradient light-gradient-left-to-right"></div>
          
          <div className="text-wrapper white">
            <div>
              <h1 className="text-wrapper-heading">
                <p>A SANCTUARY</p>
                <p>FULL OF STORIES</p>
                <p>& EXPERIENCES</p>
              </h1>
            </div>
            <div className="text-wrapper-description">
              A destination that speaks through its rich history, enchanting nature and endless beaches. Where the whispers of ancient Greek philosophers echo through the trees and the breathtaking beauty of the Aegean Sea unfolds before you.
            </div>
          </div>
          
          <div className="button-container white">
            <div className="hero-button" style={{ zIndex: 1 }}>
              WATCH FILM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;