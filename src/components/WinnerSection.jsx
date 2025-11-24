import React from "react";

function WinnerSection() {
  return (
    <section className="w-full bg-[#EAE5DB] py-12 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        <div className="flex justify-center">
          <img
            src="https://sani-prd-cdn.azureedge.net/media/y20b1k41/worlds-leading-family-beach-resort-2024-winner-shield-black-256.png?v=1dbca31e9a75ef0"
            alt="Award Shield"
            className="w-28 md:w-36 lg:w-40 object-contain"
          />
        </div>

        <div className="lg:col-span-1 flex flex-col justify-center space-y-4 lg:w-full">
          <h2 className="text-xl font-semibold text-gray-600 uppercase tracking-wide">
            Winners 2024
          </h2>

          <h3 className="text-2xl leading-tight font-serif text-gray-900">
            World’s Leading Family & Beach Resort
          </h3>

          <p className="text-gray-700 text-base leading-relaxed">
            Named the World’s Leading Family & Beach Resort for the sixth consecutive year, 
            Sani celebrates success at the prestigious World Travel Awards.
          </p>
        </div>

        <div className="flex lg:justify-end">
          <p className="block-animate-up">
            <a href="/#" className="cta-anchor link">
              Discover More<span className="cta-anchor-after"></span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

export default WinnerSection;
