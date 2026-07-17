import React from 'react';

const ChatbotSection: React.FC = () => (
  <section id="ai-chatbot" style={{ padding: '80px 0', borderBottom: '1px solid #e8eeff', background: '#f8f9ff' }}>
    <div className="container">

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <p className="t-label" style={{ marginBottom: 12 }}>JGRewards — Our SaaS Product</p>
        <h2 className="t-h2" style={{ marginBottom: 14 }}>Loyalty & rewards platform.</h2>
        <p className="t-body" style={{ maxWidth: 480, margin: '0 auto' }}>
          A complete loyalty platform for your business — points, spin wheel, offers, and raffles. Try the live demo below.
        </p>
      </div>

      {/* Full-width tablet frame */}
      <div style={{
        maxWidth: 820,
        margin: '0 auto',
        background: '#1a1a2e',
        borderRadius: 28,
        padding: '16px 16px 24px',
        boxShadow: '0 32px 80px rgba(0,0,0,0.2)',
      }}>
        {/* Tablet top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 14, position: 'relative' }}>
          <div style={{ width: 60, height: 6, background: '#333', borderRadius: 3 }} />
          <div style={{ position: 'absolute', right: 8, width: 10, height: 10, borderRadius: '50%', background: '#333' }} />
        </div>

        {/* Screen */}
        <div style={{
          borderRadius: 16,
          overflow: 'hidden',
          background: '#fff',
          height: 680,
        }}>
          <iframe
            src="https://jg-rewards.vercel.app/kiosk"
            title="JGRewards Kiosk"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            allow="clipboard-write"
            scrolling="no"
          />
        </div>

        {/* Tablet bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#333' }} />
        </div>
      </div>

      {/* CTA below */}
      <div style={{ textAlign: 'center', marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="https://jg-rewards.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          Open full screen
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          Get JGRewards for your business
        </a>
      </div>

    </div>
  </section>
);

export default ChatbotSection;
