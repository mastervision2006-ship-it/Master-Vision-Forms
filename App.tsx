import React, { useEffect } from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PowerOfInfo from './components/PowerOfInfo';
import CeoStory from './components/CeoStory';
import Opportunity from './components/Opportunity';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden selection:bg-brand-red selection:text-white">
      <Background />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <Stats />
        <PowerOfInfo />
        <CeoStory />
        <Opportunity />
        <FormSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;