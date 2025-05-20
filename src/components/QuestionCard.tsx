"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Question } from "@/data/questions";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOptionId: string | null;
  onSelectOption: (questionId: number, optionId: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onComplete: () => void;
  isLastQuestion: boolean;
}

export function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  selectedOptionId,
  onSelectOption,
  onNext,
  onPrevious,
  onComplete,
  isLastQuestion,
}: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    selectedOptionId
  );
  const progress = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  // 질문이 변경될 때마다 선택된 옵션 상태 업데이트
  useEffect(() => {
    // 현재 질문에 대한 선택된 옵션으로 상태 업데이트
    setSelectedOption(selectedOptionId);
  }, [question.id, selectedOptionId]); // 질문 ID가 변경될 때마다 실행
  // 옵션 선택 시 현재 선택된 옵션 상태 업데이트 및 부모 컴포넌트에 알림
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    onSelectOption(question.id, optionId);
  };

  const handleNext = () => {
    if (!selectedOption) {
      return; // 선택이 없으면 진행하지 않음
    }

    if (isLastQuestion) {
      onComplete();
    } else {
      onNext();
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground font-medium">
            질문 {currentIndex + 1}/{totalQuestions}
          </span>
        </div>
        <Progress value={progress} className="h-2.5 mb-4" />
        <CardTitle className="mt-2 text-xl md:text-2xl">
          {question.text}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <RadioGroup
          value={selectedOption || ""}
          className="space-y-3 md:space-y-4"
          onValueChange={handleOptionSelect}
        >
          {question.options.map((option) => (
            <div
              key={option.id}
              className={cn(
                "flex items-center space-x-2 rounded-lg border p-4 md:p-5 transition-all hover:scale-[1.01] cursor-pointer",
                selectedOption === option.id
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-input hover:bg-accent/5"
              )}
              onClick={() => handleOptionSelect(option.id)}
            >
              <RadioGroupItem
                value={option.id}
                id={option.id}
                className="sr-only"
              />
              <Label
                htmlFor={option.id}
                className="flex-1 cursor-pointer font-medium text-base md:text-lg"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between pt-4 pb-5 px-6">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="min-w-[80px] md:min-w-[100px]"
        >
          이전
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selectedOption}
          className="min-w-[80px] md:min-w-[100px] font-medium"
        >
          {isLastQuestion ? "결과 보기" : "다음"}
        </Button>
      </CardFooter>
    </Card>
  );
}
