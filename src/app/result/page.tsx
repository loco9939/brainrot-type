import { ResultContent } from "@/components/ResultContent";
import { Metadata } from "next";
import { resultTypes } from "@/data/results";

// 동적 메타데이터 생성 함수
export async function generateMetadata(
  props: any
): Promise<Metadata> {
  const { searchParams = {} } = props;
  // searchParams에서 결과 타입 ID 가져오기
  const typeId = (searchParams?.type as string) || "";
  const title = (searchParams?.title as string) || "브레인롯 유형 테스트";
  const emoji = (searchParams?.emoji as string) || "🧠";

  // 절대 URL 생성
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://brainrot-personality-test.windsurf.build";
  
  // 타입에 따른 이미지 URL 생성
  let ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(title)}&emoji=${encodeURIComponent(emoji)}&type=${encodeURIComponent(typeId)}`;
  
  // 타입 ID가 있고 결과 타입에 해당 이미지가 있는 경우
  if (typeId && resultTypes[typeId]) {
    // 결과 타입의 이미지 URL 사용
    ogImageUrl = `${baseUrl}${resultTypes[typeId].imageUrl}`;
  }

  return {
    title: `${title} | 브레인롯 인격 테스트 결과`,
    description: `당신의 브레인롯 유형은 ${title}입니다. 브레인롯 인격 테스트로 알아보는 당신의 밈 캐릭터 유형.`,
    openGraph: {
      title: `나는 ${title} 유형이에요! | 브레인롯 인격 테스트`,
      description: `당신의 브레인롯 유형은 ${title}입니다. 브레인롯 인격 테스트로 알아보는 당신의 밈 캐릭터 유형.`,
      images: [{ url: ogImageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: `나는 ${title} 유형이에요! | 브레인롯 인격 테스트`,
      description: `당신의 브레인롯 유형은 ${title}입니다. 브레인롯 인격 테스트로 알아보는 당신의 밈 캐릭터 유형.`,
      images: [ogImageUrl],
    },
  };
}

// 결과 페이지 컴포넌트
export default function ResultPage(props: any) {
  const { searchParams = {} } = props;
  // URL 파라미터에서 타입 ID 가져오기
  const typeId = searchParams?.type as string;

  return <ResultContent initialTypeId={typeId} />;
}
