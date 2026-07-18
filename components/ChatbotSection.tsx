import React from 'react';

const ChatbotSection: React.FC = () => (
  <section id="ai-chatbot" style={{ padding: '80px 0', borderBottom: '1px solid #e8eeff', background: '#f8f9ff' }}>
    <div className="container">

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 52 }}>
        <p className="t-label" style={{ marginBottom: 12 }}>JGRewards — Our SaaS Product</p>
        <h2 className="t-h2" style={{ marginBottom: 14 }}>Loyalty & rewards platform.</h2>
        <p className="t-body" style={{ maxWidth: 480, margin: '0 auto' }}>
          A complete loyalty platform for your business — points, spin wheel, offers, and raffles. Try the live demo below.
        </p>
      </div>

      {/* iPad 13" Landscape */}
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{
          background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)',
          borderRadius: 36,
          padding: '14px 48px',
          boxShadow: '0 0 0 1px #444, 0 40px 100px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', left: -3, top: '30%', width: 3, height: 60, background: '#333', borderRadius: '2px 0 0 2px' }} />
          <div style={{ position: 'absolute', right: -3, top: '35%', width: 3, height: 40, background: '#333', borderRadius: '0 2px 2px 0' }} />
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 14, marginBottom: 6 }}>
            <div style={{ width: 80, height: 4, background: '#111', borderRadius: 2 }} />
          </div>

          {/* Screen with scaled iframe */}
          <div style={{
            borderRadius: 18,
            overflow: 'hidden',
            background: '#0033cc',
            aspectRatio: '4/3',
            position: 'relative',
          }}>
            {/* Scale wrapper — shrink iframe content to fit */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '200%',
              height: '200%',
              transform: 'scale(0.5)',
              transformOrigin: 'top left',
              pointerEvents: 'all',
            }}>
              <iframe
                src="https://jg-rewards.vercel.app/kiosk"
                title="JGRewards Kiosk"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                allow="clipboard-write"
                scrolling="no"
              />
            </div>
          </div>

          <div style={{ height: 14, marginTop: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 100, height: 3, background: '#111', borderRadius: 2 }} />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: -30, left: '10%', right: '10%', height: 30, background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(8px)' }} />
      </div>

      {/* CTAs */}
      <div style={{ textAlign: 'center', marginTop: 52, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="https://jg-rewards.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Open full screen</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Get JGRewards for your business</a>
      </div>

    </div>
  </section>
);

export default ChatbotSection;
