import React, { useRef, useState, useEffect } from "react";
import { newsData } from "../data/NewsData";
import AnimateByLetters from "../utils/AnimateByLetters";

function NewsSection() {
    const scrollRef = useRef(null);
    const cursorRef = useRef(null);
    const titleRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [titleInView, setTitleInView] = useState(false);

    let startX = 0;
    let scrollLeft = 0;
    let velocity = 0;
    let lastPageX = 0;
    let momentumID = null;

    const momentumScroll = () => {
        if (Math.abs(velocity) < 0.1) return;
        scrollRef.current.scrollLeft -= velocity;
        velocity *= 0.95;
        momentumID = requestAnimationFrame(momentumScroll);
    };

    const handleMouseMove = (e) => {
        if (cursorRef.current) {
            cursorRef.current.style.left = `${e.clientX}px`;
            cursorRef.current.style.top = `${e.clientY}px`;
        }

        if (!isDragging) return;

        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;

        velocity = e.pageX - lastPageX;
        lastPageX = e.pageX;
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
        lastPageX = e.pageX;

        scrollRef.current.classList.add("cursor-grabbing");
        cancelAnimationFrame(momentumID);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        scrollRef.current.classList.remove("cursor-grabbing");
        momentumScroll();
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        scrollRef.current.classList.remove("cursor-grabbing");
        momentumScroll();
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTitleInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (titleRef.current) observer.observe(titleRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            onMouseMove={handleMouseMove}
            className="relative py-20 px-6 md:px-20 lg:px-32 bg-white"
        >
            <div
                ref={cursorRef}
                className={`fixed z-50 pointer-events-none transition-all duration-150 
            ${isDragging ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            >
                <div className="w-24 h-24 rounded-full bg-white bg-opacity-10 border border-black text-black flex items-center justify-center text-md font-semibold">
                    Drag
                </div>
            </div>

            <div className="mb-10 flex items-center justify-between">
                <h2 ref={titleRef} className="text-4xl font-semibold">
                    <AnimateByLetters text="News" inView={titleInView} />
                </h2>
                <div className="flex flex-col">
                    <p className="text-gray-600 max-w-xl">
                        Stay informed of Sani Resort’s latest initiatives and accomplishments.
                    </p>
                    <p className="block-animate-up text-black font-semibold">
                        <a href="/#" className="cta-anchor link">
                            All News<span className="cta-anchor-after"></span>
                        </a>
                    </p>
                </div>
            </div>

            <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                className="flex gap-6 overflow-x-scroll scrollbar-hide cursor-grab select-none"
            >
                {newsData.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[330px] rounded-lg shadow-lg bg-white overflow-hidden"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-[430px] object-cover"
                        />
                        <div className="p-4">
                            <p className="text-xs text-gray-500 mb-1">{item.type}</p>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                            <p className="block-animate-up">
                                <a href="/#" className="cta-anchor link">
                                    Discover More<span className="cta-anchor-after"></span>
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsSection;
