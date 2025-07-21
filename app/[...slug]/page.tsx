import { PlasmicComponent } from '@plasmicapp/loader-nextjs'

export default function PlasmicPage({ params }: { params: { slug: string[] } }) {
  const path = `/${params.slug.join('/')}`
  
  return <PlasmicComponent component={path} />
}

export async function generateStaticParams() {
  // This will be populated by Plasmic pages when they exist
  return []
} 