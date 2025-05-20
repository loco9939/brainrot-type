// 결과 유형 타입 정의
export interface ResultType {
  id: string;
  title: string;
  emoji: string;
  description: string;
  characteristics: string[];
  compatibility: string;
  badCompatibility: string;
  imageUrl: string;
  goodMatch: {
    id: string;
    title: string;
    emoji: string;
    imageUrl: string;
  };
  badMatch: {
    id: string;
    title: string;
    emoji: string;
    imageUrl: string;
  };
}

export const resultTypes: Record<string, ResultType> = {
  tralalero: {
    id: "tralalero",
    title: "트랄랄레로 트랄랄라",
    emoji: "🦈",
    description:
      "경쟁을 즐기며 가족을 중시하는 자신감 넘치는 트렌드세터입니다. 다리가 3개인 독특한 상어로, 유행에 민감하면서도 여유롭게 삶을 즐기는 매력적인 성격의 소유자입니다.",
    characteristics: [
      "승부욕 폭발! 도전 없인 못 살아, 늘 새로운 자극을 찾는 챌린저 타입 ✨",
      "가족 바이브 충만! 패밀리 타임은 진심 소중, 자녀들과 찐케미 형성 중 💯",
      "트렌드 레이더 ON! 남들과는 다른 나만의 스타일로 인스타 피드 채우는 중 🔥",
      "워라밸 마스터! '열심히 놀고 열심히 쉬자'가 인생 모토 🏝️",
      "메인 캐릭터 에너지! 시선 집중해도 전혀 긴장 안 함, 타고난 리더십의 소유자 💪",
    ],
    compatibility:
      "브르르 브르르 파타핌이랑은 찰떡 궁합! 너네 만나면 진짜 현실판 '우리 사이 썸타지마라' 되는 거 알지? 건강하고 밸런스 있는 케미 예약이요~ 🔥",
    badCompatibility:
      "봄바르디로 크로코딜로랑은 레드 플래그 100개 꽂힌 관계! 너무 직설적인 봄바르디로한테 상처받고, 네 자유분방함에 걔는 질투 폭발할 듯. '내가 왜 참아?' 모드 강제 발동하는 조합... 🚩",
    imageUrl: "/images/tralalero.webp",
    goodMatch: {
      id: "patafim",
      title: "브르르 브르르 파타핌",
      emoji: "🌳",
      imageUrl: "/images/patafim.webp",
    },
    badMatch: {
      id: "bombardiro",
      title: "봄바르디로 크로코딜로",
      emoji: "🐊",
      imageUrl: "/images/bombardiro.webp",
    },
  },
  bombardiro: {
    id: "bombardiro",
    title: "봄바르디로 크로코딜로",
    emoji: "🐊",
    description:
      "폭격기와 악어의 합성체로, 공격적이고 직접적인 접근 방식을 선호합니다. 원거리 전투에 특화되었지만 근접전에 약한 전략가로, 자신만의 신념에 강하게 고착된 성격입니다.",
    characteristics: [
      "텐션 MAX! 솔직담백 스트레이트 화법으로 상대 멘탈 붕괴시키는 스킬 소유자 🎯",
      "원거리 저격수 모드! 내 페이스 유지하면서 게임 플레이하는 전략적 두뇌 🧠",
      "내 생각 = 절대 진리! 틀린 건 세상이지 나는 아닌 고집불통 마인드셋 ⚡",
      "겉바속촉! SNS에선 자신감 넘치는 포스팅 가득하지만 실제론 꽤 여린 하트 💔",
      "대세지만 오해 폭탄! '나 이런 애 아닌데..?' 라는 말을 달고 사는 미스터리 인물 🤔",
    ],
    compatibility:
      "보네카 암발라부랑은 찰떡 그 자체! 너희 둘이 만나면 각자의 단점을 완벽하게 보완해주는 TMI 없는 관계가 될 듯? 서로 다른데 웜게 맞는 그런 느낌...! 🙌",
    badCompatibility:
      "트랄랄레로 트랄랄라랑은 진짜 앱 삭제각 관계! 쟤는 너무 가볍게 살고 너는 너무 진지해서 대화만 해도 서로 '뭐라는거지?' 모드 발동. 댓글창 전쟁 예약된 조합... ⚔️",
    imageUrl: "/images/bombardiro.webp",
    goodMatch: {
      id: "ambalaboo",
      title: "보네카 암발라부",
      emoji: "🐸",
      imageUrl: "/images/ambalaboo.webp",
    },
    badMatch: {
      id: "tralalero",
      title: "트랄랄레로 트랄랄라",
      emoji: "🦈",
      imageUrl: "/images/tralalero.webp",
    },
  },
  sahuhr: {
    id: "sahuhr",
    title: "퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁 사후르",
    emoji: "🏏",
    description:
      "야구 방망이를 들고 있는 무서운 캐릭터로, 단호하고 타협하지 않는 위협적인 존재감을 가집니다. 다양한 형태로 변신할 수 있는 능력을 지녔으며, 공격적인 전투 스타일을 선호합니다.",
    characteristics: [
      "No 타협! Yes 직진! 한번 결심하면 끝까지 밀어붙이는 불도저 에너지 ⚡",
      "첫인상 충격적! '어 저사람 뭐지?' 한마디도 안 했는데 강렬한 존재감 뿜뿜 👀",
      "변신의 귀재! TPO에 완벽 적응, 상황 따라 콘셉트 바꾸는 카멜레온 능력자 🌈",
      "공격이 최선의 방어! 내가 먼저 선점해야 지는 법 없다는 선공격 마인드셋 🚀",
      "오해 만렙! '아니 나 그런 의도 아니었는데...?' 라는 말을 일상적으로 하게 됨 😅",
    ],
    compatibility:
      "침판지니 바나니니랑은 호감도 200%! 겉으론 안 맞아 보여도 서로의 다름을 인정하는 케미 폭발! 리스펙 넘치는 인간관계의 표본이 될 듯~ 💯",
    badCompatibility:
      "봄바르디로 크로코딜로랑은 타임라인 전쟁 예약! 둘 다 지기 싫어하는 성격이라 '내가 맞잖아'의 무한 루프에 빠질 듯. SNS 팔로우부터 차단까지 5분 컷 가능... 🔥",
    imageUrl: "/images/sahuhr.webp",
    goodMatch: {
      id: "chimpanzini",
      title: "침판지니 바나니니",
      emoji: "🍌",
      imageUrl: "/images/chimpanzini.webp",
    },
    badMatch: {
      id: "bombardiro",
      title: "봄바르디로 크로코딜로",
      emoji: "🐊",
      imageUrl: "/images/bombardiro.webp",
    },
  },
  ambalaboo: {
    id: "ambalaboo",
    title: "보네카 암발라부",
    emoji: "🐸",
    description:
      "머리는 개구리, 몸통은 타이어, 다리는 사람 다리를 가진 독특한 캐릭터로, 급격한 변화를 받아들이고 새로운 정체성으로 적응할 수 있는 유연성을 가진 다면적 성격의 소유자입니다.",
    characteristics: [
      "인생 롤러코스터 웰컴! 급격한 변화에도 'ㄴㄴ 괜찮아~' 하며 적응하는 유연함 💫",
      "멀티 페르소나 장인! 인스타, 틱톡, 회사, 집... 장소별로 다른 내 모습 완벽 소화 👥",
      "위기 = 기회! 절체절명 상황에서도 '이거 레전드 각인데?' 하며 반전 만드는 고수 🔄",
      "트렌드 스폰지! 모든 유행 빠르게 흡수, '이거 요즘 힙한 거래' 카톡 공유러 📱",
      "노멀은 노땡큐! 남들과 다른 나만의 컨셉으로 인생 꾸미는 크리에이터 감성 ✨",
    ],
    compatibility:
      "봄바르디로 크로코딜로랑 만나면 찐텐 보장! 서로의 부족한 부분 완벽 채워주는 환상의 짝꿍이 될 거야. 크리에이티브 에너지 폭발하는 관계! 💥",
    badCompatibility:
      "침판지니 바나니니랑은 진심 에너지 미스매치! 너의 다이나믹한 변화무쌍함이 침판지니를 불안하게 만들고, 걔의 은근한 스타일은 너에겐 너무 심심해 보일 듯. '왜 이렇게 재미없어?' 모드 발동... 🥱",
    imageUrl: "/images/ambalaboo.webp",
    goodMatch: {
      id: "bombardiro",
      title: "봄바르디로 크로코딜로",
      emoji: "🐊",
      imageUrl: "/images/bombardiro.webp",
    },
    badMatch: {
      id: "chimpanzini",
      title: "침판지니 바나니니",
      emoji: "🍌",
      imageUrl: "/images/chimpanzini.webp",
    },
  },
  patafim: {
    id: "patafim",
    title: "브르르 브르르 파타핌",
    emoji: "🌳",
    description:
      "숲을 지키며 나무의 뿌리를 이용해 침입자로부터 영역을 방어하는 보호자입니다. 순수하고 건전한 가치관을 추구하며, 다른 존재와 조화롭게 공존하는 협력적 성격을 가지고 있습니다.",
    characteristics: [
      "내 사람 보호 본능 세계 1위! 소중한 이들 위해서라면 불도 물도 다 건너는 라이프가드 💓",
      "상황별 맞춤 전략 장인! TPO에 따라 직구와 간접공격 오가는 갓벽한 센스 👑",
      "순도 100% 동화 속 주인공 마인드! 세상을 더 건강하고 선한 곳으로 만들고픈 비전 🌱",
      "팀플 에이스! '혼자보단 다같이'가 모토인 협업 달인, 단톡방 분위기 메이커 🤝",
      "불사조 에너지! 아무리 망해도 다시 일어나는 회복력, '망한 건 경험일 뿐'이라는 마인드셋 🔄",
    ],
    compatibility:
      "트랄랄레로 트랄랄라랑은 운명적 만남! 너네 둘이 같이 있으면 주변 사람들이 '이 케미 실화냐' 할 정도로 찰떡이야. 건강한 관계의 표본! 💖",
    badCompatibility:
      "퉁퉁퉁퉁 사후르랑은 지옥의 조합! 너의 온화한 에너지가 사후르의 폭주 모드를 제어하지 못하고, 걔의 공격적인 스타일에 너는 상처만 받을 듯. '왜 이렇게 무서워...?' 떨면서 도망치는 엔딩... 😨",
    imageUrl: "/images/patafim.webp",
    goodMatch: {
      id: "tralalero",
      title: "트랄랄레로 트랄랄라",
      emoji: "🦈",
      imageUrl: "/images/tralalero.webp",
    },
    badMatch: {
      id: "sahuhr",
      title: "퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁 사후르",
      emoji: "🏏",
      imageUrl: "/images/sahuhr.webp",
    },
  },
  chimpanzini: {
    id: "chimpanzini",
    title: "침판지니 바나니니",
    emoji: "🍌",
    description:
      "바나나 껍질 안에 숨겨진 단단한 근육을 가진 침팬지로, 겉으로는 부드럽지만 내면에는 강한 능력과 잠재력을 숨기고 있습니다. 유머와 장난기를 통해 타인과 소통하는 것을 즐기는 성격의 소유자입니다.",
    characteristics: [
      "겉바속촉 끝판왕! 평범해 보이지만 알고 보면 '어머 이 사람 대박' 급 숨겨진 실력자 🎭",
      "밈 드립 장인! 진지충은 노노~ 농담과 짤로 일상 커뮤니케이션 하는 '웃음사냥꾼' 😆",
      "감정 보호막 ON! 내 진짜 속마음은 레벨 99 친해져야 오픈되는 비밀 던전 🔒",
      "변신의 귀재! 장소와 상황 따라 완벽하게 다른 캐릭터 연기, 올라운더 적응력 갑 📊",
      "셀프 인식 만렙! '내가 이런 사람이다'에 대한 정확한 자기 분석 능력자 👁️",
    ],
    compatibility:
      "퉁퉁퉁퉁 사후르랑은 급발진 케미! 처음엔 '이게 될까?' 싶지만 알고 보면 서로에 대한 인정과 존중감 넘치는 레전드 조합! 웃음과 깊이를 동시에 가진 관계 💞",
    badCompatibility:
      "보네카 암발라부의 멀티 페르소나 + 트렌드 흡수력 vs 침판지니의 밈드립 + 비밀던전 속마음은 재난 영화급 티키타카 한쪽은 '내 맘은 레벨 99던전', 다른 쪽은 '다 오픈하고 롤코 타자' 스타일이라 띠용 케미 확정 😭 둘이 대화하면 침바니는 '왜 맨날 인싸짓?' 보네카는 '왜 맨날 속마음 숨김?' 하는 찐텐 발생... 그냥 서로 읽씹하는게 평화 ㅇㅈ? 👊",
    imageUrl: "/images/chimpanzini.webp",
    goodMatch: {
      id: "sahuhr",
      title: "퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁퉁 사후르",
      emoji: "🏏",
      imageUrl: "/images/sahuhr.webp",
    },
    badMatch: {
      id: "ambalaboo",
      title: "보네카 암발라부",
      emoji: "🐸",
      imageUrl: "/images/ambalaboo.webp",
    },
  },
};
