'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

interface TestimonialsSectionProps {
  sectionTitle?: string
  sectionSubtitle?: string
  className?: string
}

const TestimonialsSection = ({ 
  sectionTitle = "Client Testimonials",
  sectionSubtitle = "Don't just take our word for it. Here's what our successful clients have to say about their transformation.",
  className = ""
}: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Digital Marketing Consultant',
      company: 'SJ Marketing',
      content: 'Chris Elliott made the impossible possible. I now live in Bali while my business is registered in Dubai, paying 0% tax. The entire process was seamless and professional.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Michael Chen',
      role: 'Software Developer',
      company: 'TechFlow Solutions',
      content: 'The 2-year residency visa was a game-changer for my family. We have the freedom to travel while maintaining our business operations. Highly recommend Chris\'s services.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Emma Rodriguez',
      role: 'E-commerce Entrepreneur',
      company: 'Global Goods Co',
      content: 'Setting up banking and Stripe integration was incredibly smooth. I\'m now invoicing clients globally with zero complications. Worth every penny of the investment.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'David Thompson',
      role: 'Business Consultant',
      company: 'Thompson Advisory',
      content: 'The tax savings alone paid for the service within the first year. Chris guided us through every step and ensured complete compliance with all regulations.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Lisa Park',
      role: 'Content Creator',
      company: 'Creative Solutions',
      content: 'As a digital nomad, this service gave me the stability I needed while maintaining my freedom. The process was transparent and professionally handled from start to finish.',
      rating: 5,
      image: '/api/placeholder/80/80'
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
    <section id="testimonials" className={`w-full py-20 bg-white ${className}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial card */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-red-200 transform rotate-12" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial content */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                {/* Author info */}
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-red-600 font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-red-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
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