import React from "react";
import Effra from '../fonts/Effra Medium/Effra Medium.ttf';

function Navbar() {
    return (
        <header className="w-full "style={{fontFamily:'Effra Medium'}}>
            {/* 🔶 Top Strip */}
            <div className="w-full bg-[#30332E] text-white text-sm py-2 px-4 flex justify-between items-center">
                <span className="uppercase">
                    Lock in Summer 2026 with an Extra 5% Off – Offer Ends December 1st
                </span>
                <span>CALL 0800 949 6809</span>
            </div>

            {/* 🔷 Main Navbar */}
            <nav className="w-full bg-white border-b border-gray-200">
                <div className="mx-auto h-24">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center ms-7">
                            <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-6 items-center">
                            {/* Nav Items */}
                            {[
                                "The Resort",
                                "Hotels",
                                "Families",
                                "Gastronomy",
                                "Experiences",
                                "Spas & Wellness",
                                "VIP",
                                "Offers",
                                "The Marina",
                                "Gallery",
                            ].map((item) => (
                                <div key={item} className="relative group">
                                    <button className="text-[#868785] hover:text-black transition">
                                        {item}
                                    </button>

                                    {/* Dropdown */}
                                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 p-4 w-40">
                                        <p className="text-sm text-gray-600">Dropdown content here</p>
                                    </div>
                                </div>
                            ))}


                        </div>
                            <div className="flex items-center justify-between space-x-6">
                                {/* Language Dropdown */}
                            <div className="relative group">
                                <button className="text-[#868785] hover:text-black transition">
                                    EN ▾
                                </button>
                                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 p-4 w-32">
                                    <p className="text-sm hover:text-black cursor-pointer">EN</p>
                                    <p className="text-sm hover:text-black cursor-pointer">DE</p>
                                    <p className="text-sm hover:text-black cursor-pointer">FR</p>
                                </div>
                            </div>
                            {/* Book Now Button */}
                            <div className="h-24 w-32 bg-[#AD986E] flex items-center justify-center">
                                <button className=" text-white px-4  transition">Book Now</button>
                            </div>
                            </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 focus:outline-none">☰</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
