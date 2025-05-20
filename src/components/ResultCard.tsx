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
        <CardTitle className="text-2xl mb-4 md:text-3xl font-bold">
          <span className="text-primary">{result.title}</span>
        </CardTitle>
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
        <CardDescription className="mt-3 text-base md:text-lg break-keep">
          {result.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 pt-2">
        <div className="space-y-3">
          <h3 className="text-lg md:text-xl font-semibold text-primary">
            특징
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
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            궁합
          </h3>

          <div className="grid grid-cols-1 gap-4 mt-4">
            {/* 잘 맞는 궁합 */}
            <div className="border border-green-200 bg-green-50/30 dark:bg-green-950/20 rounded-lg p-3">
              <h4 className="text-base font-medium text-green-600 dark:text-green-400 mb-2">
                잘 맞는 궁합
              </h4>
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 overflow-hidden rounded-full bg-muted flex-shrink-0">
                  {result.goodMatch.imageUrl ? (
                    <Image
                      src={result.goodMatch.imageUrl}
                      alt={result.goodMatch.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="text-xl">{result.goodMatch.emoji}</span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium">{result.goodMatch.title}</p>
                </div>
              </div>
              <p className="text-base md:text-lg mt-4 break-keep">
                {result.compatibility}
              </p>
            </div>

            {/* 안 맞는 궁합 */}
            <div className="border border-red-200 bg-red-50/30 dark:bg-red-950/20 rounded-lg p-3">
              <h4 className="text-base font-medium text-red-600 dark:text-red-400 mb-2">
                상극인 궁합
              </h4>
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12 overflow-hidden rounded-full bg-muted flex-shrink-0">
                  {result.badMatch.imageUrl ? (
                    <Image
                      src={result.badMatch.imageUrl}
                      alt={result.badMatch.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="text-xl">{result.badMatch.emoji}</span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-medium">{result.badMatch.title}</p>
                </div>
              </div>
              <p className="text-base md:text-lg mt-4 break-keep">
                {result.badCompatibility}
              </p>
            </div>
          </div>
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
