
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TemplateLibrary from '../components/TemplateLibrary';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <TemplateLibrary />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
