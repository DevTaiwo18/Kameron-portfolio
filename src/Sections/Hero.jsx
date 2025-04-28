import React from 'react';
import Profile from "./../assets/kam.webp"

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#f8f5f2]">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        {/* Text content - will appear below the image on mobile */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#232946] font-['Playfair_Display']">Kameron Seabrook</h1>
          <h2 className="text-xl md:text-2xl text-[#094067] mb-6 font-['Poppins']">Co-Founder of Obai | Full-Stack Dev</h2>
          <p className="text-[#5f6c7b] mb-8 text-lg font-['Poppins']">
            Passionate about creating innovative solutions and developing impactful technology.
          </p>
          <a 
            href="#contact"
            className="bg-[#094067] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3da9fc] transition-colors inline-block font-['Poppins']"
          >
            Get in Touch
          </a>
        </div>
        
        {/* Image - will appear above the text on mobile */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-[#3da9fc] to-[#094067]">
            <img 
              src={Profile} 
              alt="Kameron Seabrook" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;