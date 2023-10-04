/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "scontent.fjdh1-1.fna.fbcdn.net", "www.besteducationsikar.com", "cdn-media-1.freecodecamp.org", "thumbs.dreamstime.com", "soshace.com", "next.config.js", "images.prismic.io", "d33wubrfki0l68.cloudfront.net", "cdn.hashnode.com", "res.cloudinary.com", "www.freecodecamp.org", "blogger.googleusercontent.com", "tenten.vn", "internetingishard.netlify.app", "reactscript.com", "webdesign-trends.net", "reactjsexample.com", "vercel.com", "nextjs.org", "http://res.cloudinary.com"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
