'use client'

import { PlasmicRootProvider } from '@plasmicapp/loader-nextjs'
import { PLASMIC } from '../plasmic-init'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      {children}
    </PlasmicRootProvider>
  )
} 