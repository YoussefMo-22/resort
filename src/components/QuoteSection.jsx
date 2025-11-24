// components/QuoteSection.js
import React from "react";
import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="w-full bg-[#f7f5f0] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-12">

        <div className="flex-1 relative">
          <span className="absolute -top-32 -left-20 text-[200px] text-[#AD986E] opacity-10 font-serif select-none">
            “
          </span>

          <motion.blockquote
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 space-y-6 relative z-10"
          >
            <p>
              With me, you'll experience moments straight out of a dream. Can you hear them?
              The whispers of Greek philosophers echoing through this ancient forest. Stories
              from people around the world come alive on this endless beach. Here, the sea and sky
              unite to frame the most mythical mountain of all - Mount Olympus. And the entire
              Aegean unfolds its flavours before you. No, I'm not a dream. I am Sani - a sanctuary
              full of stories and experiences.
            </p>
          </motion.blockquote>
          <span className="absolute -bottom-20 rotate-180 -right-8 text-[200px] text-[#AD986E] opacity-10 font-serif select-none">
            “
          </span>
        </div>

        <div className="flex-1">
          <img
            src="https://sani-prd-cdn.azureedge.net/media/rqlomrfe/sani-resort-_-aerial-1-copy.jpg?rxy=0.4423558897243108,0.5225491309780756&v=1db682da4621530&format=jpg&quality=80&width=560&height=420"
            alt="Aerial shot of beach at Posidi"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;