import { ImageResponse } from 'next/og'

export const alt = 'Hitesh Patil - Machine Learning Engineer & Backend Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0a0d14',
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(43, 69, 89, 0.45) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(26, 42, 58, 0.35) 0%, transparent 60%)',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#e2e8f0',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 20,
            border: '1px solid rgba(148, 163, 184, 0.15)',
            borderRadius: 16,
            pointerEvents: 'none',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#94a3b8',
              fontFamily: 'monospace',
            }}
          >
            01 // PORTFOLIO ARCHITECTURE
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#f8fafc',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Hitesh Patil
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#cbd5e1',
              fontWeight: 400,
              marginTop: 8,
              maxWidth: 900,
            }}
          >
            Machine Learning Engineer &amp; Backend Developer
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#94a3b8',
              marginTop: 4,
            }}
          >
            Applied ML Models • Edge AI • Geospatial Routing • Distributed Systems
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(148, 163, 184, 0.2)',
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 16,
            }}
          >
            {['Python', 'PyTorch', 'YOLO26', 'Next.js', 'PostGIS'].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 16,
                  color: '#e2e8f0',
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(148, 163, 184, 0.25)',
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontFamily: 'monospace',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 18,
              fontFamily: 'monospace',
              color: '#60a5fa',
              letterSpacing: '0.05em',
            }}
          >
            thegooddevil.space
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
