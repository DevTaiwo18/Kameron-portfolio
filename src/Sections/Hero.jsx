import React from 'react';
import Profile from "./../assets/kam p1.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#f8f5f2] to-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#3da9fc] opacity-5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#094067] opacity-5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Text content - on the left for desktop */}
          <div className="lg:w-7/12 max-w-2xl">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-[#232946] font-['Playfair_Display'] mb-2">
                  Kameron Seabrook
                </h1>
                <h2 className="text-xl md:text-2xl text-[#094067] font-['Poppins'] tracking-wide">
                  Co-Founder of Obai | Full-Stack Dev
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-[#5f6c7b] text-lg font-['Poppins'] leading-relaxed">
                  I bring a unique perspective as a CEO who became a full-stack engineer. I combine business strategy & technical expertise to any team I lead.
                </p>
                
                <p className="text-[#5f6c7b] text-lg font-['Poppins'] leading-relaxed">
                  As a founder, it was essential for me to become ambidextrous in skill. This means, although team leadership & coding are my specificities, I am proficient in marketing, design, sales, finance, operations, and even music.
                </p>
                
                <p className="text-[#5f6c7b] text-lg font-['Poppins'] leading-relaxed">
                  Through it all however, I love to help others and be a vessel of knowledge, light and purpose in this world.
                </p>
              </div>
              
              <div className="pt-4">
                <a 
                  href="#contact"
                  className="bg-[#094067] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#3da9fc] transition-colors duration-300 inline-block font-['Poppins'] shadow-md"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          
          {/* Image section - on the right for desktop */}
          <div className="lg:w-5/12 relative">
            <div className="relative z-10 flex justify-center lg:justify-end">
              {/* Decorative elements */}
              <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#094067] opacity-10 -top-8 -left-8"></div>
              <div className="absolute -z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#3da9fc] opacity-15 -bottom-6 -right-6"></div>
              
              {/* Main profile image */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#094067] shadow-2xl">
                <img 
                  src={Profile} 
                  alt="Kameron Seabrook" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;