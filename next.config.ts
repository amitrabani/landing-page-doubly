import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  async redirects() {
    return [
      {
        source: '/tools/time-blindness-clock',
        destination: '/tools/visual-timer',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
