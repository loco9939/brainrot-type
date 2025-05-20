import { ResultContent } from "@/components/ResultContent";
import { resultTypes } from "@/data/results";
import { Metadata } from "next";

// 동적 메타데이터 생성 함수
export async function generateMetadata(props: any): Promise<Metadata> {
  const { searchParams = {} } = props;
  // searchParams에서 결과 타입 ID 가져오기
  const typeId = (searchParams?.type as string) || "";
  const title = (searchParams?.title as string) || "브레인롯 유형 테스트";
  const emoji = (searchParams?.emoji as string) || "🧠";

  // 절대 URL 생성
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://brainrot-type-test.netlify.app";

  // 타입에 따른 이미지 URL 생성 - 기본 OG 이미지
  let ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(
    title
  )}&emoji=${encodeURIComponent(emoji)}&type=${encodeURIComponent(typeId)}`;

  // 타입 ID가 있고 결과 타입에 해당 이미지가 있는 경우
  if (typeId && resultTypes[typeId] && resultTypes[typeId].imageUrl) {
    // 결과 타입의 이미지 URL 사용 - 절대 URL로 변환
    const imageUrl = resultTypes[typeId].imageUrl;
    // 이미 절대 URL이 아닌 경우에만 baseUrl 추가
    ogImageUrl = imageUrl.startsWith("http")
      ? imageUrl
      : `${baseUrl}${imageUrl}`;
  }

  // 공통으로 사용할 제목과 설명
  const metaTitle = `나는 ${title} 유형이에요! | 브레인롯 인격 테스트`;
  const metaDescription = `당신의 브레인롯 유형은 ${title}입니다. 브레인롯 인격 테스트로 알아보는 당신의 밈 캐릭터 유형.`;

  return {
    title: metaTitle,
    description: metaDescription,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
      siteName: "브레인롯 인격 테스트",
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
      creator: "@brainrot_test",
    },
    alternates: {
      canonical: `${baseUrl}/result?type=${typeId}`,
    },
    other: {
      "fb:app_id": "brainrot_test",
      "og:image:width": "1200",
      "og:image:height": "630",
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
