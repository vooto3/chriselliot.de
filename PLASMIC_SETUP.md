# 🎨 Plasmic Integration Setup Guide

## Step-by-Step Instructions to Use Your Landing Page in Plasmic

### 1. Start Your Development Server
```bash
npm run dev
```
Your site will be available at: `http://localhost:3000`

### 2. Create a New Plasmic Project
1. Go to [Plasmic Studio](https://studio.plasmic.app)
2. Click "Create new project"
3. Choose "Blank project"
4. Give it a name (e.g., "Landing Page Templates")

### 3. Get Your Project Credentials
1. In your new Plasmic project, click the project settings gear icon
2. Go to "General" tab
3. Copy your **Project ID** and **Public API Token**

### 4. Configure Your Next.js Project
Replace the placeholder values in these files:

**In `plasmic-init.ts`:**
```typescript
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'YOUR_ACTUAL_PROJECT_ID_HERE', // ← Replace this
      token: 'YOUR_ACTUAL_PUBLIC_TOKEN_HERE', // ← Replace this
    },
  ],
  preview: false,
});
```

**In `next.config.js`:**
```javascript
module.exports = plasmic({
  projects: [
    {
      id: 'YOUR_ACTUAL_PROJECT_ID_HERE', // ← Replace this
      token: 'YOUR_ACTUAL_PUBLIC_TOKEN_HERE', // ← Replace this
    },
  ],
});
```

### 5. Configure Code Components Host in Plasmic
1. In Plasmic Studio, click the project settings gear icon
2. Go to "Code components" tab
3. Set the **Host URL** to: `http://localhost:3000/plasmic-host`
4. Click "Refresh" to load your components

### 6. Your Available Components
After completing the setup, these components will be available in Plasmic:

🏠 **HeroSection** - Main hero with pricing and CTA
📋 **ProcessSection** - 9-step process breakdown  
💬 **TestimonialsSection** - Client testimonials carousel
🔗 **Header** - Navigation header
👣 **Footer** - Site footer
📱 **BookingModal** - Booking form modal
ℹ️ **AboutModal** - About information modal

### 7. Using Components in Plasmic
1. In Plasmic Studio, click the "+" button to add components
2. Look for the "Code components" section
3. Drag and drop your landing page sections
4. Configure props in the right panel
5. Style and arrange as needed

### 8. Creating Templates
1. Build your page using the components
2. Save as a template for reuse
3. Share templates across projects

### 9. Production Deployment
When deploying to production:
1. Update the code components host URL to your production domain
2. Set `preview: false` in `plasmic-init.ts`
3. Deploy normally

## 🔧 Troubleshooting

### Components Not Showing Up?
- Check that your dev server is running on port 3000
- Verify the host URL is set correctly in Plasmic
- Click "Refresh" in the code components tab

### Props Not Working?
- Plasmic auto-detects component props
- Event handlers (onClick, etc.) are automatically available
- Boolean props can be toggled in the right panel

### Styling Issues?
- Your Tailwind classes are preserved
- Custom CSS animations will work
- Images and assets are included

## 🚀 Next Steps

1. **Build Landing Pages**: Use your components to create multiple landing page variations
2. **A/B Testing**: Create different versions to test what converts best  
3. **Team Collaboration**: Share templates with team members
4. **Content Management**: Let non-developers update content through Plasmic

## 📞 Need Help?
- [Plasmic Documentation](https://docs.plasmic.app/)
- [Code Components Guide](https://docs.plasmic.app/learn/code-components-ref/)
- [Next.js Integration](https://docs.plasmic.app/learn/nextjs-quickstart/) 