// Google Analytics 이벤트 추적을 위한 유틸리티 함수

// 결과 유형 이벤트 추적
export const trackResultType = (resultType: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'result_type', {
      result_type: resultType,
    });
  }
};

// 공유 버튼 클릭 이벤트 추적
export const trackShareClick = (platform: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'share_click', {
      platform: platform,
    });
  }
};

// 퀴즈 시작 이벤트 추적
export const trackQuizStart = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'quiz_start');
  }
};

// 퀴즈 완료 이벤트 추적
export const trackQuizComplete = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'quiz_complete');
  }
};
