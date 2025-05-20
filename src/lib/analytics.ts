// Google Analytics 이벤트 추적을 위한 향상된 유틸리티 함수

// GA4 이벤트 전송 유틸리티 함수
const sendGAEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    try {
      // 타임스탬프 추가
      const eventParams = {
        ...params,
        timestamp: new Date().toISOString(),
        page_location: window.location.href,
        page_title: document.title,
      };
      
      console.log(`GA4 이벤트 전송: ${eventName}`, eventParams);
      (window as any).gtag("event", eventName, eventParams);
    } catch (error) {
      console.error("GA4 이벤트 전송 실패:", error);
    }
  } else {
    console.warn("GA4가 초기화되지 않았습니다.");
  }
};

// 페이지 조회 이벤트 추적
export const trackPageView = (pageTitle?: string, pagePath?: string) => {
  sendGAEvent("page_view", {
    page_title: pageTitle || document.title,
    page_path: pagePath || window.location.pathname,
  });
};

// 결과 유형 이벤트 추적
export const trackResultType = (resultType: string) => {
  sendGAEvent("result_type", {
    result_type: resultType,
    event_category: "results",
    event_label: resultType,
  });
};

// 공유 버튼 클릭 이벤트 추적
export const trackShareClick = (platform: string) => {
  sendGAEvent("share", {
    method: platform,
    content_type: "result",
    event_category: "engagement",
    event_label: `share_${platform}`,
  });
};

// 퀴즈 시작 이벤트 추적
export const trackQuizStart = () => {
  sendGAEvent("quiz_start", {
    event_category: "engagement",
    event_label: "quiz_started",
  });
};

// 퀴즈 완료 이벤트 추적
export const trackQuizComplete = () => {
  sendGAEvent("quiz_complete", {
    event_category: "engagement",
    event_label: "quiz_completed",
  });
};

// 사용자 세션 시작 추적
export const trackSessionStart = () => {
  sendGAEvent("session_start", {
    event_category: "session",
  });
};

// 에러 이벤트 추적
export const trackError = (errorMessage: string, errorSource: string) => {
  sendGAEvent("error", {
    error_message: errorMessage,
    error_source: errorSource,
    event_category: "error",
  });
};
