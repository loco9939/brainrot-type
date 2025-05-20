import { Option } from "../data/questions";
import { ResultTestType, resultTypes } from "../data/results";

// 사용자 응답 타입 정의
export interface UserAnswer {
  questionId: number;
  selectedOptionId: string;
}

// 점수 계산 결과 타입
type ScoreResult = {
  [key in ResultTestType]: number;
};

/**
 * 사용자 응답을 기반으로 결과 유형 계산
 * @param answers 사용자가 선택한 응답 배열
 * @param options 모든 질문의 옵션 배열
 * @returns 가장 높은 점수를 받은 결과 유형 ID
 */
export function calculateResult(
  answers: UserAnswer[],
  options: Option[][]
): ResultTestType {
  // 각 유형별 점수 초기화
  const scores: ScoreResult = {
    tralalero: 0,
    bombardiro: 0,
    sahuhr: 0,
    ambalaboo: 0,
    patafim: 0,
    chimpanzini: 0,
  };

  // 각 응답에 대해 점수 계산
  answers.forEach((answer, index) => {
    const questionOptions = options[index];
    const selectedOption = questionOptions.find(
      (option) => option.id === answer.selectedOptionId
    );

    if (selectedOption) {
      scores[selectedOption.value] += selectedOption.score;
    }
  });

  // 가장 높은 점수를 받은 유형 찾기
  let maxScore = 0;
  let resultTypeId: ResultTestType = "tralalero"; // 기본값

  Object.entries(scores).forEach(([typeId, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultTypeId = typeId as ResultTestType;
    }
  });

  return resultTypeId;
}

/**
 * 결과 유형 ID로 결과 객체 가져오기
 * @param resultTypeId 결과 유형 ID
 * @returns 결과 유형 객체
 */
export function getResultById(resultTypeId: ResultTestType) {
  return resultTypes[resultTypeId] || resultTypes.tralalero; // 기본값으로 tralalero 반환
}

/**
 * 퀴즈 진행률 계산
 * @param currentQuestionIndex 현재 질문 인덱스
 * @param totalQuestions 전체 질문 수
 * @returns 진행률 (0-100)
 */
export function calculateProgress(
  currentQuestionIndex: number,
  totalQuestions: number
): number {
  return Math.round((currentQuestionIndex / totalQuestions) * 100);
}
