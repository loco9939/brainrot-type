'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ResultType } from '@/data/results';
import { cn } from '@/lib/utils';

interface ResultCardProps {
  result: ResultType;
  onRestart: () => void;
  onShare: () => void;
}

export function ResultCard({ result, onRestart, onShare }: ResultCardProps) {
  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 text-6xl">
          {result.emoji}
        </div>
        <CardTitle className="text-2xl font-bold">
          당신은 <span className="text-primary">{result.title}</span> 입니다
        </CardTitle>
        <CardDescription className="mt-2 text-lg">
          {result.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative w-full h-64 overflow-hidden rounded-lg">
          {result.imageUrl ? (
            <Image
              src={result.imageUrl}
              alt={result.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-muted">
              <span className="text-6xl">{result.emoji}</span>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">특징:</h3>
          <ul className="space-y-2 pl-5 list-disc">
            {result.characteristics.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-muted">
          <h3 className="text-lg font-semibold mb-2">궁합:</h3>
          <p>{result.compatibility}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onShare} className="w-full sm:w-auto">
          결과 공유하기
        </Button>
        <Button variant="outline" onClick={onRestart} className="w-full sm:w-auto">
          다시 테스트하기
        </Button>
      </CardFooter>
    </Card>
  );
}
