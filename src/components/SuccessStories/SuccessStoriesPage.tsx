import React from 'react';
import { Container } from '../ui/Container';
import SuccessStoriesHeader from './components/SuccessStoriesHeader';
import SuccessStoriesGrid from './components/SuccessStoriesGrid';
import SuccessStoriesCTA from './components/SuccessStoriesCTA';
import SuccessStoriesBackground from './components/SuccessStoriesBackground';

export default function SuccessStoriesPage() {
  return (
    <div className="relative min-h-screen bg-navy-900 pt-24 pb-32 overflow-hidden">
      <SuccessStoriesBackground />
      <Container>
        <div className="relative">
          <SuccessStoriesHeader />
          <SuccessStoriesGrid />
          <SuccessStoriesCTA />
        </div>
      </Container>
    </div>
  );
}