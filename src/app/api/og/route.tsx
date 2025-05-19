import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';


export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // 결과 유형 파라미터 가져오기
    const resultId = searchParams.get('id');
    const title = searchParams.get('title') || '브레인롯 유형 테스트';
    const emoji = searchParams.get('emoji') || '🧠';
    const type = searchParams.get('type') || '당신의 브레인롯 유형은?';
    
    // 결과 유형에 따른 배경색 설정
    let bgColor = '#f5f5f5';
    let accentColor = '#4CAF50';
    
    switch(resultId) {
      case 'tralalero':
        accentColor = '#4CAF50';
        break;
      case 'bombardiro':
        accentColor = '#2196F3';
        break;
      case 'sahuhr':
        accentColor = '#F44336';
        break;
      case 'ambalaboo':
        accentColor = '#9C27B0';
        break;
      case 'patafim':
        accentColor = '#8BC34A';
        break;
      case 'chimpanzini':
        accentColor = '#FFC107';
        break;
      default:
        accentColor = '#4CAF50';
    }

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
            backgroundColor: bgColor,
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
                color: accentColor,
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
              트랄랄레로 트랄랄라 | 봄바르디로 크로코딜로 | 퉁퉁퉁퉁 사후르 | 보네카 암발라부 | 브르르 브르르 파타핌 | 침판지니 바나니니
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
