import React, { useRef, useState, useEffect } from 'react';
import AnimateByLetters from '../utils/AnimateByLetters'; 

function GastronomySection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full py-20 px-6 flex items-center justify-center text-center"
    >
      <div className="max-w-3xl mx-auto flex flex-col space-y-6">

        <h2 className="text-xl md:text-2xl tracking-wide uppercase">
          Gastronomy
        </h2>

        <h3 className="text-3xl md:text-4xl lg:text-7xl text-center font-serif leading-tight text-[#AD986E]">
          <AnimateByLetters
            text={"FOR EVERY PALATE"}
            inView={inView}
            className="inline-block"
          />
        </h3>

        <p className="text-base leading-relaxed text-black/80">
          Home to 26 restaurants, we pride ourselves on world-class cuisines to suit every palate. 
          From authentic Greek fare to timeless Italian favourites or the freshest sushi; with 
          exclusive menus expertly crafted by Michelin-starred chefs and kitchens run with passion, 
          choice is abundant at Sani Resort.
        </p>

        <p className="block-animate-up">
          <a href="/#" className="cta-anchor link">
            Explore the tastes of Sani
            <span className="cta-anchor-after"></span>
          </a>
        </p>

      </div>
    </div>
  );
}

export default GastronomySection;
