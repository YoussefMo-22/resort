// components/QuoteSection.js
import React from 'react';
import './QuoteSection.css';

const QuoteSection = () => {
  return (
    <section className="section quote-module">
      <div className="background" style={{ backgroundColor: '#f7f5f0' }}>
        <div className="quote-module page-width">
          <div className="wrapper right">
            <div className="container">
              <div className="img-box">
                <img 
                  src="https://sani-prd-cdn.azureedge.net/media/rqlomrfe/sani-resort-_-aerial-1-copy.jpg?rxy=0.4423558897243108,0.5225491309780756&v=1db682da4621530&format=jpg&quality=80&width=560&height=420"
                  alt="Aerial shot of beach at Posidi"
                  className="vue-responsive-image quote-image"
                />
              </div>
              
              <div className="text-box">
                <div className="container-quote">
                  <blockquote className="main-text block-animate-up">
                    <p>With me, you'll experience moments straight out of a dream. Can you hear them? The whispers of Greek philosophers echoing through this ancient forest. Stories from people around the world come alive on this endless beach. Here, the sea and sky unite to frame the most mythical mountain of all - Mount Olympus. And the entire Aegean unfolds its flavours before you. No, I'm not a dream. I am Sani - a sanctuary full of stories and experiences.</p>
                  </blockquote>
                </div>
                <p className="bottom-text pre-heading block-animate-up">.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;