'use client'

import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';

export default function PlasmicHost() {
  return (
    <div>
      <div style={{ padding: '10px', backgroundColor: '#e8f5e8', marginBottom: '10px' }}>
        ✅ Plasmic Host Active - Components Ready
      </div>
      <PlasmicCanvasHost />
    </div>
  );
} 