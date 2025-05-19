'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Question, Option } from '@/data/questions';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

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
  const [selectedOption, setSelectedOption] = useState<string | null>(selectedOptionId);
  const progress = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    onSelectOption(question.id, optionId);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete();
    } else {
      onNext();
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            질문 {currentIndex + 1}/{totalQuestions}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        <CardTitle className="mt-4 text-xl">{question.text}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedOption || ''}
          className="space-y-3"
          onValueChange={handleOptionSelect}
        >
          {question.options.map((option) => (
            <div
              key={option.id}
              className={cn(
                'flex items-center space-x-2 rounded-md border p-4 transition-colors',
                selectedOption === option.id
                  ? 'border-primary bg-primary/10'
                  : 'border-input hover:bg-accent/10'
              )}
            >
              <RadioGroupItem value={option.id} id={option.id} className="sr-only" />
              <Label
                htmlFor={option.id}
                className="flex-1 cursor-pointer font-medium"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={currentIndex === 0}
        >
          이전
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selectedOption}
        >
          {isLastQuestion ? '결과 보기' : '다음'}
        </Button>
      </CardFooter>
    </Card>
  );
}
