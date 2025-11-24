import React, { useEffect, useState } from "react";
import Effra from "../fonts/Effra Medium/Effra Medium.ttf";
import { navItems } from "../data/NavData.jsx";
import { ChevronRight, ChevronLeft, Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
                setActiveMenu(null);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="w-full uppercase" style={{ fontFamily: Effra }}>
            <div className="w-full bg-[#30332E] text-white text-sm py-2 px-4 flex justify-between items-center">
                <span>Lock in Summer 2026 with an Extra 5% Off – Offer Ends December 1st</span>
                <span>CALL 0800 949 6809</span>
            </div>

            <nav className="w-full bg-white border-b border-gray-200">
                <div className="mx-auto h-24">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center ms-7">
                            <img src="/logo.svg" alt="Logo" className="h-9 w-auto" />
                        </div>

                        <div className="hidden md:flex space-x-6 items-center">
                            {navItems.map((nav) => (
                                <div key={nav.title} className="group">
                                    <button className="text-[#868785] hover:text-black transition">
                                        {nav.title}
                                    </button>

                                    {nav.menu && (
                                        <div className="absolute left-0 w-full hidden group-hover:flex bg-white shadow-lg p-10 gap-12 z-50">
                                            <div className="flex flex-col space-y-2 w-3/5">
                                                {nav.menu.map((item) => (
                                                    <a key={item} href="#" className="text-sm text-[#868785] hover:text-black">
                                                        {item}
                                                    </a>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-1 gap-6 w-2/5">
                                                {nav.content?.map((card) => (
                                                    <div key={card.label} className="cursor-pointer space-x-4 flex items-center justify-start">
                                                        <img
                                                            src={card.img}
                                                            className="rounded-md w-28 h-28 object-cover"
                                                        />
                                                        <div className="flex flex-col items-start justify-center">
                                                            <p className="font-medium mt-2 text-sm">{card.label}</p>
                                                            <p className="text-xs text-gray-500">{card.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center justify-between space-x-6">
                            <div className="relative group">
                                <button className="text-[#868785] flex hover:text-black">EN <ChevronDown className="hover:rotate-180 transition" /></button>
                                <div className="absolute hidden group-hover:block z-50 bg-white shadow-lg rounded-md p-4 w-32">
                                    <p className="text-sm cursor-pointer">EN</p>
                                    <p className="text-sm cursor-pointer">DE</p>
                                    <p className="text-sm cursor-pointer">FR</p>
                                </div>
                            </div>

                            <motion.div
                                initial={{ x: 80, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: "false", stiffness: 80, damping: 12, delay: 0.3 }}
                                className="h-24 w-32 bg-[#AD986E] flex items-center justify-center"
                            >
                                <button className="text-white px-4 transition">Book Now</button>
                            </motion.div>

                        </div>

                        <div className="md:hidden mr-6 z-[9999]">
                            <button
                                onClick={() => {
                                    setActiveMenu(null);
                                    setMobileOpen(!mobileOpen);
                                }}
                                className="transition-all duration-300"
                            >
                                {mobileOpen ? (
                                    <X className="w-8 h-8 transition-transform duration-300 rotate-90 opacity-100" />
                                ) : (
                                    <Menu className="w-8 h-8 transition-transform duration-300 rotate-0 opacity-100" />
                                )}
                            </button>
                        </div>

                    </div>
                </div>

                <div
                    className={`fixed top-20 right-0 w-80 h-full bg-white shadow-xl z-[9998] transform transition-transform duration-300
                    ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="h-full relative overflow-hidden">

                        <div
                            className={`absolute top-0 right-0 w-full h-full p-6 transition-transform duration-300
                            ${activeMenu ? "translate-x-full" : "translate-x-0"}`}
                        >
                            {navItems.map((nav) => (
                                <div
                                    key={nav.title}
                                    className="flex justify-between items-center py-4 border-b border-gray-200 cursor-pointer"
                                    onClick={() => nav.menu && setActiveMenu(nav)}
                                >
                                    <span className="text-[#30332E] text-lg">{nav.title}</span>
                                    {nav.menu && (
                                        <ChevronRight
                                            className={`w-5 h-5 text-gray-600 transition-transform duration-300
                                                    ${activeMenu?.title === nav.title ? "rotate-90" : "rotate-0"}`}
                                        />
                                    )}

                                </div>
                            ))}
                        </div>

                        {activeMenu && (
                            <div
                                className={`absolute top-0 right-0 w-full h-full p-6 transition-transform duration-300
                                ${activeMenu ? "translate-x-0" : "translate-x-full"}`}
                            >
                                <div
                                    className="flex items-center space-x-2 mb-6 cursor-pointer"
                                    onClick={() => setActiveMenu(null)}
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    <span className="text-md text-[#30332E]">Back</span>
                                </div>

                                {activeMenu.menu.map((item) => (
                                    <p key={item} className="py-3 text-lg border-b border-gray-200 text-[#30332E]">
                                        {item}
                                    </p>
                                ))}

                                {activeMenu.content && (
                                    <div className="mt-6 grid grid-cols-1 gap-4">
                                        {activeMenu.content.map((card) => (
                                            <div key={card.label} className="flex items-center space-x-4">
                                                <img
                                                    src={card.img}
                                                    className="w-20 h-20 rounded-md object-cover"
                                                />
                                                <div>
                                                    <p className="font-medium">{card.label}</p>
                                                    <p className="text-xs text-gray-500">{card.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
