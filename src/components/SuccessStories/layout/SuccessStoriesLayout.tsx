import React from 'react';
import { Container } from '../../ui/Container';
import SuccessStoriesBackground from './SuccessStoriesBackground';
import SuccessStoriesHeader from '../sections/SuccessStoriesHeader';
import SuccessStoriesGrid from '../sections/SuccessStoriesGrid';
import SuccessStoriesCTA from '../sections/SuccessStoriesCTA';

export default function SuccessStoriesLayout() {
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