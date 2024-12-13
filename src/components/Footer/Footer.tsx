import React from 'react';
import { Container } from '../ui/Container';
import FooterSocial from './components/FooterSocial';
import FooterAttribution from './components/FooterAttribution';

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-8">
      <Container>
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-pink-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative">
            <FooterSocial />
            <FooterAttribution />
          </div>
        </div>
      </Container>
    </footer>
  );
}