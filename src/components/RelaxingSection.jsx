import React, { useRef, useState, useEffect } from "react";
import AnimateByLetters from "../utils/AnimateByLetters";

function RelaxingSection() {
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
      className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-28 px-6 md:px-20 lg:px-32"
    >
      <div>
        <img
          src="https://sani-prd-cdn.azureedge.net/media/jeqb4jw3/_dsc7751.jpg?rxy=0.4949874686716792,0.5939849624060151&v=1db679b02491f60&format=webp&quality=80&width=685&height=400"
          alt="Relaxing Escapes"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-5xl font-serif text-gray-900 leading-tight tracking-wide">
          <AnimateByLetters
            text={"RELAXING\nESCAPES"}
            inView={inView}
            className="whitespace-pre-wrap"
          />
        </h3>

        <p className="text-gray-700 leading-relaxed text-lg">
          At Sani, we understand the need for a little peace and calm. We believe in providing
          you the opportunity to indulge in an uninterrupted dinner and to swim lengths without
          being splashed. That’s why a number of locations, from our soothing spas to serene
          beachfront spots, certain restaurants and crystal-clear pools are designated as
          adult-only.
        </p>
      </div>
    </div>
  );
}

export default RelaxingSection;
