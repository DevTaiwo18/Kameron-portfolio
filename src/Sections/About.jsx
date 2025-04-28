import React from 'react';
import ProfileImg from './../assets/kams.png';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#232946] font-['Playfair_Display']">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="md:w-2/5 lg:w-2/5 flex items-center">
            <div className="overflow-hidden rounded-lg shadow-xl w-full">
              <img 
                src={ProfileImg} 
                alt="Kameron Seabrook" 
                className="w-full object-cover"
                style={{ 
                  height: '450px',
                  objectPosition: '50% 15%' 
                }}
              />
            </div>
          </div>
          
          {/* Text Column */}
          <div className="md:w-3/5 lg:w-3/5 space-y-6 self-center">
            <div className="border-l-4 border-[#094067] pl-4">
              <h3 className="text-2xl font-semibold text-[#094067] mb-2 font-['Playfair_Display']">From Business Leader to Developer</h3>
              <p className="text-lg text-[#5f6c7b] font-['Poppins']">
                I bring a unique perspective as a CEO who transitioned into full-stack development, combining business strategy with technical expertise.
              </p>
            </div>
            
            <div className="border-l-4 border-[#094067] pl-4">
              <h3 className="text-2xl font-semibold text-[#094067] mb-2 font-['Playfair_Display']">Entrepreneurial Journey</h3>
              <p className="text-lg text-[#5f6c7b] font-['Poppins']">
                After successfully leading a subscription-based auto-care business, I identified a critical gap in insurance claims processing, which inspired me to found <span className="font-semibold text-[#094067]">Obai</span>.
              </p>
            </div>
            
            <div className="border-l-4 border-[#094067] pl-4">
              <h3 className="text-2xl font-semibold text-[#094067] mb-2 font-['Playfair_Display']">Innovative Solutions</h3>
              <p className="text-lg text-[#5f6c7b] font-['Poppins']">
                Obai leverages cutting-edge technology to detect and estimate property damage—revolutionizing how we assess storm impacts. Facing technical challenges as a founder motivated me to master coding and build solutions myself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;