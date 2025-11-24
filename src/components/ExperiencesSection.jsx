import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function ExperiencesSection() {
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

    const letterContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
            },
        },
    };

    const letterVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    const titleText = "A SANCTUARY OF ADVENTURES";

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-16 px-6 md:px-20 lg:px-32 overflow-hidden"
        >
            
            <div
                className={`absolute inset-0 bg-[#EAE5DB] transition-all duration-[3000ms] ease-out ${
                    inView ? "w-full left-0" : "w-0 left-0"
                }`}
                style={{ zIndex: 0 }}
            ></div>

            <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 z-10">
                
                <div className="relative flex-1 w-full">
                    <div className="relative">
                        <img
                            src="https://sani-prd-cdn.azureedge.net/media/l1cg2pjq/_dsc0435.jpg?v=1db6798543549f0&format=webp&quality=80&width=685&height=400"
                            alt="Experience 1"
                            className="w-full h-64 md:h-80 lg:h-96 object-cover shadow-lg relative z-10"
                        />
                        <div className="absolute inset-0 bg-black/20 z-20"></div>

                        <div className="absolute -bottom-8 -left-8 w-40 md:w-48 lg:w-56 h-40 md:h-48 lg:h-56 shadow-xl overflow-hidden z-30">
                            <img
                                src="https://sani-prd-cdn.azureedge.net/media/izyjs4ek/a003c0302_241030_xyed03vertical.jpg?v=1db679a45b9f180&format=jpg&quality=80"
                                alt="Experience 2"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                    </div>
                </div>

                
                <div className="flex-1 w-full flex flex-col justify-center space-y-6 text-black">
                    <h2 className="text-xl md:text-2xl tracking-wide uppercase z-40 relative">
                        Experiences
                    </h2>

                    
                    <motion.h3
                        className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif flex flex-wrap z-40 relative"
                        variants={letterContainer}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {titleText.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariant}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h3>
                    

                    <p className="text-base md:text-lg leading-relaxed z-40 relative">
                        Discover a resort where possibilities are endless. Whether it’s scuba
                        diving, beekeeping, bird watching, waterskiing – inspiration is found
                        at every turn. Hone your game at world class facilities; including the
                        Rafa Nadal Tennis Center, Bear Grylls Survival Academy, Chelsea Football
                        FC Academy or Sani Treetop Adventure. Or if you want space, explore Sani
                        Resort’s 1,000 acres of unspoilt wilderness by bike.
                    </p>

                    <p className="block-animate-up">
                        <a href="/#" className="cta-anchor link">
                            Explore More<span className="cta-anchor-after"></span>
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ExperiencesSection;
