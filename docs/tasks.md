# 브레인롯 인격 테스트 웹 서비스 개발 태스크 목록

## 📁 1. 프로젝트 구조 세팅

- [x] /data/questions.ts: 질문지 데이터 생성
- [x] /data/results.ts: 결과 유형 데이터 정의
- [x] /components/QuestionCard.tsx: 질문 UI 컴포넌트
- [x] /components/ResultCard.tsx: 결과 UI 컴포넌트
- [x] /lib/logic.ts: 인격 유형 계산 로직
- [x] /context/QuizContext.tsx: 퀴즈 상태 관리를 위한 컨텍스트

## 🧠 2. 퀴즈 진행 페이지 (/quiz)

- [x] 퀴즈 페이지 (/app/quiz/page.tsx) 생성
- [x] 사용자 입력 순차 처리 (1문제씩)
- [x] 선택 시 상태 업데이트 및 다음 질문으로 이동
- [x] 모든 질문 완료 시 /result로 이동

## 🧮 3. 결과 도출 페이지 (/result)

- [x] 선택한 답변들을 기반으로 결과 유형 계산 (calculateResult)
- [x] 결과 유형에 따른 설명 및 이미지 출력
- [x] 다시 시작하기 버튼 추가

## 🌐 4. 공유 기능 구현

- [x] 결과 페이지 공유용 링크 구성 (URL 쿼리 기반)
- [x] OG 이미지 설정 (기본 텍스트 버전 → 추후 이미지 API 확장 가능)
- [x] navigator.share API 또는 SNS 공유 버튼 (Twitter, Facebook 등)

## ✨ 5. UI 개선 및 UX 강화

- [x] shadcn-ui를 활용한 일관된 UI 구성 (Button, Card, Progress 등)
- [x] 진행도 표시 (e.g., 3/10)
- [x] 로딩 애니메이션 또는 전환 효과 추가

## 📱 6. 반응형 디자인

- [x] 모바일 first

## 🚀 7. 배포 및 SEO

- [x] Vercel에 배포 (windsurf → GitHub → Vercel 연동)
- [x] SEO 및 OG 메타태그 설정
- [x] 결과 페이지 OG 이미지 설정

## 🧪 8. 테스트 및 마무리

- [x] 전체 퀴즈 흐름 테스트
- [x] 결과 정확도 검토
- [x] 타이포, 문장, UI 마무리 수정
- [] 간단한 GA or 사용자 클릭 이벤트 추적 추가 (선택)
