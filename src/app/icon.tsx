import { ImageResponse } from "next/og";

// 이미지 크기 설정
export const size = {
  width: 32,
  height: 32,
};

// 이미지 콘텐츠 타입 설정
export const contentType = "image/png";

// 이미지 생성 함수
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🧠
      </div>
    ),
    {
      ...size,
    }
  );
}
