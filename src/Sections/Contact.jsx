import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#f8f5f2]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#232946] font-['Playfair_Display']">Get In Touch</h2>
        <p className="text-lg text-center text-[#5f6c7b] mb-12 max-w-2xl mx-auto font-['Poppins']">
          Interested in working together or have a question? Feel free to reach out and I'll get back to you as soon as possible.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Contact Info */}
            <div className="bg-[#232946] text-white p-8 md:w-2/5">
              <h3 className="text-2xl font-bold mb-6 font-['Playfair_Display']">Contact Info</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-semibold mb-1 font-['Poppins']">Email</p>
                  <a href="mailto:kam@obai.app" className="hover:underline font-['Poppins'] text-[#b8c1ec]">
                    kam@obai.app
                  </a>
                </div>
                
                <div>
                  <p className="font-semibold mb-1 font-['Poppins']">Based in</p>
                  <p className="font-['Poppins'] text-[#b8c1ec]">United States</p>
                </div>
                
                <div className="pt-4">
                  <p className="font-semibold mb-3 font-['Poppins']">Connect</p>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/kameron-seabrook/" target="_blank" rel="noopener noreferrer" className="text-[#b8c1ec] hover:text-[#3da9fc] transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/kameronseabrook" target="_blank" rel="noopener noreferrer" className="text-[#b8c1ec] hover:text-[#3da9fc] transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="mailto:kam@obai.app" className="text-[#b8c1ec] hover:text-[#3da9fc] transition-colors">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Simple Contact Form */}
            <div className="p-8 md:w-3/5">
              <h3 className="text-2xl font-bold mb-6 text-[#232946] font-['Playfair_Display']">Send a Message</h3>
              
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-[#5f6c7b] font-medium mb-2 font-['Poppins']">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#232946] font-['Poppins']"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#5f6c7b] font-medium mb-2 font-['Poppins']">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#232946] font-['Poppins']"
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#5f6c7b] font-medium mb-2 font-['Poppins']">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#232946] font-['Poppins']"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-[#232946] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3da9fc] transition-colors font-['Poppins']"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;