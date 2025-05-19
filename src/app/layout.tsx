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
  description: "간단한 테스트로 알아보는 당신의 밈 캐릭터 유형. 트랄랄레로, 3발 상어, 브레인터짐, 의미 없음, 혼돈의 세계로 초대합니다.",
  keywords: ["브레인롯", "밈", "테스트", "인격 테스트", "3발 상어", "트랄랄레로", "브레인터짐", "밈 문화"],
  openGraph: {
    title: "너의 브레인롯 유형은? | 브레인롯 인격 테스트",
    description: "간단한 테스트로 알아보는 당신의 밈 캐릭터 유형",
    url: "/",
    siteName: "브레인롯 인격 테스트",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "너의 브레인롯 유형은? | 브레인롯 인격 테스트",
    description: "간단한 테스트로 알아보는 당신의 밈 캐릭터 유형",
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
