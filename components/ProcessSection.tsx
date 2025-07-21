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
  // Section Header - Fully Editable
  sectionTitle?: string
  sectionSubtitle?: string
  
  // All 9 Steps - Individually Editable
  step1Title?: string
  step1Description?: string
  step2Title?: string
  step2Description?: string
  step3Title?: string
  step3Description?: string
  step4Title?: string
  step4Description?: string
  step5Title?: string
  step5Description?: string
  step6Title?: string
  step6Description?: string
  step7Title?: string
  step7Description?: string
  step8Title?: string
  step8Description?: string
  step9Title?: string
  step9Description?: string
  
  // CTA Section - Fully Editable
  ctaHeading?: string
  ctaSubtext?: string
  ctaButtonText?: string
  
  // Design Colors - All Customizable
  backgroundColor?: string
  titleColor?: string
  subtitleColor?: string
  stepCardBackground?: string
  stepNumberColor?: string
  stepTitleColor?: string
  stepDescriptionColor?: string
  ctaBackgroundColor?: string
  ctaTextColor?: string
  
  // Layout & Spacing
  sectionPadding?: string
  cardSpacing?: string
  
  // Event handlers
  onGetStartedClick?: () => void
  
  // Style props
  className?: string
}

const ProcessSection = ({ 
  // Section Header
  sectionTitle = "What do I Need to Do?",
  sectionSubtitle = "Our streamlined 9-step process makes it simple to set up your global business presence. We handle the complexity, you focus on growing your business.",
  
  // Individual Steps
  step1Title = "Submit Application",
  step1Description = "Complete and submit your business setup application with all required documents.",
  step2Title = "Make Payment", 
  step2Description = "Secure your spot with the discounted $9,800 payment (save $2,180 from regular price).",
  step3Title = "Choose Business Activity",
  step3Description = "Select your business activity from 2000+ approved activities in Dubai.",
  step4Title = "Business Formation",
  step4Description = "We handle the complete business formation process with Dubai authorities.",
  step5Title = "Get 2-Year Residency Visa",
  step5Description = "Receive your 2-year renewable residency visa for you and your family.",
  step6Title = "Open Bank Account",
  step6Description = "Set up your personal and business banking accounts in Dubai.",
  step7Title = "Stripe Integration",
  step7Description = "Get your Stripe account connected for seamless global payments.",
  step8Title = "Tax Compliance Setup",
  step8Description = "Ensure complete tax compliance and 0% corporate tax structure.",
  step9Title = "Global Freedom",
  step9Description = "Start living anywhere while your business operates legally and tax-efficiently.",
  
  // CTA Section
  ctaHeading = "Ready to Get Started?",
  ctaSubtext = "Join hundreds of successful entrepreneurs who have transformed their business with our proven process.",
  ctaButtonText = "Begin Your Journey Today",
  
  // Design Colors
  backgroundColor = "#f9fafb",
  titleColor = "#111827",
  subtitleColor = "#6b7280",
  stepCardBackground = "#ffffff",
  stepNumberColor = "#ef4444",
  stepTitleColor = "#111827",
  stepDescriptionColor = "#6b7280",
  ctaBackgroundColor = "#ef4444",
  ctaTextColor = "#ffffff",
  
  // Layout & Spacing
  sectionPadding = "5rem 0",
  cardSpacing = "2rem",
  
  // Event handlers
  onGetStartedClick,
  className = ""
}: ProcessSectionProps) => {
  const steps = [
    {
      icon: FileText,
      title: step1Title,
      description: step1Description,
      step: 1
    },
    {
      icon: CreditCard,
      title: step2Title,
      description: step2Description,
      step: 2
    },
    {
      icon: MapPin,
      title: step3Title,
      description: step3Description,
      step: 3
    },
    {
      icon: Building,
      title: step4Title,
      description: step4Description,
      step: 4
    },
    {
      icon: Users,
      title: step5Title,
      description: step5Description,
      step: 5
    },
    {
      icon: Banknote,
      title: step6Title,
      description: step6Description,
      step: 6
    },
    {
      icon: Shield,
      title: step7Title,
      description: step7Description,
      step: 7
    },
    {
      icon: Globe,
      title: step8Title,
      description: step8Description,
      step: 8
    },
    {
      icon: CheckCircle,
      title: step9Title,
      description: step9Description,
      step: 9
    }
  ]

  return (
    <section 
      id="process" 
      className={`w-full ${className}`}
      style={{ 
        backgroundColor: backgroundColor,
        padding: sectionPadding
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: titleColor }}>
            {sectionTitle}
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: subtitleColor }}>
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: cardSpacing }}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              style={{ backgroundColor: stepCardBackground }}
            >
              {/* Step Number */}
              <div 
                className="absolute top-4 right-4 w-8 h-8 text-white rounded-full flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: stepNumberColor }}
              >
                {step.step}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: stepNumberColor + '10' }}
                >
                  <step.icon className="w-8 h-8" style={{ color: stepNumberColor }} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3" style={{ color: stepTitleColor }}>
                {step.title}
              </h3>
              <p className="leading-relaxed" style={{ color: stepDescriptionColor }}>
                {step.description}
              </p>

              {/* Decorative element */}
              <div 
                className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: stepNumberColor }}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div 
            className="rounded-2xl p-8 shadow-xl max-w-2xl mx-auto"
            style={{ 
              backgroundColor: ctaBackgroundColor,
              border: `1px solid ${ctaTextColor}20`
            }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: ctaTextColor }}>
              {ctaHeading}
            </h3>
            <p className="mb-6" style={{ color: ctaTextColor, opacity: 0.9 }}>
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
              className="px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: ctaTextColor,
                color: ctaBackgroundColor
              }}
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