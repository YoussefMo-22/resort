import React, { useState, useEffect, useRef } from "react";

function OffersSwiper({ slides }) {
  const [index, setIndex] = useState(0);
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isOverCTA, setIsOverCTA] = useState(false);
  const [direction, setDirection] = useState("right");
  const cursorRef = useRef(null);

  const nextSlide = () => {
    if (isOverCTA) return;
    setDirection("right");
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isOverCTA) return;
    setDirection("left");
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (i) => {
    if (i > index) setDirection("right");
    else setDirection("left");
    setIndex(i);
  };

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden select-none">

      <div
        ref={cursorRef}
        className={`fixed z-50 pointer-events-none transition-all duration-200 
        ${hoveredSide && !isOverCTA ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
      >
        <div className="w-20 h-20 rounded-full bg-transparent border-2 border-white text-white flex items-center justify-center text-sm font-semibold shadow-xl">
          {hoveredSide === "left" ? "Prev" : hoveredSide === "right" ? "Next" : ""}
        </div>
      </div>

      <div
        key={index}
        className={`w-full h-full bg-cover bg-center 
          ${direction === "right" ? "animate-slideRight" : "animate-slideLeft"}`}
        style={{ backgroundImage: `url(${slides[index].img})` }}
      >
        <div className="absolute inset-0 bg-black/25"></div>

        <div className="absolute flex flex-col space-y-12 items-center justify-center text-center w-full h-full text-white px-6">
          <h2 className="text-3xl md:text-6xl font-serif drop-shadow-lg">
            {slides[index].title}
          </h2>

          <p className="max-w-xl text-lg opacity-90 leading-relaxed">
            {slides[index].description}
          </p>

          <p
            className="block-animate-up z-40"
            onMouseEnter={() => setIsOverCTA(true)}
            onMouseLeave={() => setIsOverCTA(false)}
          >
            <a href="/#" className="cta-anchor link text-xl inline-block">
              {slides[index].cta}
              <span className="cta-anchor-after"></span>
            </a>
          </p>
        </div>
      </div>

      <div
        onClick={prevSlide}
        onMouseEnter={() => !isOverCTA && setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
        className="absolute left-0 top-0 w-[50%] h-full z-30"
      ></div>

      <div
        onClick={nextSlide}
        onMouseEnter={() => !isOverCTA && setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
        className="absolute right-0 top-0 w-[50%] h-full z-30"
      ></div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all 
              ${i === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default OffersSwiper;
