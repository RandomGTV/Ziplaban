import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBackground({ mousePosition = { x: 0, y: 0 } }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#032B82]">
      {/* Base Clean Environment Image (Sky, City, Trees, Flagship Storefront) */}
      <motion.div
        animate={{
          x: mousePosition.x * -6,
          y: mousePosition.y * -4,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 25 }}
        className="absolute inset-0 w-full h-full scale-105"
      >
        <img
          src="/images/hero_clean_bg.jpg"
          alt="Zip Laban Store Environment"
          className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.02]"
          loading="eager"
        />

        {/* Soft Vignette on Left for Text Readability without Dimming the Storefront */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#032B82]/60 via-[#032B82]/15 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021B52]/40 via-transparent to-[#073BB8]/15 pointer-events-none" />
      </motion.div>

      {/* Warm Ambient Storefront Glow on the Far Right */}
      <div className="absolute top-[20%] right-[10%] w-[380px] h-[380px] rounded-full bg-amber-400/10 blur-[90px] pointer-events-none" />

      {/* Cool Royal Blue Glow on the Left */}
      <div className="absolute top-[25%] left-[8%] w-[450px] h-[450px] rounded-full bg-[#175EFF]/15 blur-[100px] pointer-events-none" />
    </div>
  );
}
