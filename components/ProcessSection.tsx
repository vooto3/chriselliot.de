'use client'

import { 
  FileText, 
  CreditCard, 
  MapPin, 
  Building, 
  Users, 
  Shield, 
  CheckCircle, 
  Globe, 
  Banknote 
} from 'lucide-react'

interface ProcessSectionProps {
  // Content props for editing in Plasmic
  sectionTitle?: string
  sectionSubtitle?: string
  ctaHeading?: string
  ctaSubtext?: string
  ctaButtonText?: string
  
  // Event handlers
  onGetStartedClick?: () => void
  
  // Style props
  className?: string
}

const ProcessSection = ({ 
  sectionTitle = "What do I Need to Do?",
  sectionSubtitle = "Our streamlined 9-step process makes it simple to set up your global business presence. We handle the complexity, you focus on growing your business.",
  ctaHeading = "Ready to Get Started?",
  ctaSubtext = "Join hundreds of successful entrepreneurs who have transformed their business with our proven process.",
  ctaButtonText = "Begin Your Journey Today",
  onGetStartedClick,
  className = ""
}: ProcessSectionProps) => {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete and submit your business setup application with all required documents.',
      step: 1
    },
    {
      icon: CreditCard,
      title: 'Make Payment',
      description: 'Secure your spot with the discounted $9,800 payment (save $2,180 from regular price).',
      step: 2
    },
    {
      icon: MapPin,
      title: 'Choose Location',
      description: 'Select your preferred business location and setup configuration in Dubai.',
      step: 3
    },
    {
      icon: Building,
      title: 'Business Registration',
      description: 'We handle all business registration procedures and licensing requirements.',
      step: 4
    },
    {
      icon: Users,
      title: 'Residency Application',
      description: 'Apply for your 2-year Dubai residency visa with our expert guidance.',
      step: 5
    },
    {
      icon: Banknote,
      title: 'Banking Setup',
      description: 'Open your personal and business bank accounts with major UAE banks.',
      step: 6
    },
    {
      icon: Shield,
      title: 'Legal Compliance',
      description: 'Ensure full compliance with UAE regulations and international tax laws.',
      step: 7
    },
    {
      icon: Globe,
      title: 'Global Integration',
      description: 'Set up Stripe integration and global invoicing capabilities for your business.',
      step: 8
    },
    {
      icon: CheckCircle,
      title: 'Final Handover',
      description: 'Receive all documents, accounts, and access to start operating immediately.',
      step: 9
    }
  ]

  return (
    <section id="process" className={`w-full py-20 bg-gray-50 ${className}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.step}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-primary-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-red-600" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {ctaHeading}
            </h3>
            <p className="text-gray-600 mb-6">
              {ctaSubtext}
            </p>
            <button 
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).openBookingModal) {
                  (window as any).openBookingModal()
                } else if (onGetStartedClick) {
                  onGetStartedClick()
                }
              }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {ctaButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection 