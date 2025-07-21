'use client'

import { X } from 'lucide-react'
import Image from 'next/image'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <div className="flex items-center space-x-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/30">
              <Image
                src="/chriselliotphoto.png"
                alt="Chris Elliott"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Christopher Elliott</h2>
              <p className="text-xl text-white/90">Dubai-Based Entrepreneur & Business Strategist</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <div className="prose max-w-none">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Chris Elliott</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Christopher Elliott is a distinguished Dubai-based entrepreneur who has built and successfully exited multiple ventures, 
                establishing himself as a leader in e-commerce, business strategy, and market expansion across international markets.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Entrepreneurial Success</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                In 2020, Chris launched <strong>Hygiene 100</strong>, a specialized e-commerce company focused on hygiene products. 
                Through his innovative digital-first approach and operational excellence, he scaled the business to generate over 
                <strong> 10 million euros in turnover within just 18 months</strong>. His success culminated in a strategic exit in 2025, 
                placing him among the rare founders who built and sold a high-performing company in a traditionally overlooked sector.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chris revolutionized how hygiene products were sold online by focusing on logistics, scalability, and digital accessibility. 
                His team processed orders the same day and delivered them within 48 hours across Germany, Austria, and Belgium, 
                serving over <strong>5,300 customers</strong> including pharmacies, care homes, clinics, and wholesalers.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Current Ventures</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Following his successful exit, Chris founded two new ventures using the proceeds from his previous success:
              </p>
              <div className="ml-4 mb-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>The chris elliott GROUP:</strong> Provides comprehensive market-entry services and advisory support 
                  for international businesses looking to establish operations in the UAE. The company removes red tape and 
                  supports foreign founders who want to launch in Dubai's dynamic business environment.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Elliott Capitals:</strong> His private investment firm focused on digital and service-driven growth. 
                  The firm acquires companies with strong fundamentals and scales them through optimized systems, capital access, 
                  and structured expansion, while also building new ventures from execution-ready ideas.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Business Philosophy</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chris built his success on operational strength, consistent service, and precise execution—all achieved with 
                <strong> zero external funding</strong>. His approach focuses on:
              </p>
              <ul className="list-disc ml-6 text-gray-700 leading-relaxed mb-4">
                <li>Streamlined processes and lean infrastructure</li>
                <li>Direct relationships with suppliers and customers</li>
                <li>Automation to increase speed and accuracy</li>
                <li>Transparent buyer experiences</li>
                <li>Systems that can scale rapidly and adapt to market needs</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                His foundation was built on the lessons learned growing up, watching his father work with discipline and pride, 
                always delivering the highest level of service to clients—principles that became the cornerstone of his own 
                focused, practical, and customer-driven approach.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">International Experience</h4>
              <p className="text-gray-700 leading-relaxed">
                Beyond his Dubai success, Chris brings valuable international perspective, having previously operated 
                an e-commerce business in Miami. This cross-continental experience gives him unique insights into 
                different markets and business environments, making him an invaluable partner for businesses looking 
                to expand globally or establish operations in the UAE.
              </p>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Featured In</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chris Elliott's entrepreneurial journey and business success have been recognized by leading publications.
              </p>
              <a
                href="https://forbesbahrain.com/dubai-based-entrepreneur-chris-elliott-successfully-exits-multi-million-euro-hygiene-e-commerce-empire-after-four-year-growth/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-red-600 hover:to-red-700"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                Read Forbes Article
              </a>
              <p className="text-sm text-gray-600 mt-3">
                "Dubai-Based Entrepreneur Chris Elliott Successfully Exits Multi-Million Euro Hygiene E-Commerce Empire After Four-Year Growth" - Forbes Bahrain
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t">
          <p className="text-sm text-gray-600 text-center">
            Ready to start your business transformation journey? 
            <button 
              onClick={onClose}
              className="ml-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-200"
            >
              Get in touch today
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutModal 