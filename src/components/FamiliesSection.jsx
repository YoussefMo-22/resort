import React, { useRef, useState, useEffect } from "react";
import AnimateByLetters from "../utils/AnimateByLetters";

function FamiliesSection() {
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
            className="relative w-full py-16 px-6 md:px-20 lg:px-32 bg-white"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                <div className="flex-1 w-full flex flex-col justify-center space-y-6">
                    <h2 className="text-xl md:text-2xl tracking-wide uppercase text-gray-600">
                        Families
                    </h2>


                    <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-serif text-gray-900">
                        <AnimateByLetters text="CREATING STORIES" inView={inView} />
                    </h3>

                    <p className="text-base md:text-lg leading-relaxed text-gray-700">
                        Family time. It’s precious. The moments we spend together, and those we
                        spend comfortably apart. That’s why at Sani we offer uncompromising
                        experiences for all ages, where children and adults can come together as
                        one. Or find the private moments we all need from time-to-time.
                    </p>


                    <p className="block-animate-up">
                        <a href="/#" className="cta-anchor link">
                            Explore Families Experiences
                            <span className="cta-anchor-after"></span>
                        </a>
                    </p>
                </div>


                <div className="flex-1 w-full relative">
                    <img
                        src="https://sani-prd-cdn.azureedge.net/media/4rrppfwf/_dsc7191.jpg?v=1db67983c3185d0&format=webp&quality=80&width=685&height=400"
                        alt="Family Experiences"
                        className="w-full h-64 md:h-80 lg:h-96 object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default FamiliesSection;
