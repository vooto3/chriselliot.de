'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'
import AboutModal from '@/components/AboutModal'

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true)
  }

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false)
  }

  const handleOpenAboutModal = () => {
    setIsAboutModalOpen(true)
  }

  const handleCloseAboutModal = () => {
    setIsAboutModalOpen(false)
  }

  return (
    <main className="min-h-screen">
      <Header 
        onGetStartedClick={handleOpenBookingModal}
        onAboutClick={handleOpenAboutModal}
      />
      <HeroSection onGetStartedClick={handleOpenBookingModal} />
      <ProcessSection onGetStartedClick={handleOpenBookingModal} />
      <TestimonialsSection />
      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={handleCloseBookingModal} 
      />
      
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={handleCloseAboutModal} 
      />
    </main>
  )
} 