# 브레인롯 인격 테스트 웹 서비스 개발 태스크 목록

## 📁 1. 프로젝트 구조 세팅

- [] /data/questions.ts: 질문지 데이터 생성
- [] /data/results.ts: 결과 유형 데이터 정의
- [] /components/QuestionCard.tsx: 질문 UI 컴포넌트
- [] /components/ResultCard.tsx: 결과 UI 컴포넌트
- [] /lib/logic.ts: 인격 유형 계산 로직
- [] /context/QuizContext.tsx: 퀴즈 상태 관리를 위한 컨텍스트

## 🧠 2. 퀴즈 진행 페이지 (/quiz)

- [] 퀴즈 페이지 (/app/quiz/page.tsx) 생성
- [] 사용자 입력 순차 처리 (1문제씩)
- [] 선택 시 상태 업데이트 및 다음 질문으로 이동
- [] 모든 질문 완료 시 /result로 이동

## 🧮 3. 결과 도출 페이지 (/result)

- [] 선택한 답변들을 기반으로 결과 유형 계산 (calculateResult)
- [] 결과 유형에 따른 설명 및 이미지 출력
- [] 다시 시작하기 버튼 추가

## 🌐 4. 공유 기능 구현

- [] 결과 페이지 공유용 링크 구성 (URL 쿼리 기반)
- [] OG 이미지 설정 (기본 텍스트 버전 → 추후 이미지 API 확장 가능)
- [] navigator.share API 또는 SNS 공유 버튼 (Twitter, Facebook 등)

## ✨ 5. UI 개선 및 UX 강화

- [] shadcn-ui를 활용한 일관된 UI 구성 (Button, Card, Progress 등)
- [] 진행도 표시 (e.g., 3/10)
- [] 로딩 애니메이션 또는 전환 효과 추가

## 📱 6. 반응형 디자인

- [] 모바일 최적화 (Tailwind Breakpoint 활용)
- [] 작은 화면에서도 선택지가 잘 보이도록 레이아웃 조정

## 🚀 7. 배포 및 SEO

- [] Vercel에 배포 (windsurf → GitHub → Vercel 연동)
- [] SEO 및 OG 메타태그 설정
- [] 결과 페이지 OG 이미지 설정

## 🧪 8. 테스트 및 마무리

- [] 전체 퀴즈 흐름 테스트
- [] 결과 정확도 검토
- [] 타이포, 문장, UI 마무리 수정
- [] 간단한 GA or 사용자 클릭 이벤트 추적 추가 (선택)
