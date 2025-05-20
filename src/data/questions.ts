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
    text: "친구들과 갈등이 생겼을 때 당신의 대응 방식은?",
    options: [
      {
        id: "1-1",
        text: "경쟁을 통해 내 입장을 증명하려 한다",
        value: "tralalero",
        score: 5,
      },
      {
        id: "1-2",
        text: "거리를 두고 상황을 지켜본다",
        value: "bombardiro",
        score: 4,
      },
      {
        id: "1-3",
        text: "단호하게 내 의견을 밀어붙인다",
        value: "sahuhr",
        score: 5,
      },
      {
        id: "1-4",
        text: "상황에 맞게 유연하게 대처한다",
        value: "ambalaboo",
        score: 4,
      },
    ],
  },
  {
    id: 2,
    text: "여유 시간에 당신은 주로 무엇을 하나요?",
    options: [
      {
        id: "2-1",
        text: "가족들과 함께 게임이나 활동을 한다",
        value: "tralalero",
        score: 5,
      },
      {
        id: "2-2",
        text: "혼자서 취미 활동에 몰두한다",
        value: "bombardiro",
        score: 3,
      },
      {
        id: "2-3",
        text: "자연 속에서 시간을 보낸다",
        value: "patafim",
        score: 5,
      },
      {
        id: "2-4",
        text: "친구들과 유머러스한 대화를 나눈다",
        value: "chimpanini",
        score: 4,
      },
    ],
  },
  {
    id: 3,
    text: "당신이 가장 가치 있게 여기는 것은?",
    options: [
      { id: "3-1", text: "성공과 인정받는 것", value: "tralalero", score: 4 },
      { id: "3-2", text: "자신의 신념과 원칙", value: "bombardiro", score: 5 },
      {
        id: "3-3",
        text: "자신의 영역과 소중한 것들을 지키는 것",
        value: "patafim",
        score: 5,
      },
      { id: "3-4", text: "다양한 경험과 적응력", value: "ambalaboo", score: 4 },
    ],
  },
  {
    id: 4,
    text: "위기 상황에서 당신은 어떻게 대처하나요?",
    options: [
      {
        id: "4-1",
        text: "자신감을 가지고 직접 해결에 나선다",
        value: "tralalero",
        score: 4,
      },
      {
        id: "4-2",
        text: "거리를 두고 전략적으로 접근한다",
        value: "bombardiro",
        score: 5,
      },
      {
        id: "4-3",
        text: "공격적으로 문제를 제거한다",
        value: "sahuhr",
        score: 5,
      },
      {
        id: "4-4",
        text: "위기를 새로운 기회로 전환한다",
        value: "ambalaboo",
        score: 4,
      },
    ],
  },
  {
    id: 5,
    text: "사람들이 당신을 처음 만났을 때 받는 인상은?",
    options: [
      {
        id: "5-1",
        text: "자신감 넘치고 카리스마 있는 사람",
        value: "tralalero",
        score: 5,
      },
      {
        id: "5-2",
        text: "독특하고 이해하기 어려운 사람",
        value: "bombardiro",
        score: 4,
      },
      {
        id: "5-3",
        text: "강한 첫인상과 존재감이 있는 사람",
        value: "sahuhr",
        score: 5,
      },
      {
        id: "5-4",
        text: "겉으로는 평범해 보이지만 내면에 깊이가 있는 사람",
        value: "chimpanini",
        score: 5,
      },
    ],
  },
  // {
  //   id: 6,
  //   text: "당신이 선호하는 의사소통 방식은?",
  //   options: [
  //     {
  //       id: "6-1",
  //       text: "트렌디하고 개성 있는 방식",
  //       value: "tralalero",
  //       score: 4,
  //     },
  //     {
  //       id: "6-2",
  //       text: "거리를 두고 자신의 입장을 명확히 하는 방식",
  //       value: "bombardiro",
  //       score: 4,
  //     },
  //     {
  //       id: "6-3",
  //       text: "직관적이고 강한 인상을 주는 방식",
  //       value: "sahuhr",
  //       score: 4,
  //     },
  //     {
  //       id: "6-4",
  //       text: "순수하고 이해하기 쉬운 방식",
  //       value: "patafim",
  //       score: 5,
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   text: "당신의 약점을 마주했을 때 어떻게 반응하나요?",
  //   options: [
  //     {
  //       id: "7-1",
  //       text: "그것을 인정하고 다른 강점으로 극복한다",
  //       value: "tralalero",
  //       score: 3,
  //     },
  //     {
  //       id: "7-2",
  //       text: "약점을 감추고 강점만 보여주려 한다",
  //       value: "bombardiro",
  //       score: 5,
  //     },
  //     {
  //       id: "7-3",
  //       text: "약점을 빠르게 변화시켜 적응한다",
  //       value: "sahuhr",
  //       score: 4,
  //     },
  //     {
  //       id: "7-4",
  //       text: "약점조차 자신의 개성으로 받아들인다",
  //       value: "chimpanini",
  //       score: 5,
  //     },
  //   ],
  // },
  {
    id: 6,
    text: "당신이 가장 즐기는 활동은?",
    options: [
      {
        id: "6-1",
        text: "경쟁적인 스포츠나 게임",
        value: "tralalero",
        score: 4,
      },
      {
        id: "6-2",
        text: "전략 게임이나 퍼즐 풀기",
        value: "bombardiro",
        score: 3,
      },
      { id: "6-3", text: "자연 속에서 하는 활동", value: "patafim", score: 5 },
      {
        id: "6-4",
        text: "창의적이고 변화가 많은 활동",
        value: "ambalaboo",
        score: 4,
      },
    ],
  },
  {
    id: 7,
    text: "당신의 대인관계 스타일은?",
    options: [
      {
        id: "7-1",
        text: "가족과 친밀한 관계를 중시한다",
        value: "tralalero",
        score: 5,
      },
      {
        id: "7-2",
        text: "거리를 두고 선택적인 관계를 맺는다",
        value: "bombardiro",
        score: 4,
      },
      {
        id: "7-3",
        text: "마음이 맞는 소수와 깊은 관계를 맺는다",
        value: "patafim",
        score: 4,
      },
      {
        id: "7-4",
        text: "유머와 재치로 다양한 사람들과 교류한다",
        value: "chimpanini",
        score: 5,
      },
    ],
  },
  // {
  //   id: 10,
  //   text: "변화가 찾아왔을 때 당신은?",
  //   options: [
  //     {
  //       id: "10-1",
  //       text: "자신감 있게 변화를 주도한다",
  //       value: "tralalero",
  //       score: 4,
  //     },
  //     {
  //       id: "10-2",
  //       text: "거리를 두고 신중하게 분석한다",
  //       value: "bombardiro",
  //       score: 4,
  //     },
  //     {
  //       id: "10-3",
  //       text: "변화에 적극적으로 대응하고 적응한다",
  //       value: "sahuhr",
  //       score: 3,
  //     },
  //     {
  //       id: "10-4",
  //       text: "변화를 새로운 기회로 받아들인다",
  //       value: "ambalaboo",
  //       score: 5,
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   text: "당신의 리더십 스타일은?",
  //   options: [
  //     {
  //       id: "11-1",
  //       text: "자신감 넘치고 경쟁적인 분위기를 조성한다",
  //       value: "tralalero",
  //       score: 5,
  //     },
  //     {
  //       id: "11-2",
  //       text: "전략적으로 목표를 세우고 원칙에 따라 이끈다",
  //       value: "bombardiro",
  //       score: 4,
  //     },
  //     {
  //       id: "11-3",
  //       text: "단호하게 결정하고 강한 추진력으로 이끈다",
  //       value: "sahuhr",
  //       score: 5,
  //     },
  //     {
  //       id: "11-4",
  //       text: "보호자처럼 팀원들을 지키고 조화를 이룬다",
  //       value: "patafim",
  //       score: 5,
  //     },
  //   ],
  // },
  {
    id: 8,
    text: "스트레스 상황에서 당신은?",
    options: [
      {
        id: "8-1",
        text: "여유를 찾아 휴식을 취한다",
        value: "tralalero",
        score: 4,
      },
      {
        id: "8-2",
        text: "거리를 두고 상황을 분석한다",
        value: "bombardiro",
        score: 5,
      },
      {
        id: "8-3",
        text: "공격적으로 문제의 원인을 제거한다",
        value: "sahuhr",
        score: 4,
      },
      {
        id: "8-4",
        text: "유머와 재치로 상황을 가볍게 만든다",
        value: "chimpanini",
        score: 5,
      },
    ],
  },
  // {
  //   id: 13,
  //   text: "당신이 가장 중요하게 생각하는 자질은?",
  //   options: [
  //     { id: "13-1", text: "자신감과 리더십", value: "tralalero", score: 5 },
  //     { id: "13-2", text: "원칙과 전략적 사고", value: "bombardiro", score: 5 },
  //     {
  //       id: "13-3",
  //       text: "순수함과 조화로운 공존",
  //       value: "patafim",
  //       score: 5,
  //     },
  //     { id: "13-4", text: "적응력과 유연성", value: "ambalaboo", score: 5 },
  //   ],
  // },
  {
    id: 9,
    text: "당신이 가장 불편해하는 상황은?",
    options: [
      {
        id: "9-1",
        text: "경쟁에서 밀리거나 주목받지 못할 때",
        value: "tralalero",
        score: 4,
      },
      {
        id: "9-2",
        text: "자신의 신념이나 원칙이 도전받을 때",
        value: "bombardiro",
        score: 5,
      },
      {
        id: "9-3",
        text: "자신의 영역이 침범당할 때",
        value: "patafim",
        score: 5,
      },
      {
        id: "9-4",
        text: "자신의 진짜 모습을 드러내야 할 때",
        value: "chimpanini",
        score: 4,
      },
    ],
  },
  {
    id: 10,
    text: "당신이 추구하는 삶의 방식은?",
    options: [
      {
        id: "10-1",
        text: "트렌디하고 성공적인 삶",
        value: "tralalero",
        score: 4,
      },
      {
        id: "10-2",
        text: "자신의 원칙에 따라 사는 삶",
        value: "bombardiro",
        score: 4,
      },
      {
        id: "10-3",
        text: "자신과 주변을 지키는 보호자의 삶",
        value: "patafim",
        score: 5,
      },
      {
        id: "10-4",
        text: "다양한 경험을 통해 성장하는 삶",
        value: "ambalaboo",
        score: 5,
      },
    ],
  },
];
