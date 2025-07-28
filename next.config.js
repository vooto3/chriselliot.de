/** @type {import('next').NextConfig} */
const { plasmic } = require('@plasmicapp/loader-nextjs');

const nextConfig = {
  // Enable static optimization
  output: 'standalone',

  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'studio.plasmic.app'],
    formats: ['image/webp', 'image/avif'],
  },

  // Headers for Plasmic integration
  async headers() {
    return [
      {
        source: '/plasmic-host',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://studio.plasmic.app',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

// Wrap with Plasmic loader config
module.exports = plasmic({
  projects: [
    {
      id: '5DifLAavefmKnBGRQAQW5E',     // ← Replace this
      token: 'EEb0zElX2ACpZBgKmQOljA6kyBLJr16r0HDijxDdz38gvKMKqGxCBuLAWKj6Jd7QMtqNCDYmiEuO8mLO0tXXw' // ← Replace this
    }
  ],
})(nextConfig);
