# ✅ Deployment Checklist

## Pre-Deployment
- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] All components visible in Plasmic Studio (localhost)
- [ ] Domain registered and DNS configured

## Deploy to Production
- [ ] Choose hosting platform:
  - [ ] **Vercel (Recommended):** `npm run deploy:vercel`
  - [ ] **Netlify:** Connect GitHub repo
  - [ ] **Other:** Manual build and upload

## Configure Custom Domain
- [ ] Add custom domain in hosting dashboard
- [ ] Configure DNS records (A/CNAME)
- [ ] SSL certificate active
- [ ] Test site loads at custom domain

## Update Plasmic Configuration
- [ ] Go to Plasmic Studio project settings
- [ ] Update Code Components Host URL to: `https://yourdomain.com/plasmic-host`
- [ ] Click "Refresh" to load components
- [ ] Test all components load properly

## Client Handoff
- [ ] Invite client to Plasmic project with Editor permissions
- [ ] Provide client credentials
- [ ] Share `CLIENT_GUIDE.md` with client
- [ ] Schedule handoff training session
- [ ] Test client can edit and publish

## Final Verification
- [ ] Site loads fast (< 3 seconds)
- [ ] Mobile responsive
- [ ] All images load
- [ ] Contact forms work
- [ ] Client can edit through Plasmic Studio
- [ ] Client can publish changes

## Post-Deployment
- [ ] Set up monitoring (optional)
- [ ] Create content backup workflow
- [ ] Document any custom configurations
- [ ] Provide ongoing support contact

---

**🎉 Deployment Complete!**

Your client can now edit their website independently through Plasmic Studio without any technical knowledge required. 