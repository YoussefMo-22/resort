import React, { useRef, useState, useEffect } from "react";
import AnimateByLetters from "../utils/AnimateByLetters";

function SustainabilitySection() {
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
        <section
            ref={sectionRef}
            className="relative w-full bg-[#F4F4F4] px-6 md:px-20 lg:px-32"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                <div className="flex-1 w-full flex flex-col justify-center space-y-6">
                    <h2 className="text-xl md:text-2xl tracking-wide uppercase text-gray-500">
                        Sustainability
                    </h2>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-gray-900">
                        <AnimateByLetters
                            text="LEAVE NOTHING BUT FOOTPRINTS"
                            inView={inView}
                            className="inline-block"
                        />
                    </h3>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Home to untamed wildlife and sprawling wilderness, Sani is a resort that's committed to sustainability. Already the recipient of 10 Blue Flags, since 2020 - when Sani Resort became the first carbon neutral resort in Greece - Sani has continually won the World’s Leading Luxury Green Resort at the World’s Travel Awards, giving the resort five consecutive wins in 2024.
                    </p>

                    <p className="block-animate-up">
                        <a href="/#" className="cta-anchor link">
                            Discover More
                            <span className="cta-anchor-after"></span>
                        </a>
                    </p>
                </div>

                <div className="relative flex-1 w-full h-full">
                    <img
                        src="https://sani-prd-cdn.azureedge.net/media/t2shqkge/sani_wetlands_2_792x593.jpg?v=1db679823b44bf0&format=webp&quality=80&width=720&height=720"
                        alt="Sustainability Experience"
                        className="w-full h-96 md:h-[550px] lg:h-[650px] object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <video
                            src="https://sani-prd-cdn.azureedge.net/media/t4fhsj2w/birds.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-40 md:w-56 lg:w-64 h-40 md:h-56 lg:h-96 object-cover"
                        ></video>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SustainabilitySection;
