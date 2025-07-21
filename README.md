# Chris Elliott Landing Page - Plasmic Integration

This Next.js project contains a landing page for Chris Elliott's Dubai business setup services, integrated with Plasmic for visual editing and code component reuse.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Plasmic Integration

#### Step A: Create a New Plasmic Project
1. Go to [plasmic.app](https://studio.plasmic.app)
2. Create a new blank project
3. Copy your Project ID and Public API Token from the project settings

#### Step B: Configure Your Project
1. Replace the placeholder values in `plasmic-init.ts`:
   - `REPLACE_WITH_YOUR_PROJECT_ID` with your actual Plasmic project ID
   - `REPLACE_WITH_YOUR_PUBLIC_TOKEN` with your actual Plasmic public API token

2. Replace the same values in `next.config.js`

#### Step C: Set up Code Components Host
1. Start your development server:
   ```bash
   npm run dev
   ```

2. In your Plasmic project settings, set the code components host URL to:
   ```
   http://localhost:3000/plasmic-host
   ```

3. Your landing page components will now be available as code components in Plasmic:
   - HeroSection
   - ProcessSection
   - TestimonialsSection
   - Header
   - Footer
   - BookingModal
   - AboutModal

## 📦 Available Components

### HeroSection
- **Purpose**: Main hero section with pricing and CTA
- **Props**: `onGetStartedClick` (event handler)

### ProcessSection
- **Purpose**: 9-step process breakdown
- **Props**: `onGetStartedClick` (event handler)

### TestimonialsSection
- **Purpose**: Client testimonials carousel
- **Props**: None (self-contained)

### Header
- **Purpose**: Navigation header
- **Props**: 
  - `onGetStartedClick` (event handler)
  - `onAboutClick` (event handler)

### Footer
- **Purpose**: Site footer
- **Props**: None

### BookingModal & AboutModal
- **Purpose**: Modal dialogs
- **Props**: 
  - `isOpen` (boolean)
  - `onClose` (event handler)

## 🎨 Styling

The project uses:
- **TailwindCSS** for utility-first styling
- **Custom CSS animations** for fade-in and slide-up effects
- **Gradient utilities** for brand colors
- **Lucide React** for icons

## 🔧 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page component
│   └── plasmic-host/
│       └── page.tsx         # Plasmic code components host
├── components/              # Reusable React components
│   ├── AboutModal.tsx
│   ├── BookingModal.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ProcessSection.tsx
│   └── TestimonialsSection.tsx
├── public/                  # Static assets
├── plasmic-init.ts          # Plasmic configuration
├── next.config.js           # Next.js config with Plasmic
└── package.json             # Dependencies
```

## 🔗 Using Components in Plasmic

Once set up:

1. **Insert Code Components**: In Plasmic Studio, use the "+" button and select "Code Components" to add your landing page sections

2. **Configure Props**: Each component has configurable props in the right panel

3. **Create Templates**: Save your configured components as templates for reuse

4. **Mix and Match**: Combine your code components with Plasmic's visual components

## 🌐 Deployment

When deploying to production:

1. Update the code components host URL in Plasmic to your production domain
2. Set `preview: false` in `plasmic-init.ts` for production builds
3. Deploy as usual with your preferred hosting provider

## 📖 Learn More

- [Plasmic Documentation](https://docs.plasmic.app/)
- [Next.js + Plasmic Quickstart](https://docs.plasmic.app/learn/nextjs-quickstart/)
- [Code Components Reference](https://docs.plasmic.app/learn/code-components-ref/) 