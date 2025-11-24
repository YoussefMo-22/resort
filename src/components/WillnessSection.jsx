import React, { useRef, useState, useEffect } from "react";
import AnimateByLetters from "../utils/AnimateByLetters";

function WillnessSection() {
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
            className="relative w-full bg-[#F4F4F4] px-6 md:px-20 lg:px-32 py-16"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                <div className="relative flex-1 w-full">
                    <img
                        src="https://sani-prd-cdn.azureedge.net/media/h15neh1i/a003c0302_241030_xyed03square.jpg?v=1db679aadc624b0&format=webp&quality=80&width=720&height=720"
                        alt="Wellness Experience"
                        className="w-full h-96 md:h-[550px] lg:h-[650px] object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <video
                            src="https://sani-prd-cdn.azureedge.net/media/w1mcgpml/fit.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-40 md:w-56 lg:w-64 h-40 md:h-56 lg:h-96 object-cover"
                        ></video>
                    </div>
                </div>

                <div className="flex-1 w-full flex flex-col justify-center space-y-6">
                    <h2 className="text-xl md:text-2xl tracking-wide uppercase text-gray-500">
                        Wellness
                    </h2>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-gray-900">
                        <AnimateByLetters text="A SANCTUARY FOR THE SOUL" inView={inView} />
                    </h3>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        Sani Resort is a place offering countless nature-based experiences.
                        Explore a variety of options, including fitness, sports, and outdoor
                        adventures. Choose from yoga, Pilates, spa treatments, meditation,
                        forest walks, and a host of other activities. It's the perfect way
                        to nurture both body and mind.
                    </p>

                    <p className="block-animate-up">
                        <a href="/#" className="cta-anchor link">
                            Explore Activities
                            <span className="cta-anchor-after"></span>
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default WillnessSection;
