import { ArrowRight, Map } from 'lucide-react';
import React from 'react';

function ResortMap() {
  return (
    <div className="relative group flex items-center justify-center py-8 bg-[#30332E] text-white cursor-pointer w-full h-24 overflow-hidden">

      <div className="flex items-center justify-center gap-2 transition-all duration-200 ease-in-out group-hover:opacity-0">
        <Map className="w-8 h-8" />
        <span className="text-white text-3xl font-serif">Resort Map</span>
        <ArrowRight className="w-8 h-8" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
        <Map className="w-8 h-8 transform -translate-x-8 group-hover:translate-x-0 transition-transform duration-500 ease-out" />
        <ArrowRight className="w-8 h-8 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      </div>

    </div>
  );
}

export default ResortMap;
