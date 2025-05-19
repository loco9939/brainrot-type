// 결과 유형 타입 정의
export interface ResultType {
  id: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string[];
  compatibility: string;
  imageUrl: string;
}

// 결과 유형 데이터
export const resultTypes: Record<string, ResultType> = {
  shark: {
    id: "shark",
    title: "3발 상어형",
    emoji: "🦈",
    description:
      "혼돈 그 자체. 예측 불가능한 사고 방식의 소유자입니다. 당신의 뇌는 상어처럼 끊임없이 움직이며 아무도 예상하지 못한 방향으로 헤엄칩니다.",
    characteristics: [
      "맥락 없는 드립을 던지는 것을 즐깁니다",
      "대화 중 갑자기 '트랄랄레로'를 외칠 수 있습니다",
      "혼돈 에너지가 넘치며 주변 사람들을 당황시킵니다",
      "의미 없는 밈을 만들고 전파하는 데 탁월합니다",
    ],
    compatibility: "개굴브레인형과 찰떡 궁합, 의외의 진지충형과는 물과 기름",
    imageUrl: "/images/results/shark.webp",
  },
  frog: {
    id: "frog",
    title: "개굴브레인형",
    emoji: "🐸",
    description:
      "뇌가 개구리처럼 점프! 신박한 유머 감각의 끝판왕입니다. 당신의 사고는 개구리처럼 이리저리 뛰어다니며 독특한 관점을 제시합니다.",
    characteristics: [
      "트렌디한 밈을 빠르게 흡수하고 변형합니다",
      "개굴개굴 소리를 내며 대화에 참여합니다",
      "예상치 못한 유머로 주변을 웃게 만듭니다",
      "밈 레퍼런스를 일상 대화에 자연스럽게 녹여냅니다",
    ],
    compatibility: "3발 상어형과 찰떡 궁합, 회로터짐형과는 약간의 충돌",
    imageUrl: "/images/results/frog.webp",
  },
  tts: {
    id: "tts",
    title: "TTS 중독형",
    emoji: "🐤",
    description:
      "음성합성 밈에 과몰입한 AI 친화형입니다. 당신은 로봇 목소리로 말하는 것을 즐기며, 일상 대화에도 TTS 스타일을 적용합니다.",
    characteristics: [
      "로봇 목소리를 흉내내는 것을 즐깁니다",
      "AI 생성 컨텐츠에 관심이 많습니다",
      "대화할 때 마치 텍스트를 읽는 듯한 어조를 사용합니다",
      "기계적인 표현을 유머러스하게 활용합니다",
    ],
    compatibility: "회로터짐형과 찰떡 궁합, 무의미 분석가형과는 약간의 충돌",
    imageUrl: "/images/results/tts.webp",
  },
  circuit: {
    id: "circuit",
    title: "회로터짐형",
    emoji: "🤖",
    description:
      "논리적이지만 브레인터지는 말장난을 즐깁니다. 당신의 뇌는 마치 복잡한 회로처럼 작동하며, 때로는 과부하로 터져버립니다.",
    characteristics: [
      "논리적인 사고방식을 가지고 있습니다",
      "역설적이고 아이러니한 유머를 즐깁니다",
      "프로그래밍적 사고로 일상을 해석합니다",
      "말장난과 언어유희에 탁월합니다",
    ],
    compatibility: "TTS 중독형과 찰떡 궁합, 개굴브레인형과는 약간의 충돌",
    imageUrl: "/images/results/circuit.webp",
  },
  serious: {
    id: "serious",
    title: "의외의 진지충형",
    emoji: "🪿",
    description:
      "겉은 밈충, 속은 진중. 반전 매력의 소유자입니다. 당신은 유머 뒤에 진지함을 숨기고 있는 이중적 캐릭터입니다.",
    characteristics: [
      "겉으로는 밈과 유머를 즐기지만 속으로는 깊은 생각을 합니다",
      "친구들의 고민을 진지하게 들어주는 좋은 상담자입니다",
      "상황에 따라 유머와 진지함을 적절히 조절합니다",
      "밈으로 시작해서 철학적 대화로 마무리하는 대화의 달인입니다",
    ],
    compatibility: "무의미 분석가형과 찰떡 궁합, 3발 상어형과는 물과 기름",
    imageUrl: "/images/results/serious.webp",
  },
  analyst: {
    id: "analyst",
    title: "무의미 분석가형",
    emoji: "🐍",
    description:
      "무의미 속 의미를 찾고자 하는 철학자형 캐릭터입니다. 당신은 밈과 유행어 속에서도 깊은 의미를 발견하려 노력합니다.",
    characteristics: [
      "무의미해 보이는 밈에서 철학적 의미를 찾아냅니다",
      "모든 것을 분석하고 해석하려는 경향이 있습니다",
      "깊은 사고와 통찰력을 가지고 있습니다",
      "밈 문화를 학문적으로 접근하는 독특한 시각을 가졌습니다",
    ],
    compatibility: "의외의 진지충형과 찰떡 궁합, TTS 중독형과는 약간의 충돌",
    imageUrl: "/images/results/analyst.webp",
  },
};
