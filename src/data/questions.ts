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
  value: string; // 어떤 유형에 가중치를 줄지 결정 (예: "tralalero", "bombardiro" 등)
  score: number; // 해당 유형에 얼마나 가중치를 줄지 결정 (1-5)
}

// 질문 데이터
export const questions: Question[] = [
  {
    id: 1,
    text: "친구들이랑 갈등 생겼을 때 나는...",
    options: [
      {
        id: "1-1",
        text: "💪 걍 내가 맞다는 걸 증명해버림",
        value: "sahuhr",
        score: 5,
      },
      {
        id: "1-2",
        text: "🧐 일단 멀리서 상황 파악하는 편",
        value: "bombardiro",
        score: 4,
      },
      {
        id: "1-3",
        text: "🔥 내 의견 확실하게 밀어붙이는 스타일",
        value: "patafim",
        score: 4,
      },
      {
        id: "1-4",
        text: "🌊 상황 봐가면서 유연하게 대처함",
        value: "ambalaboo",
        score: 4,
      },
    ],
  },
  {
    id: 2,
    text: "심심할 때 주로 뭐해?",
    options: [
      {
        id: "2-1",
        text: "👨‍👩‍👧 가족이랑 같이 노는 거 좋아함",
        value: "tralalero",
        score: 5,
      },
      {
        id: "2-2",
        text: "🧘 혼자서 취미 생활하는 게 짱임",
        value: "chimpanini",
        score: 5,
      },
      {
        id: "2-3",
        text: "🌿 자연 속에서 힐링하는 게 최고",
        value: "patafim",
        score: 5,
      },
      {
        id: "2-4",
        text: "🤣 친구들이랑 드립 치면서 노는 게 재밌음",
        value: "ambalaboo",
        score: 5,
      },
    ],
  },
  {
    id: 3,
    text: "내가 진짜 중요하게 생각하는 건?",
    options: [
      {
        id: "3-1",
        text: "💯 인생 성공하고 인정받는 거",
        value: "patafim",
        score: 4,
      },
      {
        id: "3-2",
        text: "💭 내 신념이랑 원칙 지키는 거",
        value: "bombardiro",
        score: 4,
      },
      {
        id: "3-3",
        text: "🛡️ 내 영역이랑 소중한 것들 지키는 거",
        value: "sahuhr",
        score: 5,
      },
      {
        id: "3-4",
        text: "🌈 다양한 경험하고 적응하는 능력",
        value: "chimpanini",
        score: 4,
      },
    ],
  },
  {
    id: 4,
    text: "위기 상황에서 난...",
    options: [
      {
        id: "4-1",
        text: "💯 자신감 뿜뿜하고 직접 해결사 됨",
        value: "tralalero",
        score: 4,
      },
      {
        id: "4-2",
        text: "🧩 거리 두고 전략적으로 접근함",
        value: "chimpanini",
        score: 5,
      },
      {
        id: "4-3",
        text: "👊 문제에 정면돌파하는 스타일",
        value: "sahuhr",
        score: 5,
      },
      {
        id: "4-4",
        text: "🔄 위기를 기회로 바꿔버림",
        value: "patafim",
        score: 4,
      },
    ],
  },
  {
    id: 5,
    text: "사람들이 날 처음 만나면 이렇게 생각한대...",
    options: [
      {
        id: "5-1",
        text: "✨ 자신감 넘치고 카리스마 있는 사람",
        value: "tralalero",
        score: 4,
      },
      {
        id: "5-2",
        text: "🤔 좀 독특하고 이해하기 어려운 느낌?",
        value: "bombardiro",
        score: 4,
      },
      {
        id: "5-3",
        text: "💫 강한 첫인상, 존재감 뿜뿜",
        value: "sahuhr",
        score: 4,
      },
      {
        id: "5-4",
        text: "😎 겉은 평범해 보여도 알고 보면 깊이 있음",
        value: "ambalaboo",
        score: 5,
      },
    ],
  },
  {
    id: 6,
    text: "내가 제일 즐기는 활동은?",
    options: [
      {
        id: "6-1",
        text: "🏆 경쟁적인 스포츠나 게임",
        value: "tralalero",
        score: 5,
      },
      {
        id: "6-2",
        text: "🧠 전략적인 보드게임 하기",
        value: "bombardiro",
        score: 4,
      },
      {
        id: "6-3",
        text: "🏞️ 자연 속에서 하는 활동들",
        value: "patafim",
        score: 4,
      },
      {
        id: "6-4",
        text: "🎨 예술적이고 창의적인 다양한 활동들",
        value: "chimpanini",
        score: 5,
      },
    ],
  },
  {
    id: 7,
    text: "내 인간관계 스타일은?",
    options: [
      {
        id: "7-1",
        text: "💕 가족이랑 친밀한 관계 최우선",
        value: "tralalero",
        score: 5,
      },
      {
        id: "7-2",
        text: "🔍 선택적으로 관계 맺는 편",
        value: "bombardiro",
        score: 4,
      },
      {
        id: "7-3",
        text: "👥 소수의 찐친들이랑만 깊게 지냄",
        value: "sahuhr",
        score: 5,
      },
      {
        id: "7-4",
        text: "😂 유머랑 드립으로 여러 사람들이랑 놀아요",
        value: "ambalaboo",
        score: 4,
      },
    ],
  },
  {
    id: 8,
    text: "스트레스 받으면 나는...",
    options: [
      {
        id: "8-1",
        text: "🧘 일단 여유 찾고 쉬어줌",
        value: "tralalero",
        score: 5,
      },
      {
        id: "8-2",
        text: "🔎 거리 두고 상황 분석함",
        value: "bombardiro",
        score: 4,
      },
      {
        id: "8-3",
        text: "💥 문제의 원인을 확! 제거함",
        value: "patafim",
        score: 4,
      },
      {
        id: "8-4",
        text: "😆 유머로 스트레스 날려버림",
        value: "ambalaboo",
        score: 5,
      },
    ],
  },
  {
    id: 9,
    text: "내가 진짜 불편한 상황은?",
    options: [
      {
        id: "9-1",
        text: "🥈 경쟁에서 밀리거나 주목 못 받을 때",
        value: "tralalero",
        score: 5,
      },
      {
        id: "9-2",
        text: "🤨 내 신념이나 원칙을 지키지 못할 때",
        value: "bombardiro",
        score: 3,
      },
      {
        id: "9-3",
        text: "🚧 내 영역이 침범당할 때",
        value: "chimpanini",
        score: 5,
      },
      {
        id: "9-4",
        text: "😰 진짜 내 모습을 보여줘야 할 때",
        value: "sahuhr",
        score: 4,
      },
    ],
  },
  {
    id: 10,
    text: "내가 추구하는 인생은?",
    options: [
      {
        id: "10-1",
        text: "🌟 트렌디하고 성공적인 삶",
        value: "chimpanini",
        score: 5,
      },
      {
        id: "10-2",
        text: "📜 내 원칙대로 사는 삶",
        value: "bombardiro",
        score: 3,
      },
      {
        id: "10-3",
        text: "🛡️ 나와 소중한 것들 지키는 삶",
        value: "patafim",
        score: 5,
      },
      {
        id: "10-4",
        text: "🚀 다양한 경험으로 성장하는 삶",
        value: "ambalaboo",
        score: 5,
      },
    ],
  },
];
