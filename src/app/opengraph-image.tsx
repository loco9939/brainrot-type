import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export const alt = "브레인롯 인격 테스트";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            padding: "40px",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              width: "90%",
              height: "80%",
            }}
          >
            <div style={{ fontSize: "80px", marginBottom: "20px" }}>🧠</div>
            <div
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "20px",
                color: "#4CAF50",
              }}
            >
              너의 브레인롯 유형은?
            </div>
            <div
              style={{
                fontSize: "32px",
                textAlign: "center",
                color: "#666",
                marginBottom: "40px",
              }}
            >
              간단한 테스트로 알아보는 당신의 밈 캐릭터
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(76, 175, 80, 0.1)",
                  color: "#4CAF50",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "24px",
                }}
              >
                🦈 트랄랄레로 트랄랄라
              </div>
              <div
                style={{
                  backgroundColor: "rgba(76, 175, 80, 0.1)",
                  color: "#4CAF50",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "24px",
                }}
              >
                🐊 봄바르디로 크로코딜로
              </div>
              <div
                style={{
                  backgroundColor: "rgba(76, 175, 80, 0.1)",
                  color: "#4CAF50",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "24px",
                }}
              >
                🏏 퉁퉁퉁퉁퉁퉁퉁퉁퉁 사후르
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#888",
              }}
            >
              트랄랄레로 트랄랄라 | 봄바르디로 크로코딜로 | 퉁퉁퉁퉁퉁퉁퉁퉁퉁
              사후르 | 보네카 암발라부 | 브르르 브르르 파타핌 | 침판지니
              바나니니
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`OG 이미지 생성 오류: ${e}`, {
      status: 500,
    });
  }
}
