import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

// 엣지 런타임 설정
export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // 결과 유형 파라미터 가져오기
    const resultId = searchParams.get("id");
    const title = searchParams.get("title") || "브레인롯 유형 테스트";
    const emoji = searchParams.get("emoji") || "🧠";
    const type = searchParams.get("type") || "당신의 브레인롯 유형은?";

    // 결과 유형에 따른 배경색 설정
    let bgColor = "#f5f5f5";
    let accentColor = "#4CAF50";

    switch (resultId) {
      case "tralalero":
        accentColor = "#4CAF50";
        break;
      case "bombardiro":
        accentColor = "#2196F3";
        break;
      case "sahuhr":
        accentColor = "#F44336";
        break;
      case "ambalaboo":
        accentColor = "#9C27B0";
        break;
      case "patafim":
        accentColor = "#8BC34A";
        break;
      case "chimpanzini":
        accentColor = "#FFC107";
        break;
      default:
        accentColor = "#4CAF50";
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8f9fa",
            backgroundImage:
              "linear-gradient(to bottom right, #ffffff, #f0f2f5)",
            padding: "0",
            fontFamily: "system-ui, sans-serif",
            overflow: "hidden",
          }}
        >
          {/* 배경 장식 요소 */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: `${accentColor}22`,
              zIndex: "1",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-100px",
              left: "-100px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: `${accentColor}15`,
              zIndex: "1",
            }}
          />

          {/* 메인 카드 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "40px 60px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
              width: "85%",
              height: "75%",
              position: "relative",
              zIndex: "2",
            }}
          >
            {/* 상단 로고 및 브랜드 */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                fontSize: "18px",
                color: "#888",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "24px" }}>🧠</span>
              <span>brainrot-type.com</span>
            </div>

            {/* 이모지 아이콘 */}
            <div
              style={{
                fontSize: "100px",
                marginBottom: "20px",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                transform: "scale(1.2)",
              }}
            >
              {emoji}
            </div>

            {/* 결과 타입 */}
            <div
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "12px",
                color: accentColor,
                background: `${accentColor}15`,
                padding: "8px 24px",
                borderRadius: "50px",
              }}
            >
              {type}
            </div>

            {/* 결과 제목 */}
            <div
              style={{
                fontSize: "64px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "24px",
                background: "linear-gradient(90deg, #000000, #333333)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                padding: "0 20px",
                lineHeight: "1.2",
              }}
            >
              {title}
            </div>

            {/* 결과 설명 */}
            <div
              style={{
                fontSize: "28px",
                textAlign: "center",
                color: "#444",
                marginBottom: "32px",
                fontWeight: "500",
              }}
            >
              브레인롯 인격 테스트 결과
            </div>

            {/* 하단 유형 리스트 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                color: "#888",
                maxWidth: "90%",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              트랄랄레로 트랄랄라 | 봄바르디로 크로코딜로 | 퉁퉁퉁퉁퉁퉁퉁퉁퉁
              사후르 | 보네카 암발라부 | 브르르 브르르 파타핌 | 침판지니
              바나니니
            </div>
          </div>

          {/* 하단 장식 */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              fontSize: "16px",
              color: "#666",
              zIndex: "3",
            }}
          >
            © 2025 브레인롯 인격 테스트
          </div>
        </div>
      )
    );
  } catch (e) {
    console.error(e);
    return new Response(`OG 이미지 생성 오류: ${e}`, {
      status: 500,
    });
  }
}
