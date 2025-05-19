import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';


export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // 결과 유형 파라미터 가져오기
    const title = searchParams.get('title') || '브레인롯 유형 테스트';
    const emoji = searchParams.get('emoji') || '🧠';
    const type = searchParams.get('type') || '당신의 브레인롯 유형은?';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            padding: '40px',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
              width: '90%',
              height: '80%',
            }}
          >
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>{emoji}</div>
            <div
              style={{
                fontSize: '40px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '10px',
                color: '#4CAF50',
              }}
            >
              {type}
            </div>
            <div
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: '24px',
                textAlign: 'center',
                color: '#666',
                marginBottom: '40px',
              }}
            >
              브레인롯 인격 테스트 결과
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                color: '#888',
              }}
            >
              트랄랄레로 | 3발 상어 | 브레인터짐 | 의미 없음 | 혼돈
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(`OG 이미지 생성 오류: ${e}`, {
      status: 500,
    });
  }
}
