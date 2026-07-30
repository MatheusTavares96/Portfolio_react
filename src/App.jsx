import React from 'react';
import Header from './components/Header.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from './components/HeroSection.jsx';
import Education from './components/Education.jsx';
import Certificates from './components/Certificates.jsx';
import AboutSection from './components/AboutSection.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className='bg-[#111827] min-h-screen'>
      <Header />
      <HeroSection />
      <Education />
      <Certificates/>
      <AboutSection/>
      <Experience/>
      <Projects/>
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default App;
