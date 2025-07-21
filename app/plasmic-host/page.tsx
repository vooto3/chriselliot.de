'use client'

import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/plasmic-init';

export default function PlasmicHost() {
  React.useEffect(() => {
    console.log('=== PLASMIC HOST DEBUG ===');
    console.log('PLASMIC object:', PLASMIC);
    console.log('PLASMIC methods:', Object.getOwnPropertyNames(PLASMIC));
    
    // Try to register a simple component here to test
    const SimpleTest = ({ text = "Simple Test Works!" }: { text?: string }) => {
      return React.createElement('div', { 
        style: { padding: '20px', backgroundColor: 'lightblue', border: '2px solid blue' } 
      }, text);
    };
    
    try {
      PLASMIC.registerComponent(SimpleTest, {
        name: 'SimpleTest',
        props: {
          text: 'string'
        }
      });
      console.log('✅ SimpleTest component registered successfully');
    } catch (error) {
      console.error('❌ Error registering SimpleTest:', error);
    }
  }, []);

  return (
    <div>
      <div style={{ padding: '10px', backgroundColor: '#e8f5e8', marginBottom: '10px' }}>
        ✅ Plasmic Host Active - Check console for debug info
      </div>
      <PlasmicCanvasHost />
    </div>
  );
} 