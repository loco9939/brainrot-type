"use client";

import {
  FadeIn,
  PageTransition,
  Pulse,
  SlideDown,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animations";
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
    <PageTransition>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-neutral-50">
        <main className="container max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 py-10">
          <SlideDown>
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary">
                너의 브레인롯 유형은?
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                간단한 테스트로 알아보는 당신의 밈 캐릭터
              </p>
            </div>
          </SlideDown>

          <FadeIn delay={0.3}>
            <Card className="w-full max-w-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  브레인롯 인격 테스트
                </CardTitle>
                <CardDescription className="text-center">
                  15개의 질문으로 알아보는 당신의 브레인롯 유형
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <StaggerContainer>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <StaggerItem>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        🦈 트랄랄레로 트랄랄라형
                      </span>
                    </StaggerItem>
                    <StaggerItem>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        🐊 봄바르디로 크로코딜로형
                      </span>
                    </StaggerItem>
                    <StaggerItem>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        🏏 퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁 사후르형
                      </span>
                    </StaggerItem>
                    <StaggerItem>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        🐸 보네카 암발라부형
                      </span>
                    </StaggerItem>
                    <StaggerItem>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        🌳 브르르 브르르 파타핌형
                      </span>
                    </StaggerItem>
                    <StaggerItem>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        🍌 침판지니 바나니니
                      </span>
                    </StaggerItem>
                  </div>
                </StaggerContainer>
                <p className="text-muted-foreground">
                  혼돈과 밈의 세계에서 당신은 어떤 유형일까요?
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/quiz" passHref>
                  <Pulse>
                    <Button size="lg" className="w-full sm:w-auto">
                      테스트 시작하기
                    </Button>
                  </Pulse>
                </Link>
              </CardFooter>
            </Card>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="text-center text-sm text-muted-foreground mt-8">
              <p>트랄랄레로 | 브레인롯 | 퉁퉁퉁 사후르 | 의미 없음 </p>
              <p className="mt-2">© 2025 브레인롯 테스트</p>
            </div>
          </FadeIn>
        </main>
      </div>
    </PageTransition>
  );
}
