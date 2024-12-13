import React from 'react';
import { Container } from '../ui/Container';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroHeading from './HeroHeading';
import HeroStats from './HeroStats';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-navy-900 overflow-hidden">
      <HeroBackground />
      <div className="relative pt-20 pb-16 sm:pt-32 sm:pb-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <HeroHeading />
            <HeroContent />
            <HeroStats />
          </div>
        </Container>
      </div>
    </div>
  );
}