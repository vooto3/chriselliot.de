# 🚀 Custom Domain Deployment & Client Handoff Guide

## Overview
This guide will help you deploy your Next.js + Plasmic project to a custom domain and hand it off to your client for ongoing editing without requiring local development.

## 🌐 Step 1: Deploy to Production with Custom Domain

### Option A: Vercel (Recommended)

1. **Connect to Vercel:**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Add Custom Domain:**
   - Go to your Vercel dashboard
   - Select your project → Settings → Domains
   - Add your custom domain (e.g., `yoursite.com`)
   - Configure DNS records as instructed

3. **Environment Variables:**
   - In Vercel dashboard → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://yoursite.com`

### Option B: Netlify

1. **Deploy to Netlify:**
   - Connect your GitHub repo to Netlify
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Add Custom Domain:**
   - Site settings → Domain management
   - Add custom domain and configure DNS

### Option C: Any Hosting Provider

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `.next` folder** to your hosting provider

3. **Configure domain** through your hosting provider's dashboard

## 🎨 Step 2: Configure Plasmic for Production

### Update Code Components Host URL

1. **In Plasmic Studio:**
   - Go to your project settings → "Code components" tab
   - Update Host URL from `http://localhost:3000/plasmic-host` to:
     ```
     https://yoursite.com/plasmic-host
     ```
   - Click "Refresh" to load components from production

2. **Verify Components Load:**
   - All your landing page components should appear
   - Test adding them to a page in Plasmic Studio

## 👥 Step 3: Client Handoff Setup

### Create Client Documentation

I'll create a client-specific guide that explains how to edit the site without coding.

### Set Up Client Access

1. **Plasmic Project Sharing:**
   - In Plasmic Studio → Project settings → "Team" tab
   - Invite your client with "Editor" permissions
   - They can edit content, swap images, modify text, etc.

2. **Client Training:**
   - Schedule a screen-sharing session to show basic editing
   - Provide the client guide (see CLIENT_GUIDE.md)

## 🔧 Step 4: Production Optimization

### Update Next.js Configuration

The site is already optimized, but ensure these settings for production:

1. **In `plasmic-init.ts`** - Set preview mode for client editing:
   ```typescript
   preview: true, // Keep true for client editing
   ```

2. **Performance:**
   - Images are already optimized (WebP, lazy loading)
   - Minimal external dependencies
   - Fast loading components

## 🛡️ Step 5: Security & Maintenance

### Access Control
- Client only needs Plasmic Studio access
- No server access required
- No code access needed

### Updates
- Code updates: You deploy new versions
- Content updates: Client handles through Plasmic
- Design updates: Client can modify through Plasmic

## 📱 Step 6: Content Management Workflow

### For Your Client:
1. **Text Changes:** Edit directly in Plasmic Studio
2. **Image Updates:** Upload new images in Plasmic
3. **Layout Changes:** Drag and drop components
4. **Styling:** Use Plasmic's visual editor
5. **Publish:** One-click publish to live site

### For You (Developer):
1. **Code Updates:** Push to repository → Auto-deploys
2. **New Features:** Develop locally → Deploy
3. **Component Updates:** Update code → Client gets new features automatically

## 🎯 Benefits of This Setup

### For Client:
- ✅ No technical knowledge required
- ✅ Real-time preview of changes
- ✅ Immediate publishing to live site
- ✅ Visual, drag-and-drop editing
- ✅ Mobile-responsive automatically

### For Developer:
- ✅ No ongoing maintenance for content changes
- ✅ Client independence
- ✅ Easy to push code updates when needed
- ✅ Professional handoff process

## 🚨 Important Notes

1. **Domain Configuration:**
   - Ensure SSL certificate is active
   - Test CORS headers for Plasmic integration

2. **Client Training:**
   - Show them how to edit text, images, and basic layouts
   - Explain the publish process
   - Provide support contact information

3. **Backup Strategy:**
   - Plasmic automatically saves versions
   - Your code is version-controlled in Git
   - Client can revert changes in Plasmic if needed

## 📞 Next Steps

1. Choose your hosting platform (Vercel recommended)
2. Deploy with your custom domain
3. Update Plasmic host URL to production
4. Invite client to Plasmic project
5. Schedule handoff meeting
6. Provide client with the CLIENT_GUIDE.md

Your client will be able to edit their site completely independently through Plasmic Studio! 🎉 