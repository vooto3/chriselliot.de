'use client'

import { CheckCircle, Globe, TrendingUp, Shield } from 'lucide-react'

interface HeroSectionProps {
  // Content props for editing in Plasmic
  mainHeading?: string
  highlightText1?: string
  highlightText2?: string
  subHeading?: string
  originalPrice?: string
  currentPrice?: string
  buttonText?: string
  socialProofText?: string
  backgroundImage?: string
  
  // Layout props for Plasmic flexibility
  minHeight?: string
  paddingTop?: string
  paddingBottom?: string
  
  // Event handlers
  onGetStartedClick?: () => void
  
  // Style props
  className?: string
}

const HeroSection = ({ 
  mainHeading = "What if I told you that you could",
  highlightText1 = "live anywhere in the world",
  highlightText2 = "pay 0% tax",
  subHeading = "Don't miss this exclusive offer. Avail the opportunity to live anywhere in the world.",
  originalPrice = "$11,980",
  currentPrice = "$9,800",
  buttonText = "Get Started Today - Save $2,180",
  socialProofText = "Join 7,000+ online coaches and business owners",
  backgroundImage = "/dubai-beach.jpg",
  minHeight = "600px",
  paddingTop = "8rem",
  paddingBottom = "4rem",
  onGetStartedClick,
  className = ""
}: HeroSectionProps) => {
  const features = [
    { icon: Globe, text: 'Live anywhere in the world' },
    { icon: TrendingUp, text: 'Pay 0% income and corporate tax' },
    { icon: Shield, text: 'Open your new business setup or use your current business name' },
    { icon: CheckCircle, text: 'Get your personal & business bank account in Dubai' },
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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60"></div>
      
      {/* Content Container - Full Width */}
      <div className="relative z-10 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-lg">
              {mainHeading}{' '}
              <span className="gradient-text">{highlightText1}</span>,{' '}
              <span className="gradient-text">{highlightText2}</span>, invoice clients globally,{' '}
              and connect seamlessly via Stripe?
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-red-500 line-through">
                  Previously {originalPrice}
                </span>
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                Now available for just {currentPrice}!
              </div>
            </div>

            {/* Social Proof Section */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 rounded-full border-3 border-white shadow-lg ${
                      index > 0 ? '-ml-3' : ''
                    } relative overflow-hidden`}
                    style={{ zIndex: 10 - index }}
                  >
                    <img
                      src={avatar.image}
                      alt={`${avatar.name} - Coach`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-gray-700 font-medium">
                <span className="text-lg">{socialProofText}</span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto drop-shadow-md font-medium">
              {subHeading}
            </p>
            
                      <button 
            onClick={handleGetStartedClick}
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {buttonText}
          </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="font-semibold text-gray-900">{feature.text}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 w-full">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Complete Business Solution
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Receive a two-year residency in Dubai</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Get your business license with current or new business name</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Personal & business banking setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Multi-Currency IBAN Accounts (USD, EUR, GBP & more)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Global Client Invoicing (Bill in several currencies, get paid easily)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Seamless Stripe integration</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-50 to-primary-50 rounded-xl p-8">
                  <div className="text-6xl font-bold gradient-text mb-2">{currentPrice}</div>
                  <div className="text-gray-600 mb-4">One-time setup fee</div>
                  <div className="text-sm text-gray-500 line-through mb-6">Previously {originalPrice}</div>
                  <button 
                    onClick={handleGetStartedClick}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Start Your Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 