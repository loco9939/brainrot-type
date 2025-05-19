"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResultType } from "@/data/results";
import Image from "next/image";

interface ResultCardProps {
  result: ResultType;
  onRestart: () => void;
  onShare: () => void;
}

export function ResultCard({ result, onRestart, onShare }: ResultCardProps) {
  return (
    <Card className="w-full max-w-lg mx-auto shadow-md">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 text-6xl md:text-7xl animate-bounce-slow">
          {result.emoji}
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold">
          당신은 <span className="text-primary">{result.title}</span> 입니다
        </CardTitle>
        <CardDescription className="mt-3 text-base md:text-lg">
          {result.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-2">
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-sm">
          {result.imageUrl ? (
            <Image
              src={result.imageUrl}
              alt={result.title}
              fill
              className="object-contain"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-muted">
              <span className="text-7xl md:text-8xl">{result.emoji}</span>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <h3 className="text-lg md:text-xl font-semibold text-primary">
            특징:
          </h3>
          <ul className="space-y-2 pl-5 list-disc text-base md:text-lg">
            {result.characteristics.map((trait, index) => (
              <li key={index} className="leading-relaxed">
                {trait}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 md:p-5 rounded-lg bg-muted/60 border border-muted">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary">
            궁합:
          </h3>
          <p className="text-base md:text-lg">{result.compatibility}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center pt-4 pb-5">
        <Button
          onClick={onShare}
          className="w-full sm:w-auto text-base font-medium py-6 md:py-7"
        >
          결과 공유하기
        </Button>
        <Button
          variant="outline"
          onClick={onRestart}
          className="w-full sm:w-auto text-base py-6 md:py-7"
        >
          다시 테스트하기
        </Button>
      </CardFooter>
    </Card>
  );
}
