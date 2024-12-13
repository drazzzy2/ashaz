import React from 'react';
import { Container } from '../ui/Container';
import TeamBackground from './TeamBackground';
import TeamHeader from './TeamHeader';
import TeamGrid from './TeamGrid';

export default function TeamSection() {
  return (
    <div className="relative bg-navy-900 py-32 overflow-hidden">
      <TeamBackground />
      <Container>
        <div className="relative">
          <TeamHeader />
          <TeamGrid />
        </div>
      </Container>
    </div>
  );
}