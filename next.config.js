/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your Next.js configuration options here, for example:
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],

    /* domains: [
        "img.daisyui.com",
        "i.stack.imgur.com",
        "img.daisyui.com",
        "img.freepik.com",
        "www.freepnglogos.com",
        "cdn-icons-png.flaticon.com",
        "avatars.githubusercontent.com",
        "lh3.googleusercontent.com",
      ], */
  },
  /* reactStrictMode: true, */
};

module.exports = nextConfig;
