'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QuestionCard } from '@/components/QuestionCard';
import { useQuiz } from '@/context/QuizContext';
import { questions } from '@/data/questions';
import { trackQuizStart, trackQuizComplete } from '@/lib/analytics';
import { FadeIn, LoadingSpinner, PageTransition } from '@/components/ui/animations';

export default function QuizPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    currentQuestionIndex,
    answers,
    selectAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    completeQuiz,
    isComplete,
  } = useQuiz();

  // 퀴즈 시작 이벤트 추적
  useEffect(() => {
    // 페이지 로드 시 퀴즈 시작 이벤트 추적
    trackQuizStart();
  }, []);
  
  // 퀴즈가 완료되면 결과 페이지로 이동
  useEffect(() => {
    if (isComplete) {
      // 퀴즈 완료 이벤트 추적
      trackQuizComplete();
      
      setIsLoading(true);
      // 약간의 지연 시간을 두어 로딩 애니메이션을 보여줌
      setTimeout(() => {
        router.push('/result');
      }, 1000);
    }
  }, [isComplete, router]);

  // 현재 질문
  const currentQuestion = questions[currentQuestionIndex];
  
  // 현재 질문에 대한 사용자 응답 찾기
  const currentAnswer = answers.find(
    (answer) => answer.questionId === currentQuestion.id
  );
  
  // 마지막 질문인지 확인
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-3xl font-bold text-center mb-8">결과 계산 중...</h1>
        <LoadingSpinner size={60} />
        <p className="mt-4 text-muted-foreground">당신의 브레인롯 유형을 분석하고 있어요</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <FadeIn>
          <h1 className="text-3xl font-bold text-center mb-8">너의 브레인롯 유형은?</h1>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <QuestionCard
              question={currentQuestion}
              currentIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              selectedOptionId={currentAnswer?.selectedOptionId || null}
              onSelectOption={selectAnswer}
              onNext={goToNextQuestion}
              onPrevious={goToPreviousQuestion}
              onComplete={completeQuiz}
              isLastQuestion={isLastQuestion}
            />
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
