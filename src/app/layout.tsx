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
  title: "너의 브레인롯 유형은? | 브레인롯 인격 테스트",
  description: "간단한 테스트로 알아보는 당신의 밈 캐릭터 유형. 트랄랄레로, 3발 상어, 브레인터짐, 의미 없음, 혼돈의 세계로 초대합니다.",
  keywords: ["브레인롯", "밈", "테스트", "인격 테스트", "3발 상어", "트랄랄레로", "브레인터짐", "밈 문화"],
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
