import React from "react";

function Footer() {
    return (
        <footer className="bg-[#010400] pt-12 pb-6">

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-6 gap-10">


                <div className="col-span-1">
                    <img src="/logo.svg" alt="Logo" className="w-32" />
                </div>


                <div>
                    <h4 className="text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li><a className="text-gray-400 hover:text-white transition" href="#">Book Hotel</a></li>
                        <li><a className="text-gray-400 hover:text-white transition" href="#">Careers</a></li>
                        <li><a className="text-gray-400 hover:text-white transition" href="#">Covid-19</a></li>
                        <li><a className="text-gray-400 hover:text-white transition" href="#">Sustainability</a></li>
                        <li><a className="text-gray-400 hover:text-white transition" href="#">News</a></li>
                        <li><a className="text-gray-400 hover:text-white transition" href="#">Awards</a></li>
                        <li><a className="text-gray-400 hover:text-white transition" href="#">Weddings</a></li>
                    </ul>
                </div>


                <div>
                    <h4 className="text-white mb-4">Connect</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li><a className="text-gray-400 hover:text-white transition" href="#">Our Sani App</a></li>
                        <li><a className="text-gray-400 hover:text-white transition" href="#">Sani Rewards</a></li>
                        <li><a className="text-gray-400 hover:text-white transition" href="#">Contact Us</a></li>
                        <li><a className="text-gray-400 hover:text-white transition" href="#">Location</a></li>
                    </ul>
                </div>


                <div>
                    <h4 className="mb-4 text-white">Get In Touch</h4>
                    <ul className="space-y-2 text-gray-700 mb-4">
                        <li>
                            <a className="text-gray-400 hover:text-white transition" href="mailto:infosani@saniresort.gr">
                                infosani@saniresort.gr
                            </a>
                        </li>
                        <li>
                            <a className="text-gray-400 hover:text-white transition" href="tel:08009496809">0800 949 6809</a>
                        </li>
                    </ul>


                    <div className="flex items-center gap-4">
                        <img src="/images/Instagram.png" className="w-5" alt="Instagram" />
                        <img src="/images/Facebook.png" className="w-5" alt="Facebook" />
                        <img src="/images/TikTok.png" className="w-5" alt="TikTok" />
                        <img src="/images/Youtube.png" className="w-5" alt="YouTube" />
                    </div>
                </div>


                <div></div>


                <div></div>
            </div>


            <div className="max-w-full mx-auto px-6 mt-10">

                <div className="border-t border-gray-300 mb-6"></div>


                <ul className="flex flex-wrap items-center justify-evenly gap-6 text-sm text-gray-600">
                    <li><a className="text-gray-400 hover:text-white transition" href="#">Disclaimer</a></li>
                    <li><a className="text-gray-400 hover:text-white transition" href="#">Accessibility</a></li>
                    <li><a className="text-gray-400 hover:text-white transition" href="#">Privacy Policy</a></li>
                    <li><a className="text-gray-400 hover:text-white transition" href="#">UGC & Image Policy</a></li>
                    <li><a className="text-gray-400 hover:text-white transition" href="#">Corporate Governance</a></li>
                    <li><a className="text-gray-400 hover:text-white transition" href="#">Cookies Policy</a></li>
                    <li><a className="text-gray-400 hover:text-white transition" href="#">Terms & Conditions</a></li>
                    <li><a className="text-gray-400 hover:text-white transition" href="#">Manage Cookies</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
