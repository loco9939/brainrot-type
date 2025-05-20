import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 환경 변수 설정
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.VERCEL_URL
      ? process.env.VERCEL_URL
      : "https://brainrot-type-test.netlify.app",
  },

  // 이미지 도메인 설정
  images: {
    domains: [
      "localhost",
      "vercel.app",
      "cdn.jsdelivr.net",
      "windsurf.build",
      "brainrot-personality-test.windsurf.build",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
