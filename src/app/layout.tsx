import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { QuizProvider } from "@/context/QuizContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5050'),
  title: "너의 브레인롯 유형은? | 브레인롯 인격 테스트",
  description: "간단한 테스트로 알아보는 당신의 밈 캐릭터 유형. 트랄랄레로 트랄랄라, 봄바르디로 크로코딜로, 퉁퉁퉁퉁 사후르, 보네카 암발라부, 브르르 브르르 파타핌, 침판지니 바나니니의 세계로 초대합니다.",
  keywords: ["브레인롯", "밈", "테스트", "인격 테스트", "트랄랄레로 트랄랄라", "봄바르디로 크로코딜로", "퉁퉁퉁퉁 사후르", "보네카 암발라부", "브르르 브르르 파타핌", "침판지니 바나니니", "밈 문화"],
  openGraph: {
    title: "너의 브레인롯 유형은? | 브레인롯 인격 테스트",
    description: "간단한 테스트로 알아보는 당신의 밈 캐릭터 유형: 트랄랄레로 트랄랄라, 봄바르디로 크로코딜로, 퉁퉁퉁퉁 사후르, 보네카 암발라부, 브르르 브르르 파타핌, 침판지니 바나니니",
    url: "/",
    siteName: "브레인롯 인격 테스트",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "너의 브레인롯 유형은? | 브레인롯 인격 테스트",
    description: "간단한 테스트로 알아보는 당신의 밈 캐릭터 유형: 트랄랄레로 트랄랄라, 봄바르디로 크로코딜로, 퉁퉁퉁퉁 사후르, 보네카 암발라부, 브르르 브르르 파타핌, 침판지니 바나니니",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#4CAF50",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <QuizProvider>
          {children}
        </QuizProvider>
      </body>
    </html>
  );
}
