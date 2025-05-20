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
import { resultTypes } from "@/data/results";
import Image from "next/image";
import Link from "next/link";

// 결과 유형 배열 생성
const resultArray = Object.values(resultTypes);

export default function Home() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 dark:from-neutral-900 dark:to-neutral-950 relative overflow-hidden">
        {/* 배경 장식 요소들 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* 배경 그라데이션 원 */}

          {/* 배경 이미지 요소들 */}
          {resultArray.map((result, index) => {
            // 랜덤하게 애니메이션 선택
            const animations = ["animate-float", "animate-float-reverse"];
            const randomAnimation = animations[index % 2];
            const randomSize = 0.7 + Math.random() * 0.6; // 더 큰 크기 범위
            const randomOpacity = 0.15 + Math.random() * 0.1; // 더 높은 투명도

            // 중앙 콘텐츠를 피하는 위치 계산
            // 중앙 영역을 피하기 위해 4개의 영역으로 나누고 하나를 선택
            const areas = [
              // 왼쪽 상단
              { top: 5, left: 5, maxTop: 30, maxLeft: 30 },
              // 오른쪽 상단
              { top: 5, left: 70, maxTop: 30, maxLeft: 95 },
              // 왼쪽 하단
              { top: 70, left: 5, maxTop: 95, maxLeft: 30 },
              // 오른쪽 하단
              { top: 70, left: 70, maxTop: 95, maxLeft: 95 },
            ];

            // 인덱스에 따라 영역 배분 (고르게 분포되도록)
            const area = areas[index % areas.length];

            // 선택된 영역 내에서 랜덤 위치 계산
            const top = area.top + Math.random() * (area.maxTop - area.top);
            const left = area.left + Math.random() * (area.maxLeft - area.left);

            return (
              <div
                key={result.id}
                className={`absolute ${randomAnimation}`}
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  animationDelay: `${index * 0.7}s`,
                  opacity: randomOpacity,
                  zIndex: index % 2 === 0 ? 0 : 1,
                }}
              >
                <Pulse>
                  <div
                    className="relative w-32 h-32 md:w-48 md:h-48 transform transition-all duration-1000"
                    style={{
                      transform: `scale(${randomSize}) rotate(${
                        Math.random() * 20 - 10
                      }deg)`,
                    }}
                  >
                    {result.imageUrl ? (
                      <Image
                        src={result.imageUrl}
                        alt={result.title}
                        fill
                        className="object-cover drop-shadow-lg rounded-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-6xl">
                        {result.emoji}
                      </div>
                    )}
                  </div>
                </Pulse>
              </div>
            );
          })}
        </div>

        <main className="container max-w-4xl mx-auto flex flex-col items-center justify-center gap-8 py-10 relative z-10">
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

          {/* 캐릭터 이미지 갤러리 */}
          <FadeIn delay={0.2}>
            {resultArray.map((result) => (
              <StaggerItem key={result.id}>
                <div
                  className="aspect-square relative overflow-hidden rounded-lg group hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-md hover:shadow-xl"
                  style={{
                    transformOrigin: "center",
                  }}
                >
                  {/* 이미지 */}
                  {result.imageUrl ? (
                    <Image
                      src={result.imageUrl}
                      alt={result.title}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 text-4xl">
                      {result.emoji}
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="w-full max-w-lg relative overflow-hidden border-2 border-white/30 dark:border-white/10 shadow-xl bg-white/80 dark:bg-black/50 backdrop-blur-md">
              <CardHeader className="relative z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-2xl animate-bounce">🤓</span>
                </div>

                <CardTitle className="text-3xl md:text-4xl text-center font-bold mt-4">
                  브레인롯 인격 테스트
                </CardTitle>
                <CardDescription className="text-center text-base md:text-lg">
                  10개의 질문으로 알아보는 당신의 브레인롯 유형
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 text-center relative z-10">
                <StaggerContainer>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {resultArray.map((result) => (
                      <StaggerItem key={result.id}>
                        <span
                          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all hover:scale-105 hover:shadow-md"
                          style={{
                            background: `linear-gradient(to right, rgba(76, 175, 80, 0.1) 0%, rgba(255, 152, 0, 0.1) 100%)`,
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                          }}
                        >
                          <span>{result.emoji}</span>
                          <span className="text-primary dark:text-primary-light">
                            {result.title.split(" ")[0]}
                          </span>
                        </span>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>

                <div className="relative">
                  <p className="text-lg md:text-xl font-medium">
                    혼돈과 밈의 세계에서 당신은 어떤 유형일까요?
                  </p>
                </div>

                <div className="p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    재미있는 질문에 답하고 나의 유형을 확인해보세요!
                    <br /> 여러분의 유형은 어떤 밈 캐릭터일까요?
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex justify-center pb-6 relative z-10">
                <Link href="/quiz" passHref>
                  <div className="relative group">
                    <div className="absolute -inset-0.5  rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                    <Pulse>
                      <Button
                        size="lg"
                        className="relative px-8 py-7 border-0 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        테스트 시작하기
                      </Button>
                    </Pulse>
                  </div>
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
