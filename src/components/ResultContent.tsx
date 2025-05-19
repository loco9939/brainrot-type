"use client";

import { ResultCard } from "@/components/ResultCard";
import { FadeIn, PageTransition, SlideDown } from "@/components/ui/animations";
import { useQuiz } from "@/context/QuizContext";
import { getResultById } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function ResultContent({
  initialTypeId,
}: {
  initialTypeId?: string | null;
}) {
  const router = useRouter();
  const { resultTypeId: contextResultTypeId, restartQuiz } = useQuiz();
  const [isLoading, setIsLoading] = useState(true);
  const [shareSuccess, setShareSuccess] = useState(false);

  // 결과 타입 ID 결정 (URL 파라미터 또는 컨텍스트에서)
  const [resultTypeId, setResultTypeId] = useState<string | null>(null);

  useEffect(() => {
    // URL 파라미터에서 타입 ID가 있으면 사용, 없으면 컨텍스트에서 가져옴
    if (initialTypeId) {
      setResultTypeId(initialTypeId);
    } else if (contextResultTypeId) {
      setResultTypeId(contextResultTypeId);
    } else {
      // 결과가 없으면 홈으로 리다이렉트
      router.push("/");
      return;
    }

    setIsLoading(false);
  }, [initialTypeId, contextResultTypeId, router]);

  // 결과 유형에 따른 쿼리 파라미터 추가
  useEffect(() => {
    if (resultTypeId && typeof window !== "undefined") {
      const result = getResultById(resultTypeId);
      const url = new URL(window.location.href);
      url.searchParams.set("type", resultTypeId);
      url.searchParams.set("title", result.title);
      url.searchParams.set("emoji", result.emoji);

      // URL 업데이트 (페이지 새로고침 없이)
      window.history.replaceState({}, "", url.toString());
    }
  }, [resultTypeId]);

  // 로딩 중이거나 결과가 없으면 로딩 표시
  if (isLoading || !resultTypeId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  const result = getResultById(resultTypeId);

  // 결과 공유 함수
  const handleShare = async () => {
    // 현재 URL
    const url = window.location.href;

    // 공유 기능이 지원되는지 확인
    if (navigator.share) {
      try {
        await navigator.share({
          title: `나의 브레인롯 유형은 ${result.title}입니다!`,
          text: `${result.description}`,
          url: url,
        });
        setShareSuccess(true);
      } catch (error) {
        console.error("공유 실패:", error);
      }
    } else {
      // 공유 기능이 지원되지 않는 경우 URL 복사
      navigator.clipboard.writeText(url).then(
        () => {
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 2000);
        },
        (err) => {
          console.error("URL 복사 실패:", err);
        }
      );
    }
  };

  // 테스트 다시 시작
  const handleRestart = () => {
    restartQuiz();
    router.push("/");
  };

  return (
    <PageTransition>
      <div className="container max-w-4xl mx-auto px-4 py-8 min-h-screen flex flex-col">
        <SlideDown>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            당신의 브레인롯 유형은
          </h1>
        </SlideDown>

        <FadeIn delay={0.3}>
          <ResultCard
            result={result}
            onRestart={handleRestart}
            onShare={handleShare}
          />
        </FadeIn>

        {shareSuccess && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
            URL이 복사되었습니다!
          </div>
        )}
      </div>
    </PageTransition>
  );
}
