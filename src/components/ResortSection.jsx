import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const ResortSection = () => {
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const line = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const firstImages = [
    "https://sani-prd-cdn.azureedge.net/media/qcrbkvtn/sani_beach_main_pool_v2-copy.jpg?v=1db6825d640a100&format=jpg&quality=80&width=432&height=576",
    "https://sani-prd-cdn.azureedge.net/media/kzzftmzw/sani-bousoulas-2-copy.jpg?v=1dbf56162253500&format=jpg&quality=80&width=432&height=576"
  ];

  const secondImages = [
    "https://sani-prd-cdn.azureedge.net/media/1mspiyy3/sanibeach_main_pool_v2-copy.jpg?v=1db6825dbdaf480&format=jpg&quality=80&width=432&height=576",
    "https://sani-prd-cdn.azureedge.net/media/3x1byd1h/sani-club-_-ouzerie-restaurant-_-family-dining-copy.jpg?v=1db6825dcdbc2b0&format=jpg&quality=80&width=432&height=576"
  ];

  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstIndex((prev) => (prev + 1) % firstImages.length);
      setSecondIndex((prev) => (prev + 1) % secondImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">


        <div className="flex-1 relative w-full h-96 lg:h-[576px] overflow-hidden rounded-lg">
          {firstImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Sani Resort ${idx}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === firstIndex ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
        </div>


        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
          <motion.h2
            ref={ref}
            className="text-4xl lg:text-7xl leading-tight space-y-1 font-serif"
            initial="hidden"
            animate={controls}
          >
            <motion.p variants={line} className="flex space-x-1">
              {"FIVE".split("").map((char, i) => (
                <motion.span variants={letter} key={i}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>

            <motion.p variants={line} className="flex space-x-1">
              {"HOTELS".split("").map((char, i) => (
                <motion.span variants={letter} key={i}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>

            <motion.p variants={line} className="flex space-x-1 text-[#AD986E] italic">
              {"ONE".split("").map((char, i) => (
                <motion.span variants={letter} key={i}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>

            <motion.p variants={line} className="flex space-x-1 text-[#AD986E] italic">
              {"RESORT".split("").map((char, i) => (
                <motion.span variants={letter} key={i}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>
          </motion.h2>

          <motion.p
            className="text-gray-700"
            variants={fadeUp}
            initial="hidden"
            animate={controls}
          >
            Set at the heart of three natural worlds, Sani Resort is an enchanting paradise with a captivating spirit.
          </motion.p>

          <motion.p
            className="text-gray-700"
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            Where the visions of five unique hotels intertwine to create an award winning 5* resort like no other.
          </motion.p>

          <motion.p
            className="block-animate-up"
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.4 }}
          >
            <a href="/our-hotels" className="cta-anchor link">
              Choose Yours<span className="cta-anchor-after"></span>
            </a>
          </motion.p>

        </div>


        <div className="flex-1 relative w-full h-96 lg:h-[576px] overflow-hidden rounded-lg">
          {secondImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Sani Resort ${idx}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === secondIndex ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResortSection;