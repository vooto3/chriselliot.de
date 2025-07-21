# 🚀 Plasmic Modal System - Complete Setup Guide

## ✅ What's Been Set Up

I've created a complete modal system for your Plasmic project with 3 new components:

1. **ModalManager** - Handles modal state and provides global functions
2. **CTAButton** - Smart button that can trigger any modal
3. **Updated existing components** - All CTA buttons now work with modals

## 🎯 How to Use in Plasmic Studio

### Step 1: Add ModalManager to Your Page (Required)
1. **Drag ModalManager** from Code Components to your canvas
2. **Place it anywhere** on your page (it's invisible but manages all modals)
3. **Configure in right panel**:
   - ✅ `bookingModalEnabled`: true (to enable booking modal)
   - ✅ `aboutModalEnabled`: true (to enable about modal)
   - ✅ `bookingModalTitle`: "Book Your Consultation" (customize title)

### Step 2: Add CTA Buttons (Easy Method)
1. **Drag CTAButton** from Code Components
2. **Configure in right panel**:
   - `text`: "Get Started" (or any button text)
   - `action`: Choose "booking" or "about"
   - `variant`: "primary", "secondary", or "outline"
   - `size`: "small", "medium", or "large"

### Step 3: Use Existing Components (Alternative Method)
Your existing components (HeroSection, ProcessSection, Header) already work! They'll automatically:
- ✅ **Try global modal functions first** (if ModalManager is on page)
- ✅ **Fallback to event handlers** (for backward compatibility)

## 🎨 Available Components & Their Actions

### ModalManager (Required - Place Once Per Page)
**Purpose**: Invisible component that manages all modal state
**Configuration**:
- `bookingModalEnabled`: Enable/disable booking modal
- `aboutModalEnabled`: Enable/disable about modal  
- `bookingModalTitle`: Customize booking modal title

### CTAButton (Recommended for New Buttons)
**Purpose**: Smart button that triggers modals
**Configuration**:
- `text`: Button text
- `action`: "booking" | "about" | "custom"
- `variant`: "primary" | "secondary" | "outline"
- `size`: "small" | "medium" | "large"
- `customAction`: For custom actions (advanced)

### HeroSection, ProcessSection, Header (Auto-Updated)
**Purpose**: Your existing components now work with modals automatically
- All "Get Started" buttons → Open booking modal
- All "About" buttons → Open about modal

## 🚀 Quick Setup Instructions

### For a Complete Landing Page:
1. **Add ModalManager** first (required for modals to work)
2. **Add your sections**: HeroSection, ProcessSection, TestimonialsSection, etc.
3. **Add Header and Footer**
4. **All CTA buttons will automatically work!**

### For Custom Buttons:
1. **Add ModalManager** to page
2. **Use CTAButton** instead of regular buttons
3. **Configure action**: "booking" or "about"
4. **Style as needed**

## 💡 Pro Tips

### Multiple Variants
- **Booking CTA**: Set action to "booking"
- **About CTA**: Set action to "about"  
- **Different styles**: Use variant "primary", "secondary", "outline"
- **Different sizes**: small, medium, large

### Custom Styling
- **Add className** prop for custom CSS
- **Mix with Plasmic styles** for fine-tuning
- **Use different variants** for visual hierarchy

### Advanced Usage
- **Custom Actions**: Use customAction prop for advanced functionality
- **Event Handlers**: Still available for custom logic
- **Conditional Modals**: Toggle modal availability with boolean props

## 🔧 Troubleshooting

### "Button doesn't open modal"
- ✅ **Check ModalManager** is on the page
- ✅ **Check action** is set to "booking" or "about"
- ✅ **Check enabled flags** in ModalManager

### "Modal appears but is blank"
- ✅ **BookingModal** uses iframe - check internet connection
- ✅ **AboutModal** should show Chris Elliott's info

### "Multiple modals conflict"
- ✅ **Only place one ModalManager** per page
- ✅ **All buttons will share the same modal state**

## 🎉 What You Can Now Do

- ✅ **Any button can open modals** with simple configuration
- ✅ **No code changes needed** to add new CTA buttons
- ✅ **Existing components work automatically**
- ✅ **Full styling control** through Plasmic
- ✅ **Easy A/B testing** of different button styles/text
- ✅ **Consistent modal behavior** across all pages

## 📞 Next Steps

1. **Test in Plasmic Studio**: Add ModalManager + CTAButton to see it work
2. **Create Templates**: Save your favorite button configurations
3. **Build Landing Pages**: Mix and match components with working CTAs
4. **Deploy**: Everything works the same in production

Your modal system is now complete and ready to use! 🚀 