'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

interface TestimonialsSectionProps {
  // Section Header - Fully Editable
  sectionTitle?: string
  sectionSubtitle?: string
  
  // Testimonial 1 - All Editable
  testimonial1Name?: string
  testimonial1Role?: string
  testimonial1Company?: string
  testimonial1Content?: string
  testimonial1Image?: string
  testimonial1Rating?: number
  
  // Testimonial 2 - All Editable
  testimonial2Name?: string
  testimonial2Role?: string
  testimonial2Company?: string
  testimonial2Content?: string
  testimonial2Image?: string
  testimonial2Rating?: number
  
  // Testimonial 3 - All Editable
  testimonial3Name?: string
  testimonial3Role?: string
  testimonial3Company?: string
  testimonial3Content?: string
  testimonial3Image?: string
  testimonial3Rating?: number
  
  // Testimonial 4 - All Editable
  testimonial4Name?: string
  testimonial4Role?: string
  testimonial4Company?: string
  testimonial4Content?: string
  testimonial4Image?: string
  testimonial4Rating?: number
  
  // Design Colors - All Customizable
  backgroundColor?: string
  titleColor?: string
  subtitleColor?: string
  cardBackgroundColor?: string
  cardBorderColor?: string
  nameColor?: string
  roleColor?: string
  contentColor?: string
  starColor?: string
  
  // Layout & Spacing
  sectionPadding?: string
  cardSpacing?: string
  
  className?: string
}

const TestimonialsSection = ({ 
  // Section Header
  sectionTitle = "Client Testimonials",
  sectionSubtitle = "Don't just take our word for it. Here's what our successful clients have to say about their transformation.",
  
  // Testimonial 1
  testimonial1Name = "Sarah Johnson",
  testimonial1Role = "Digital Marketing Consultant", 
  testimonial1Company = "SJ Marketing",
  testimonial1Content = "Chris Elliott made the impossible possible. I now live in Bali while my business is registered in Dubai, paying 0% tax. The entire process was seamless and professional.",
  testimonial1Image = "/api/placeholder/80/80",
  testimonial1Rating = 5,
  
  // Testimonial 2
  testimonial2Name = "Michael Chen",
  testimonial2Role = "Software Developer",
  testimonial2Company = "TechFlow Solutions", 
  testimonial2Content = "The 2-year residency visa was a game-changer for my family. We have the freedom to travel while maintaining our business operations. Highly recommend Chris's services.",
  testimonial2Image = "/api/placeholder/80/80",
  testimonial2Rating = 5,
  
  // Testimonial 3
  testimonial3Name = "Emma Rodriguez",
  testimonial3Role = "E-commerce Entrepreneur",
  testimonial3Company = "Global Goods Co",
  testimonial3Content = "Setting up banking and Stripe integration was incredibly smooth. I'm now invoicing clients globally with zero complications. Worth every penny of the investment.",
  testimonial3Image = "/api/placeholder/80/80", 
  testimonial3Rating = 5,
  
  // Testimonial 4
  testimonial4Name = "David Thompson",
  testimonial4Role = "Business Consultant",
  testimonial4Company = "Thompson Advisory",
  testimonial4Content = "The tax savings alone paid for the service within the first year. Chris guided us through every step and ensured complete compliance with all regulations.",
  testimonial4Image = "/api/placeholder/80/80",
  testimonial4Rating = 5,
  
  // Design Colors
  backgroundColor = "#ffffff",
  titleColor = "#111827",
  subtitleColor = "#6b7280",
  cardBackgroundColor = "#f9fafb",
  cardBorderColor = "#e5e7eb",
  nameColor = "#111827",
  roleColor = "#ef4444", 
  contentColor = "#4b5563",
  starColor = "#fbbf24",
  
  // Layout & Spacing
  sectionPadding = "5rem 0",
  cardSpacing = "1.5rem",
  
  className = ""
}: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: testimonial1Name,
      role: testimonial1Role,
      company: testimonial1Company,
      content: testimonial1Content,
      rating: testimonial1Rating,
      image: testimonial1Image
    },
    {
      name: testimonial2Name,
      role: testimonial2Role,
      company: testimonial2Company,
      content: testimonial2Content,
      rating: testimonial2Rating,
      image: testimonial2Image
    },
    {
      name: testimonial3Name,
      role: testimonial3Role,
      company: testimonial3Company,
      content: testimonial3Content,
      rating: testimonial3Rating,
      image: testimonial3Image
    },
    {
      name: testimonial4Name,
      role: testimonial4Role,
      company: testimonial4Company,
      content: testimonial4Content,
      rating: testimonial4Rating,
      image: testimonial4Image
    }
  ]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      id="testimonials" 
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

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div 
            className="rounded-2xl p-8 md:p-12 shadow-2xl border relative overflow-hidden"
            style={{ 
              backgroundColor: cardBackgroundColor,
              borderColor: cardBorderColor
            }}
          >
            {/* Quote icon */}
            <Quote 
              className="absolute top-6 right-6 w-12 h-12 transform rotate-12 opacity-20" 
              style={{ color: roleColor }}
            />
            
            <div className="flex flex-col md:flex-row items-center" style={{ gap: cardSpacing }}>
              <div className="flex-shrink-0">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl"
                  style={{ 
                    backgroundColor: roleColor,
                    color: cardBackgroundColor
                  }}
                >
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-current" 
                      style={{ color: starColor }}
                    />
                  ))}
                </div>
                
                {/* Testimonial content */}
                <blockquote 
                  className="text-lg md:text-xl mb-6 italic leading-relaxed"
                  style={{ color: contentColor }}
                >
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                {/* Author info */}
                <div>
                  <div className="font-bold text-lg" style={{ color: nameColor }}>
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="font-medium" style={{ color: roleColor }}>
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-sm" style={{ color: subtitleColor }}>
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
            style={{ backgroundColor: cardBackgroundColor }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" style={{ color: roleColor }} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
            style={{ backgroundColor: cardBackgroundColor }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" style={{ color: roleColor }} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="w-3 h-3 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: index === currentIndex ? roleColor : cardBorderColor,
                  width: index === currentIndex ? '2rem' : '0.75rem'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 