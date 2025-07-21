'use client'

import { useState, useCallback } from 'react'
import BookingModal from './BookingModal'
import AboutModal from './AboutModal'

interface ModalManagerProps {
  // Content customization
  bookingModalTitle?: string
  aboutModalEnabled?: boolean
  bookingModalEnabled?: boolean
  
  // Style props
  className?: string
}

const ModalManager = ({
  bookingModalTitle = "Book Your Consultation",
  aboutModalEnabled = true,
  bookingModalEnabled = true,
  className = ""
}: ModalManagerProps) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)

  // Action methods that can be called from Plasmic
  const openBookingModal = useCallback(() => {
    setIsBookingModalOpen(true)
  }, [])

  const closeBookingModal = useCallback(() => {
    setIsBookingModalOpen(false)
  }, [])

  const openAboutModal = useCallback(() => {
    setIsAboutModalOpen(true)
  }, [])

  const closeAboutModal = useCallback(() => {
    setIsAboutModalOpen(false)
  }, [])

  // Expose methods globally so any component can access them
  if (typeof window !== 'undefined') {
    // Attach to window object for global access
    (window as any).openBookingModal = openBookingModal;
    (window as any).closeBookingModal = closeBookingModal;
    (window as any).openAboutModal = openAboutModal;
    (window as any).closeAboutModal = closeAboutModal;
  }

  return (
    <div className={className}>
      {/* This component is invisible but manages modal state */}
      
      {/* Booking Modal */}
      {bookingModalEnabled && (
        <BookingModal 
          isOpen={isBookingModalOpen}
          onClose={closeBookingModal}
        />
      )}

      {/* About Modal */}
      {aboutModalEnabled && (
        <AboutModal 
          isOpen={isAboutModalOpen}
          onClose={closeAboutModal}
        />
      )}

      {/* Optional: Add visual indicators for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded text-xs z-50">
          Modal Manager Active
          <br />
          Booking: {isBookingModalOpen ? 'Open' : 'Closed'}
          <br />
          About: {isAboutModalOpen ? 'Open' : 'Closed'}
        </div>
      )}
    </div>
  )
}

export default ModalManager 