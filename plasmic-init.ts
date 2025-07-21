import { initPlasmicLoader } from '@plasmicapp/loader-nextjs';
import * as React from 'react';

// Import your components (debug with console.log)
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AboutModal from './components/AboutModal';
import ModalManager from './components/ModalManager';
import CTAButton from './components/CTAButton';

// Debug: Log that components are imported
console.log('=== PLASMIC INIT DEBUG ===');
console.log('HeroSection imported:', !!HeroSection);
console.log('ProcessSection imported:', !!ProcessSection);
console.log('TestimonialsSection imported:', !!TestimonialsSection);

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: '5DifLAavefmKnBGRQAQW5E',
      token: 'EEb0zElX2ACpZBgKmQOljA6kyBLJr16r0HDijxDdz38gvKMKqGxCBuLAWKj6Jd7QMtqNCDYmiEuO8mLO0tXXw',
    },
  ],
  preview: true, // Keep true for client editing in production
});

// Register your landing page components with proper metadata according to official docs
console.log('Starting component registration...');

try {
  PLASMIC.registerComponent(HeroSection, {
    name: 'HeroSection',
    props: {
      // Content props - all editable in Plasmic
      mainHeading: {
        type: 'string',
        defaultValue: 'What if I told you that you could'
      },
      highlightText1: {
        type: 'string',
        defaultValue: 'live anywhere in the world'
      },
      highlightText2: {
        type: 'string',
        defaultValue: 'pay 0% tax'
      },
      subHeading: {
        type: 'string',
        defaultValue: "Don't miss this exclusive offer. Avail the opportunity to live anywhere in the world."
      },
      originalPrice: {
        type: 'string',
        defaultValue: '$11,980'
      },
      currentPrice: {
        type: 'string',
        defaultValue: '$9,800'
      },
      buttonText: {
        type: 'string',
        defaultValue: 'Get Started Today - Save $2,180'
      },
      socialProofText: {
        type: 'string',
        defaultValue: 'Join 7,000+ online coaches and business owners'
      },
      backgroundImage: {
        type: 'string',
        defaultValue: '/dubai-beach.jpg'
      },
      // Layout props for flexible sizing
      minHeight: {
        type: 'string',
        defaultValue: '600px'
      },
      paddingTop: {
        type: 'string',
        defaultValue: '8rem'
      },
      paddingBottom: {
        type: 'string',
        defaultValue: '4rem'
      },
      // Event handlers
      onGetStartedClick: {
        type: 'eventHandler',
        argTypes: []
      },
      // Style props
      className: 'string'
    },
    defaultStyles: {
      width: '100%'
    }
  });
  console.log('✅ HeroSection registered with full editing capabilities');
} catch (error) {
  console.error('❌ Error registering HeroSection:', error);
}

try {
  PLASMIC.registerComponent(ProcessSection, {
    name: 'ProcessSection',
    props: {
      // Content props - all editable in Plasmic
      sectionTitle: {
        type: 'string',
        defaultValue: 'What do I Need to Do?'
      },
      sectionSubtitle: {
        type: 'string',
        defaultValue: 'Our streamlined 9-step process makes it simple to set up your global business presence. We handle the complexity, you focus on growing your business.'
      },
      ctaHeading: {
        type: 'string',
        defaultValue: 'Ready to Get Started?'
      },
      ctaSubtext: {
        type: 'string',
        defaultValue: 'Join hundreds of successful entrepreneurs who have transformed their business with our proven process.'
      },
      ctaButtonText: {
        type: 'string',
        defaultValue: 'Begin Your Journey Today'
      },
      // Event handlers
      onGetStartedClick: {
        type: 'eventHandler', 
        argTypes: []
      },
      // Style props
      className: 'string'
    },
    defaultStyles: {
      width: '100%'
    }
  });
  console.log('✅ ProcessSection registered with full editing capabilities');
} catch (error) {
  console.error('❌ Error registering ProcessSection:', error);
}

try {
  PLASMIC.registerComponent(TestimonialsSection, {
    name: 'TestimonialsSection',
    props: {
      sectionTitle: {
        type: 'string',
        defaultValue: 'Client Testimonials'
      },
      sectionSubtitle: {
        type: 'string',
        defaultValue: "Don't just take our word for it. Here's what our successful clients have to say about their transformation."
      },
      className: 'string'
    },
    defaultStyles: {
      width: '100%'
    }
  });
  console.log('✅ TestimonialsSection registered with full editing capabilities');
} catch (error) {
  console.error('❌ Error registering TestimonialsSection:', error);
}

try {
  PLASMIC.registerComponent(Header, {
    name: 'Header',
    props: {
      // Logo and branding
      logoUrl: {
        type: 'string',
        defaultValue: '/chriselliot.de logo.png'
      },
      logoAlt: {
        type: 'string',
        defaultValue: 'Chris Elliott'
      },
      
      // Navigation text
      getStartedButtonText: {
        type: 'string',
        defaultValue: 'Get Started'
      },
      aboutButtonText: {
        type: 'string',
        defaultValue: 'About'
      },
      
      // Event handlers
      onGetStartedClick: {
        type: 'eventHandler',
        argTypes: []
      },
      onAboutClick: {
        type: 'eventHandler',
        argTypes: []
      },
      
      // Style props
      className: 'string'
    },
    defaultStyles: {
      width: '100%'
    }
  });
  console.log('✅ Header registered with full editing capabilities');
} catch (error) {
  console.error('❌ Error registering Header:', error);
}

