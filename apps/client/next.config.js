/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

module.exports = withLess({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.chucknorris.io',
      },
    ],
  },
});
