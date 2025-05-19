'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { questions } from '../data/questions';
import { UserAnswer, calculateResult } from '../lib/logic';

// 컨텍스트 타입 정의
interface QuizContextType {
  currentQuestionIndex: number;
  answers: UserAnswer[];
  resultTypeId: string | null;
  isComplete: boolean;
  
  // 액션
  selectAnswer: (questionId: number, optionId: string) => void;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  restartQuiz: () => void;
  completeQuiz: () => void;
}

// 기본값 생성
const defaultContext: QuizContextType = {
  currentQuestionIndex: 0,
  answers: [],
  resultTypeId: null,
  isComplete: false,
  
  selectAnswer: () => {},
  goToNextQuestion: () => {},
  goToPreviousQuestion: () => {},
  restartQuiz: () => {},
  completeQuiz: () => {},
};

// 컨텍스트 생성
const QuizContext = createContext<QuizContextType>(defaultContext);

// 컨텍스트 훅
export const useQuiz = () => useContext(QuizContext);

// 컨텍스트 제공자 컴포넌트
export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [resultTypeId, setResultTypeId] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  // 답변 선택 함수
  const selectAnswer = (questionId: number, optionId: string) => {
    const existingAnswerIndex = answers.findIndex(
      (answer) => answer.questionId === questionId
    );

    if (existingAnswerIndex !== -1) {
      // 기존 답변 업데이트
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = {
        questionId,
        selectedOptionId: optionId,
      };
      setAnswers(updatedAnswers);
    } else {
      // 새 답변 추가
      setAnswers([...answers, { questionId, selectedOptionId: optionId }]);
    }
  };

  // 다음 질문으로 이동
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // 이전 질문으로 이동
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // 퀴즈 재시작
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResultTypeId(null);
    setIsComplete(false);
  };

  // 퀴즈 완료 및 결과 계산
  const completeQuiz = () => {
    // 모든 질문에 답변했는지 확인
    if (answers.length === questions.length) {
      // 결과 계산
      const options = questions.map(question => question.options);
      const result = calculateResult(answers, options);
      setResultTypeId(result);
      setIsComplete(true);
    }
  };

  // 컨텍스트 값
  const value: QuizContextType = {
    currentQuestionIndex,
    answers,
    resultTypeId,
    isComplete,
    selectAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    restartQuiz,
    completeQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
