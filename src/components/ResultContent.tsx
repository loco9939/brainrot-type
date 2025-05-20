"use client";

import { ResultCard } from "@/components/ResultCard";
import { FadeIn, PageTransition, SlideDown } from "@/components/ui/animations";
import { useQuiz } from "@/context/QuizContext";
import { ResultTestType } from "@/data/results";
import { trackPageView, trackResultType, trackShareClick } from "@/lib/analytics";
import { getResultById } from "@/lib/logic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function ResultContent({
  initialTypeId,
}: {
  initialTypeId?: ResultTestType;
}) {
  const router = useRouter();
  const { resultTypeId: contextResultTypeId, restartQuiz } = useQuiz();
  const [isLoading, setIsLoading] = useState(true);
  const [shareSuccess, setShareSuccess] = useState(false);

  // 결과 타입 ID 결정 (URL 파라미터 또는 컨텍스트에서)
  const [resultTypeId, setResultTypeId] = useState<ResultTestType>("tralalero");

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

  // 결과 유형 추적 이벤트
  useEffect(() => {
    if (resultTypeId) {
      const result = getResultById(resultTypeId);
      // GA에 결과 유형 이벤트 전송
      trackResultType(result.title);
      
      // 결과 페이지 뷰 이벤트 추적
      trackPageView(
        `나는 ${result.title} 유형이에요! | 브레인롯 인격 테스트`, 
        `/result?type=${resultTypeId}`
      );
    }
  }, [resultTypeId]);

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

    // GA에 공유 버튼 클릭 이벤트 전송
    trackShareClick("share_button");

    // 공유 기능이 지원되는지 확인
    if (navigator.share) {
      try {
        await navigator.share({
          title: `나의 브레인롯 유형은 ${result.title}입니다!\n`,
          text: `\n${result.description}\n\n브레인롯 인격 테스트에서 확인하세요!`,
          url: url,
        });
        setShareSuccess(true);
        // 성공적인 공유 이벤트 추적
        trackShareClick("native_share_success");
      } catch (error) {
        console.error("공유 실패:", error);
      }
    } else {
      // 공유 기능이 지원되지 않는 경우 URL 복사
      navigator.clipboard.writeText(url).then(
        () => {
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 2000);
          // URL 복사 성공 이벤트 추적
          trackShareClick("url_copy_success");
        },
        (err) => {
          console.error("URL 복사 실패:", err);
        }
      );
    }
  };

  // 테스트 다시 시작
  const handleRestart = () => {
    // 테스트 재시작 이벤트 추적
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "restart_quiz");
    }
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
