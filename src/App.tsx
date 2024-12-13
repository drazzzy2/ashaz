import React from 'react';
import Hero from './components/Hero/Hero';
import StatsSection from './components/Stats/StatsSection';
import ServicesSection from './components/Services/ServicesSection';
import TeamSection from './components/Team/TeamSection';
import DemoCallSection from './components/DemoCall/DemoCallSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import SuccessStoriesLayout from './components/SuccessStories/layout/SuccessStoriesLayout';
import { SuccessStoriesProvider } from './contexts/SuccessStoriesContext';
import { useSuccessStories } from './contexts/SuccessStoriesContext';
import BackButton from './components/navigation/BackButton';

function AppContent() {
  const { showSuccessStories, hideSuccessStories } = useSuccessStories();

  if (showSuccessStories) {
    return (
      <div className="min-h-screen bg-navy-900">
        <SuccessStoriesLayout />
        <BackButton onClick={hideSuccessStories} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900">
      <Hero />
      <StatsSection />
      <ServicesSection />
      <TeamSection />
      <DemoCallSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <SuccessStoriesProvider>
      <AppContent />
    </SuccessStoriesProvider>
  );
}

export default App;