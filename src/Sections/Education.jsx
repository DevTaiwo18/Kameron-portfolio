import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "BrainStation",
      degree: "Diploma, Software Engineering",
      period: "Jan 2024 - Apr 2024",
      description: "Tech-Bootcamp to create full-stack applications"
    },
    {
      institution: "Northern Kentucky University",
      degree: "Bachelor of Business Administration - BBA, Business, Management, Marketing, and Related Support Services",
      period: "2020 - 2021"
    },
    {
      institution: "Cincinnati Christian University",
      degree: "Business Administration, Marketing",
      period: "2019 - 2020",
      activities: "Activities and societies: Collegiate Athlete"
    },
    {
      institution: "Ohio Christian University",
      degree: "Bachelor of Business Administration - BBA, Business, Management, Marketing, and Related Support Services",
      period: "2016 - 2019",
      activities: "Activities and societies: Collegiate Athlete, Choir, MultiCultural Department"
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#232946] font-['Playfair_Display']">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-10 relative pl-8 border-l-2 border-[#094067]">
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-[#094067]"></div>
              
              {/* Education header */}
              <div className="mb-3">
                <h3 className="text-2xl font-semibold text-[#094067] font-['Playfair_Display']">{edu.institution}</h3>
                <div className="text-lg text-[#5f6c7b] font-['Poppins']">
                  <span className="font-medium">{edu.degree}</span>
                </div>
                <div className="text-sm text-[#5f6c7b] font-['Poppins'] mt-1">
                  <span>{edu.period}</span>
                </div>
                
                {/* Description */}
                {edu.description && (
                  <p className="text-[#5f6c7b] mt-2 font-['Poppins']">{edu.description}</p>
                )}
                
                {/* Activities */}
                {edu.activities && (
                  <p className="text-[#5f6c7b] mt-2 italic font-['Poppins']">{edu.activities}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;