'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const preventBodyScroll = (e: TouchEvent) => {
      e.preventDefault()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.height = '100%'
      // Prevent background scrolling on mobile
      document.addEventListener('touchmove', preventBodyScroll, { passive: false })
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('touchmove', preventBodyScroll)
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
      document.body.style.height = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleModalContentTouch = (e: React.TouchEvent) => {
    // Allow touch events within the modal content
    e.stopPropagation()
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 h-[90vh] md:h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
        style={{ 
          height: 'min(90vh, 800px)', 
          maxHeight: '90vh',
          touchAction: 'none'
        }}
        onTouchMove={handleModalContentTouch}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-red-50 to-primary-50">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book Your Consultation</h2>
            <p className="text-gray-600 mt-1">Schedule your free discovery call to get started</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="h-[calc(100%-80px)] overflow-auto touch-pan-y pb-4 md:pb-0">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/mBnEimwaVAYwcagtDdbu"
            className="w-full border-0"
            title="Book Your Consultation"
            loading="lazy"
            style={{ 
              height: 'calc(100% - 1rem)',
              minHeight: 'calc(100% - 1rem)',
              WebkitOverflowScrolling: 'touch'
            }}
          />
          {/* Mobile bottom spacing */}
          <div className="h-4 md:hidden"></div>
        </div>
      </div>
    </div>
  )
}

export default BookingModal 