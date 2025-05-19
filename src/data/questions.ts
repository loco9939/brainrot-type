// 질문 타입 정의
export interface Question {
  id: number;
  text: string;
  options: Option[];
}

// 옵션 타입 정의
export interface Option {
  id: string;
  text: string;
  value: string; // 어떤 유형에 가중치를 줄지 결정 (예: "shark", "frog" 등)
  score: number; // 해당 유형에 얼마나 가중치를 줄지 결정 (1-5)
}

// 질문 데이터
export const questions: Question[] = [
  {
    id: 1,
    text: "친구들이 당신을 부르는 별명은?",
    options: [
      { id: "1-1", text: "아무말 대잔치", value: "shark", score: 5 },
      { id: "1-2", text: "밈 장인", value: "frog", score: 5 },
      { id: "1-3", text: "AI 덕후", value: "tts", score: 5 },
      { id: "1-4", text: "논리왕", value: "circuit", score: 5 },
    ],
  },
  {
    id: 2,
    text: "SNS에서 가장 많이 하는 활동은?",
    options: [
      { id: "2-1", text: "랜덤한 밈 만들기", value: "shark", score: 4 },
      { id: "2-2", text: "트렌드 따라하기", value: "frog", score: 4 },
      { id: "2-3", text: "AI 생성 컨텐츠 공유", value: "tts", score: 4 },
      { id: "2-4", text: "진지한 글에 밈으로 댓글달기", value: "serious", score: 4 },
    ],
  },
  {
    id: 3,
    text: "스트레스 받을 때 당신은?",
    options: [
      { id: "3-1", text: "의미 없는 단어 반복하기", value: "shark", score: 3 },
      { id: "3-2", text: "개구리 밈 보면서 웃기", value: "frog", score: 5 },
      { id: "3-3", text: "TTS로 웃긴 문장 만들기", value: "tts", score: 5 },
      { id: "3-4", text: "상황을 분석하고 의미 찾기", value: "analyst", score: 4 },
    ],
  },
  {
    id: 4,
    text: "친구가 심각한 고민을 털어놓을 때 당신의 반응은?",
    options: [
      { id: "4-1", text: "갑자기 '3발 상어'로 화제 전환", value: "shark", score: 5 },
      { id: "4-2", text: "진지하게 들어주다가 적절한 밈으로 위로", value: "serious", score: 5 },
      { id: "4-3", text: "논리적으로 해결책 제시하기", value: "circuit", score: 4 },
      { id: "4-4", text: "철학적인 질문으로 더 깊은 대화 유도", value: "analyst", score: 5 },
    ],
  },
  {
    id: 5,
    text: "당신이 가장 좋아하는 인터넷 컨텐츠는?",
    options: [
      { id: "5-1", text: "의미 없는 짧은 밈 영상", value: "shark", score: 4 },
      { id: "5-2", text: "개굴개굴 개구리 밈", value: "frog", score: 5 },
      { id: "5-3", text: "AI 음성으로 읽는 웃긴 글", value: "tts", score: 5 },
      { id: "5-4", text: "역설적이고 아이러니한 컨텐츠", value: "circuit", score: 4 },
    ],
  },
  {
    id: 6,
    text: "당신의 대화 스타일은?",
    options: [
      { id: "6-1", text: "갑자기 맥락 없는 드립", value: "shark", score: 5 },
      { id: "6-2", text: "트렌디한 밈 문구 자주 사용", value: "frog", score: 4 },
      { id: "6-3", text: "로봇 목소리 흉내내기", value: "tts", score: 4 },
      { id: "6-4", text: "겉은 장난, 속은 진지", value: "serious", score: 5 },
    ],
  },
  {
    id: 7,
    text: "당신의 브라우저 북마크에 가장 많은 것은?",
    options: [
      { id: "7-1", text: "이상한 밈 사이트들", value: "shark", score: 3 },
      { id: "7-2", text: "AI 음성 생성 서비스들", value: "tts", score: 5 },
      { id: "7-3", text: "프로그래밍 관련 사이트", value: "circuit", score: 5 },
      { id: "7-4", text: "철학/심리학 아티클", value: "analyst", score: 5 },
    ],
  },
  {
    id: 8,
    text: "친구들과 놀 때 당신은 주로?",
    options: [
      { id: "8-1", text: "랜덤한 드립으로 분위기 주도", value: "shark", score: 4 },
      { id: "8-2", text: "최신 밈으로 웃음 선사", value: "frog", score: 4 },
      { id: "8-3", text: "겉으로는 밈충, 속으로는 진지", value: "serious", score: 5 },
      { id: "8-4", text: "무의미한 대화에서 의미 찾기", value: "analyst", score: 4 },
    ],
  },
];
