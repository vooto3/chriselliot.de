'use client'

interface CTAButtonProps {
  // Button content
  text?: string
  
  // Modal actions
  action?: 'booking' | 'about' | 'custom'
  customAction?: string
  
  // Button styling
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  className?: string
  
  // Custom event handler (for backward compatibility)
  onClick?: () => void
}

const CTAButton = ({
  text = "Get Started",
  action = 'booking',
  customAction = '',
  variant = 'primary',
  size = 'medium',
  className = '',
  onClick
}: CTAButtonProps) => {

  const handleClick = () => {
    // If custom onClick provided, use that first
    if (onClick) {
      onClick()
      return
    }

    // Otherwise, use the action prop to trigger modals
    if (typeof window !== 'undefined') {
      switch (action) {
        case 'booking':
          if ((window as any).openBookingModal) {
            (window as any).openBookingModal()
          }
          break
        case 'about':
          if ((window as any).openAboutModal) {
            (window as any).openAboutModal()
          }
          break
        case 'custom':
          if (customAction && (window as any)[customAction]) {
            (window as any)[customAction]()
          }
          break
      }
    }
  }

  // Base button styles
  const baseStyles = "font-semibold rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer inline-block text-center"
  
  // Variant styles
  const variantStyles = {
    primary: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-red-600 border-2 border-red-600 hover:bg-red-50",
    outline: "border-2 border-white text-white hover:bg-white hover:text-red-600"
  }
  
  // Size styles
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  }

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button 
      onClick={handleClick}
      className={buttonClasses}
    >
      {text}
    </button>
  )
}

export default CTAButton 