'use client'

// This file registers your components for use in Plasmic
// Import it in your main layout or wherever you want to use Plasmic

import { PLASMIC } from '@/plasmic-init';

// Import your existing components
import HeroSection from '@/components/HeroSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import AboutModal from '@/components/AboutModal';

// Register components for Plasmic
export function registerPlasmicComponents() {
  // Only register if we're in the right environment
  if (typeof window !== 'undefined' || process.env.NODE_ENV === 'development') {
    PLASMIC.registerComponent(HeroSection, { 
      name: 'HeroSection',
      isCode: true 
    });

    PLASMIC.registerComponent(ProcessSection, { 
      name: 'ProcessSection',
      isCode: true 
    });

    PLASMIC.registerComponent(TestimonialsSection, { 
      name: 'TestimonialsSection',
      isCode: true 
    });

    PLASMIC.registerComponent(Header, { 
      name: 'Header',
      isCode: true 
    });

    PLASMIC.registerComponent(Footer, { 
      name: 'Footer',
      isCode: true 
    });

    PLASMIC.registerComponent(BookingModal, { 
      name: 'BookingModal',
      isCode: true 
    });

    PLASMIC.registerComponent(AboutModal, { 
      name: 'AboutModal',
      isCode: true 
    });
  }
}

// Auto-register when this module is imported
registerPlasmicComponents(); 