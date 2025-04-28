import React from 'react';
import ProfileImg from './../assets/kam p3.jpg';

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
                  height: '540px',
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
                I bring a unique perspective as a CEO who became a full-stack engineer. This journey has equipped me with the ability to combine business strategy and technical expertise in every team I lead.
              </p>
            </div>
            
            <div className="border-l-4 border-[#094067] pl-4">
              <h3 className="text-2xl font-semibold text-[#094067] mb-2 font-['Playfair_Display']">Diverse Skill Set</h3>
              <p className="text-lg text-[#5f6c7b] font-['Poppins']">
                As a founder, becoming ambidextrous in skill was essential. Beyond my core strengths in team leadership and coding, I've developed proficiency in marketing, design, sales, finance, operations, and even music—a versatility that has led to winning business competitions, generating over 1M Spotify streams, and raising $400,000 in Pre-Seed funding for <span className="font-semibold text-[#094067]">Obai</span>.
              </p>
            </div>
            
            <div className="border-l-4 border-[#094067] pl-4">
              <h3 className="text-2xl font-semibold text-[#094067] mb-2 font-['Playfair_Display']">Mission and Impact</h3>
              <p className="text-lg text-[#5f6c7b] font-['Poppins']">
                Through all my endeavors, I'm passionate about helping others and being a vessel of knowledge, light, and purpose. For every person or team I work with, I take it as a personal mission to leave an impact that results in empowerment, knowledge acquisition, and optimism. At Obai, we're revolutionizing property damage assessment with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;