try {
  PLASMIC.registerComponent(Footer, {
    name: 'Footer',
    props: {
      // Company Info Section
      logoUrl: {
        type: 'string',
        defaultValue: '/chriselliot.de logo.png'
      },
      logoAlt: {
        type: 'string',
        defaultValue: 'Chris Elliott'
      },
      companyDescription: {
        type: 'string',
        defaultValue: 'Empowering entrepreneurs to live anywhere, pay 0% tax, and build global businesses with complete legal compliance.'
      },
      
      // Social Media Links
      linkedinUrl: {
        type: 'string',
        defaultValue: 'https://www.linkedin.com/in/chris-elliott-437b00125/?originalSubdomain=ae'
      },
      instagramUrl: {
        type: 'string',
        defaultValue: 'https://www.instagram.com/chriselliott__?igsh=dnZmZmd3MDc5MnQ5&utm_source=qr'
      },
      youtubeUrl: {
        type: 'string',
        defaultValue: 'https://www.youtube.com/@chriselliott_'
      },
      
      // Services Section
      servicesTitle: {
        type: 'string',
        defaultValue: 'Services'
      },
      service1Text: {
        type: 'string',
        defaultValue: 'Business Setup'
      },
      service1Url: {
        type: 'string',
        defaultValue: '#'
      },
      service2Text: {
        type: 'string',
        defaultValue: 'Dubai Residency'
      },
      service2Url: {
        type: 'string',
        defaultValue: '#'
      },
      service3Text: {
        type: 'string',
        defaultValue: 'Banking Solutions'
      },
      service3Url: {
        type: 'string',
        defaultValue: '#'
      },
      service4Text: {
        type: 'string',
        defaultValue: 'Tax Optimization'
      },
      service4Url: {
        type: 'string',
        defaultValue: '#'
      },
      
      // Contact Section
      contactTitle: {
        type: 'string',
        defaultValue: 'Contact'
      },
      contactLocation: {
        type: 'string',
        defaultValue: 'Dubai, UAE'
      },
      contactSubtext: {
        type: 'string',
        defaultValue: 'Serving clients globally'
      },
      
      // Footer Bottom Section
      copyrightText: {
        type: 'string',
        defaultValue: '© 2025 Chris Elliott. All rights reserved.'
      },
      poweredByText: {
        type: 'string',
        defaultValue: 'Powered by'
      },
      poweredByUrl: {
        type: 'string',
        defaultValue: 'https://www.aviantdigital.xyz'
      },
      poweredByLinkText: {
        type: 'string',
        defaultValue: 'AviantDigital'
      },
      privacyPolicyText: {
        type: 'string',
        defaultValue: 'Privacy Policy'
      },
      privacyPolicyUrl: {
        type: 'string',
        defaultValue: '#'
      },
      termsOfServiceText: {
        type: 'string',
        defaultValue: 'Terms of Service'
      },
      termsOfServiceUrl: {
        type: 'string',
        defaultValue: '#'
      },
      
      // Style props
      className: 'string'
    },
    defaultStyles: {
      width: '100%'
    }
  });
  console.log('✅ Footer registered with full editing capabilities');
} catch (error) {
  console.error('❌ Error registering Footer:', error);
}

try {
  PLASMIC.registerComponent(BookingModal, {
    name: 'BookingModal',
    props: {
      isOpen: 'boolean',
      onClose: {
        type: 'eventHandler',
        argTypes: []
      }
    }
  });
  console.log('✅ BookingModal registered');
} catch (error) {
  console.error('❌ Error registering BookingModal:', error);
}

try {
  PLASMIC.registerComponent(AboutModal, {
    name: 'AboutModal',
    props: {
      isOpen: 'boolean',
      onClose: {
        type: 'eventHandler',
        argTypes: []
      }
    }
  });
  console.log('✅ AboutModal registered');
} catch (error) {
  console.error('❌ Error registering AboutModal:', error);
}

// Register the new ModalManager component
try {
  PLASMIC.registerComponent(ModalManager, {
    name: 'ModalManager',
    props: {
      bookingModalTitle: {
        type: 'string',
        defaultValue: 'Book Your Consultation'
      },
      aboutModalEnabled: {
        type: 'boolean',
        defaultValue: true
      },
      bookingModalEnabled: {
        type: 'boolean',
        defaultValue: true
      },
      className: 'string'
    },
    defaultStyles: {
      width: '100%'
    }
  });
  console.log('✅ ModalManager registered');
} catch (error) {
  console.error('❌ Error registering ModalManager:', error);
}

// Register the new CTAButton component
try {
  PLASMIC.registerComponent(CTAButton, {
    name: 'CTAButton',
    props: {
      text: {
        type: 'string',
        defaultValue: 'Get Started'
      },
      action: {
        type: 'choice',
        options: ['booking', 'about', 'custom'],
        defaultValue: 'booking'
      },
      customAction: {
        type: 'string',
        defaultValue: ''
      },
      variant: {
        type: 'choice',
        options: ['primary', 'secondary', 'outline'],
        defaultValue: 'primary'
      },
      size: {
        type: 'choice',
        options: ['small', 'medium', 'large'],
        defaultValue: 'medium'
      },
      onClick: {
        type: 'eventHandler',
        argTypes: []
      },
      className: 'string'
    }
  });
  console.log('✅ CTAButton registered');
} catch (error) {
  console.error('❌ Error registering CTAButton:', error);
}

console.log('Component registration complete!'); 