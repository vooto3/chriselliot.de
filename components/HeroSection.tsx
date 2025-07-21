'use client'

import { CheckCircle, Globe, TrendingUp, Shield } from 'lucide-react'

interface HeroSectionProps {
  // Main Content - All Text Editable
  mainHeading?: string
  highlightText1?: string
  highlightText2?: string
  subHeading?: string
  
  // Pricing - Fully Editable
  originalPrice?: string
  currentPrice?: string
  savingsText?: string
  
  // Button & CTA
  buttonText?: string
  socialProofText?: string
  
  // Features - All Editable
  feature1Text?: string
  feature2Text?: string
  feature3Text?: string
  feature4Text?: string
  
  // Visual Design - All Customizable
  backgroundImage?: string
  overlayOpacity?: number
  
  // Typography Colors
  headingColor?: string
  highlightColor?: string
  subheadingColor?: string
  
  // Button Styling
  buttonBackgroundColor?: string
  buttonTextColor?: string
  buttonHoverColor?: string
  
  // Layout & Spacing
  minHeight?: string
  paddingTop?: string
  paddingBottom?: string
  containerMaxWidth?: string
  
  // Event handlers
  onGetStartedClick?: () => void
  
  // Style props
  className?: string
}

const HeroSection = ({ 
  // Main Content
  mainHeading = "What if I told you that you could",
  highlightText1 = "live anywhere in the world",
  highlightText2 = "pay 0% tax",
  subHeading = "Don't miss this exclusive offer. Avail the opportunity to live anywhere in the world.",
  
  // Pricing
  originalPrice = "$11,980",
  currentPrice = "$9,800",
  savingsText = "Save $2,180",
  
  // Button & CTA
  buttonText = "Get Started Today - Save $2,180",
  socialProofText = "Join 7,000+ online coaches and business owners",
  
  // Features
  feature1Text = "Live anywhere in the world",
  feature2Text = "Pay 0% income and corporate tax",
  feature3Text = "Open your new business setup or use your current business name",
  feature4Text = "Get your personal & business bank account in Dubai",
  
  // Visual Design
  backgroundImage = "/dubai-beach.jpg",
  overlayOpacity = 0.3,
  
  // Typography Colors
  headingColor = "#ffffff",
  highlightColor = "#ef4444",
  subheadingColor = "#d1d5db",
  
  // Button Styling
  buttonBackgroundColor = "#ef4444",
  buttonTextColor = "#ffffff",
  buttonHoverColor = "#dc2626",
  
  // Layout & Spacing
  minHeight = "600px",
  paddingTop = "8rem",
  paddingBottom = "4rem",
  containerMaxWidth = "1200px",
  
  // Event handlers
  onGetStartedClick,
  className = ""
}: HeroSectionProps) => {
  const features = [
    { icon: Globe, text: feature1Text },
    { icon: TrendingUp, text: feature2Text },
    { icon: Shield, text: feature3Text },
    { icon: CheckCircle, text: feature4Text },
  ]

  // Avatar data for social proof with Pexels photos
  const avatars = [
    { 
      name: 'Alex', 
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    { 
      name: 'Sarah', 
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    { 
      name: 'Mike', 
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    { 
      name: 'Lisa', 
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    { 
      name: 'Tom', 
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    { 
      name: 'Amy', 
      image: 'https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    { 
      name: 'John', 
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    { 
      name: 'Kate', 
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
  ]

  // Handle Get Started button clicks
  const handleGetStartedClick = () => {
    // Try to use the global modal function first
    if (typeof window !== 'undefined' && (window as any).openBookingModal) {
      (window as any).openBookingModal()
    } else if (onGetStartedClick) {
      // Fallback to the prop-based approach
      onGetStartedClick()
    }
  }

  return (
    <section 
      className={`w-full relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: minHeight,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom
      }}
    >
      {/* Background Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" style={{ maxWidth: containerMaxWidth, margin: '0 auto' }}>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: headingColor }}>
              {mainHeading}{' '}
              <span style={{ color: highlightColor }}>{highlightText1}</span>{' '}
              and <span style={{ color: highlightColor }}>{highlightText2}</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold line-through" style={{ color: subheadingColor }}>
                  {originalPrice}
                </span>
              </div>
              <div className="text-3xl md:text-4xl font-bold" style={{ color: highlightColor }}>
                {currentPrice}
              </div>
              <div className="font-semibold" style={{ color: highlightColor }}>
                {savingsText}
              </div>
            </div>

            {/* Social Proof Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 rounded-full border-3 shadow-lg ${
                      index > 0 ? '-ml-3' : ''
                    } relative overflow-hidden`}
                    style={{ 
                      zIndex: 10 - index,
                      borderColor: highlightColor
                    }}
                  >
                    <img
                      src={avatar.image}
                      alt={`${avatar.name} - Coach`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="font-medium">
                <span className="text-lg" style={{ color: subheadingColor }}>{socialProofText}</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium" style={{ color: subheadingColor }}>
              {subHeading}
            </p>
            
            <button 
              onClick={handleGetStartedClick}
              className="inline-block px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ 
                backgroundColor: buttonBackgroundColor,
                color: buttonTextColor
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = buttonHoverColor
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = buttonBackgroundColor
              }}
            >
              {buttonText}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <feature.icon 
                    className="w-8 h-8 mr-3" 
                    style={{ color: highlightColor }}
                  />
                  <h3 className="font-semibold" style={{ color: headingColor }}>{feature.text}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 w-full">
            <div className="text-center">
              <div className="mb-6">
                <div className="text-6xl font-bold mb-2" style={{ color: highlightColor }}>{currentPrice}</div>
                <div className="mb-4" style={{ color: subheadingColor }}>One-time setup fee</div>
                <div className="text-sm line-through mb-6" style={{ color: subheadingColor }}>Previously {originalPrice}</div>
                <div className="mb-6" style={{ color: highlightColor }}>{savingsText}</div>
                <button 
                  onClick={handleGetStartedClick}
                  className="w-full px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  style={{ 
                    backgroundColor: buttonBackgroundColor,
                    color: buttonTextColor
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = buttonHoverColor
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = buttonBackgroundColor
                  }}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 