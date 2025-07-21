'use client'

import { PlasmicComponent } from '@plasmicapp/loader-nextjs'
import { useEffect, useState } from 'react'
import { PLASMIC } from '../../plasmic-init'

export default function PlasmicPage({ params }: { params: { path: string[] } }) {
  const [plasmicData, setPlasmicData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  
  const fullPath = `/${params.path.join('/')}`

  useEffect(() => {
    const fetchPlasmicContent = async () => {
      try {
        const data = await PLASMIC.maybeFetchComponentData(fullPath)
        if (data) {
          console.log('✅ Found Plasmic content for path:', fullPath, data)
          setPlasmicData(data)
        } else {
          console.log('❌ No Plasmic content found for path:', fullPath)
          setNotFound(true)
        }
      } catch (error) {
        console.log('❌ Error fetching Plasmic content for path:', fullPath, error)
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPlasmicContent()
  }, [fullPath])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600">Page not found</p>
          <p className="text-sm text-gray-500 mt-2">Path: {fullPath}</p>
          <p className="text-sm text-gray-400 mt-2">
            This page hasn't been created in Plasmic Studio yet.
          </p>
        </div>
      </div>
    )
  }

  console.log('🎨 Rendering Plasmic content for path:', fullPath)
  return <PlasmicComponent component={fullPath} />
} 