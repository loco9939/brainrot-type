import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 환경 변수 설정
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:5050',
  },
  
  // 이미지 도메인 설정
  images: {
    domains: ['localhost', 'vercel.app', 'cdn.jsdelivr.net'],
  },
};

export default nextConfig;
