import React from 'react'
import about from '../assets/about.png'

const AboutSection = () => {
  return (
   
      <section className='text-white mt-16 relative overflow-hidden' id='about'>
        <div className='max-w-7xl mx-auto px-4 md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10'>
          <div data-aos='fade-right'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6'>
              More <span className='text-primary'>About</span> Me
            </h2>
            <p className='text-gray-300 text-base lg:text-lg mb-10 leading-relaxed'> 

I'm passionate about technology and enjoy learning how systems work behind the scenes. My journey started with frontend development, where I learned HTML, CSS, JavaScript, and React, but over time I discovered a strong interest in IT infrastructure, technical support, cloud technologies, and cybersecurity.

 <br /><br /> I enjoy troubleshooting problems, helping users, and continuously expanding my technical knowledge. I'm currently building projects to strengthen my skills while pursuing opportunities in IT Support and preparing for a future career in Cybersecurity.

Outside of coding and technology, I enjoy challenging myself with new concepts and always strive to improve both personally and professionally
            </p>
            <div className='grid grid-cols-3 gap-6 max-w-xl'>
              <div className='text-center rounded-2xl bg-slate-900 border border-gray-700 p-5 transition-all duration-300 hover:border-primary/50'>
                <h3 className='text-primary font-bold text-2xl md:text-3xl'>+600</h3>
                <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>Clients</p>
              </div>

              <div className='text-center rounded-2xl bg-slate-900 border border-gray-700 p-5 transition-all duration-300 hover:border-primary/50'>
                <h3 className='text-primary font-bold text-2xl md:text-3xl'>+20</h3>
                <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>Projects</p>
              </div>

              <div className='text-center rounded-2xl bg-slate-900 border border-gray-700 p-5 transition-all duration-300 hover:border-primary/50'>
                <h3 className='text-primary font-bold text-2xl md:text-3xl'>+3</h3>
                <p className='text-xs text-gray-400 uppercase tracking-wider mt-0.5'>Years</p>
              </div>
            </div>
          </div>
            <div className='mt-16 md:mt-0 flex justify-center lg:justify-end relative' data-aos='fade-left'>
              <div className='relative w-64 h-64 md:w-96 md:h-120'>
                <div className='absolute inset-0 z-0 rounded-full shadow-lg border border-primary translate-x-4 translate-y-4'>
                </div>
                <div className='relative z-10 w-full bg-slate-900 rounded-full overflow-hidden border border-gray-700'>
                <img src={about} alt="About"
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' />
                </div>
              </div>
          </div>
        </div> 
      </section>


  );
};

export default AboutSection;