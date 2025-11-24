import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
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

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden font-serif">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://player.vimeo.com/progressive_redirect/playback/1098192613/rendition/1080p/file.mp4?loc=external&log_user=0&signature=dd01f33c37df02f47a1e988bc03c51d7864eb059b283df173106592df1b41b08&width=1900&height=1200"
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/1098192613/rendition/1080p/file.mp4?loc=external&log_user=0&signature=dd01f33c37df02f47a1e988bc03c51d7864eb059b283df173106592df1b41b08#t=1.2"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

        <div className="relative z-20 h-full flex items-center px-8 md:px-20 lg:px-32">
          <div className="max-w-xl text-white space-y-6">

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight space-y-1">

              <motion.p
                variants={line}
                initial="hidden"
                animate="visible"
                className="flex space-x-1"
              >
                {"A SANCTUARY".split("").map((char, i) => (
                  <motion.span key={i} variants={letter}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.p>

              <motion.p
                variants={line}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="flex space-x-1"
              >
                {"FULL OF STORIES".split("").map((char, i) => (
                  <motion.span key={i} variants={letter}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.p>

              <motion.p
                variants={line}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
                className="flex space-x-1"
              >
                {"& EXPERIENCES".split("").map((char, i) => (
                  <motion.span key={i} variants={letter}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.p>

            </h1>

            <p className="text-sm md:text-base text-gray-200 leading-relaxed">
              A destination that speaks through its rich history, enchanting
              nature and endless beaches. Where the whispers of ancient Greek
              philosophers echo through the trees and the breathtaking beauty of
              the Aegean Sea unfolds before you.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[64px] bg-white"></div>
      </section>
      <div className="w-full flex justify-center bg-transparent">
        <div className="w-[2px] h-[64px] bg-black"></div>
      </div>
    </>
  );
};

export default Hero;