import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Car Locksmith Dubai — Car Key Service & Repair'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0A0A0A',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#C9A84C',
            marginBottom: '32px',
            borderRadius: '2px',
          }}
        />

        {/* Label */}
        <div
          style={{
            color: '#C9A84C',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Mobile Car Locksmith · Dubai, UAE
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: '64px',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Car Key Service
          <br />
          &amp; Repair in Dubai
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: '#9CA3AF',
            fontSize: '24px',
            fontWeight: 400,
            marginBottom: '48px',
          }}
        >
          Key cutting · repair · replacement · programming
        </div>

        {/* Phone */}
        <div
          style={{
            color: '#C9A84C',
            fontSize: '28px',
            fontWeight: 700,
          }}
        >
          +971 52 642 6161
        </div>
      </div>
    ),
    { ...size }
  )
}
