'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ResultCard } from '@/components/ResultCard';
import { useQuiz } from '@/context/QuizContext';
import { getResultById } from '@/lib/logic';

export default function ResultPage() {
  const router = useRouter();
  const { resultTypeId, restartQuiz, isComplete } = useQuiz();
  const [shareSuccess, setShareSuccess] = useState(false);

  // 결과가 없으면 퀴즈 페이지로 리다이렉트
  useEffect(() => {
    if (!isComplete || !resultTypeId) {
      router.push('/quiz');
    }
  }, [isComplete, resultTypeId, router]);

  // 결과 유형이 없으면 로딩 표시
  if (!resultTypeId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl">결과를 불러오는 중...</p>
        </div>
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
        console.error('공유 실패:', error);
      }
    } else {
      // 공유 기능이 지원되지 않는 경우 URL 복사
      navigator.clipboard.writeText(url).then(
        () => {
          setShareSuccess(true);
          setTimeout(() => setShareSuccess(false), 2000);
        },
        (err) => {
          console.error('URL 복사 실패:', err);
        }
      );
    }
  };

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">당신의 브레인롯 유형 결과</h1>
      
      <div className="mb-8">
        <ResultCard
          result={result}
          onRestart={restartQuiz}
          onShare={handleShare}
        />
      </div>
      
      {shareSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          URL이 복사되었습니다!
        </div>
      )}
    </div>
  );
}
