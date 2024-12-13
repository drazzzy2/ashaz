import React from 'react';
import { Container } from '../ui/Container';
import ServicesHeader from './ServicesHeader';
import ServicesGrid from './ServicesGrid';
import ServicesCTA from './ServicesCTA';

export default function ServicesSection() {
  return (
    <div className="relative bg-navy-900 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-navy-800/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      </div>
      
      <Container>
        <div className="relative">
          <ServicesHeader />
          <ServicesGrid />
          <ServicesCTA />
        </div>
      </Container>
    </div>
  );
}