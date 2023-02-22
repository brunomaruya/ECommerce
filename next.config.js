/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: 'mongobd://localhost:3000/next13-auth',
    NEXTAUTH_SECRET: 'codingwithabbas',
  },
};

module.exports = nextConfig;
