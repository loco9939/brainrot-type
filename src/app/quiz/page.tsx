'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { QuestionCard } from '@/components/QuestionCard';
import { useQuiz } from '@/context/QuizContext';
import { questions } from '@/data/questions';

export default function QuizPage() {
  const router = useRouter();
  const {
    currentQuestionIndex,
    answers,
    selectAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    completeQuiz,
    isComplete,
  } = useQuiz();

  // 퀴즈가 완료되면 결과 페이지로 이동
  useEffect(() => {
    if (isComplete) {
      router.push('/result');
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

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">너의 브레인롯 유형은?</h1>
      
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
    </div>
  );
}
