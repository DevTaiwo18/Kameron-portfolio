import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Co-founder & CEO",
      company: "Obai",
      type: "Self-employed",
      period: "Jul 2023 - Present",
      duration: "1 yr 10 mos",
      location: "United States · Remote",
    },
    {
      title: "Independent Claims Adjuster",
      company: "Open Bay Autos LLC",
      type: "Contract",
      period: "Jun 2022 - Present",
      duration: "2 yrs 11 mos",
      location: "Ohio, United States · Hybrid",
    },
    {
      title: "Founder",
      company: "Open Bay Autos",
      type: "Full-time",
      period: "Aug 2021 - Jan 2024",
      duration: "2 yrs 6 mos",
      location: "Ohio, United States",
    },
    {
      title: "Founder & CEO",
      company: "The Real Ones",
      type: "Self-employed",
      period: "Jan 2020 - Jan 2024",
      duration: "4 yrs 1 mo",
      location: "Dayton, Ohio, United States",
    },
    {
      title: "Social Media Marketing Intern",
      company: "Wernle Youth & Family Treatment Center",
      type: "Part-time",
      period: "Feb 2020 - Aug 2020",
      duration: "7 mos",
      location: "Richmond, Indiana, United States",
    },
    {
      title: "Project Management Intern",
      company: "Catapult Creative",
      type: "Part-time",
      period: "May 2019 - Aug 2019",
      duration: "4 mos",
      location: "Dayton, Ohio, United States",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-[#f8f5f2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#232946] font-['Playfair_Display']">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 relative pl-8 border-l-2 border-[#094067]">
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-[#094067]"></div>
              
              {/* Job header */}
              <div className="mb-3">
                <h3 className="text-2xl font-semibold text-[#094067] font-['Playfair_Display']">{exp.title}</h3>
                <div className="flex flex-wrap items-center text-lg text-[#5f6c7b] font-['Poppins']">
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-2 text-sm">·</span>
                  <span>{exp.type}</span>
                </div>
                <div className="text-sm text-[#5f6c7b] font-['Poppins'] mt-1">
                  <span>{exp.period}</span>
                  <span className="mx-2">·</span>
                  <span>{exp.duration}</span>
                </div>
                <div className="text-sm italic text-[#5f6c7b] font-['Poppins']">
                  {exp.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;