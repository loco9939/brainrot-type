"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-neutral-50">
      <main className="container max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 py-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            너의 브레인롯 유형은?
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            간단한 테스트로 알아보는 당신의 밈 캐릭터
          </p>
        </div>

        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              브레인롯 인격 테스트
            </CardTitle>
            <CardDescription className="text-center">
              8개의 질문으로 알아보는 당신의 브레인롯 유형
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                🦈 3발 상어형
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                🐸 개굴브레인형
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                🐤 TTS 중독형
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                🤖 회로터짐형
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                🪿 의외의 진지충형
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                🐍 무의미 분석가형
              </span>
            </div>
            <p className="text-muted-foreground">
              혼돈과 밈의 세계에서 당신은 어떤 유형일까요?
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/quiz" passHref>
              <Button size="lg" className="w-full sm:w-auto">
                테스트 시작하기
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>트랄랄레로 | 3발 상어 | 브레인터짐 | 의미 없음 | 혼돈</p>
          <p className="mt-2">© 2025 브레인롯 테스트</p>
        </div>
      </main>
    </div>
  );
}
