"use client";

import { Button } from "@/components/ui/button";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ResultVoiceProps {
  voiceUrl?: string;
  autoPlay?: boolean;
}

export function ResultVoice({ voiceUrl, autoPlay = true }: ResultVoiceProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // 음성 파일이 없으면 아무것도 하지 않음
    if (!voiceUrl) return;

    // 오디오 요소 생성
    const audio = new Audio(voiceUrl);
    audioRef.current = audio;

    // 오디오 종료 시 상태 업데이트
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    // 자동 재생 시도는 하지 않음 - 브라우저 정책으로 인해 실패할 가능성이 높음
    // 대신 사용자가 직접 재생 버튼을 클릭하도록 유도

    // 컴포넌트 언마운트 시 오디오 정리
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [voiceUrl, autoPlay]);

  // 재생/일시정지 토글
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("재생 실패:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // 음소거 토글
  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(!isMuted);
  };

  // 음성 파일이 없으면 아무것도 렌더링하지 않음
  if (!voiceUrl) return null;

  return (
    <div className="flex items-center space-x-2 mt-2">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={togglePlay}
        aria-label={isPlaying ? "일시정지" : "재생"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={toggleMute}
        aria-label={isMuted ? "음소거 해제" : "음소거"}
        disabled={!isPlaying}
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </Button>

      <span className="text-xs text-muted-foreground">
        {isPlaying ? "음성 재생 중..." : "결과 음성 듣기"}
      </span>
    </div>
  );
}
