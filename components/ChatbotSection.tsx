import React from 'react';

const ChatbotSection: React.FC = () => (
  <section id="ai-chatbot" style={{ padding: '80px 0', borderBottom: '1px solid #e8eeff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

        {/* LEFT — Content */}
        <div>
          <p className="t-label" style={{ marginBottom: 14 }}>AI chatbot service</p>
          <h2 className="t-h2" style={{ marginBottom: 18 }}>Your business,<br />answered automatically.</h2>
          <p className="t-body" style={{ marginBottom: 36, maxWidth: 420 }}>
            Custom AI assistants trained on your data — not a generic template. Deployed to your website in 48 hours, in German and English or any language you need.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
            {[
              { title: 'Live in 48 hours', desc: 'Fast deployment, no lengthy setup process.' },
              { title: 'Trained on your business', desc: 'Your products, FAQs, and pricing — all built in.' },
              { title: 'German and multilingual', desc: 'Built for the European market from the start.' },
              { title: 'Integrates with your tools', desc: 'CRM, Odoo, WhatsApp, and your website.' },
            ].map(f => (
              <div key={f.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0055ff', marginTop: 8, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#0f0f0f', marginBottom: 2 }}>{f.title}</div>
                  <div className="t-small">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://jgai-demo.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Try live demo</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Get a custom quote</a>
          </div>
        </div>

        {/* RIGHT — JGRewards iframe */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: -14, left: 20, zIndex: 10, background: '#fff', border: '1px solid #e8eeff', borderRadius: 8, padding: '7px 14px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 16px rgba(0,85,255,0.08)' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: '#0f0f0f' }}>JGRewards — Live Demo</span>
          </div>
          <div style={{ border: '1px solid #e8eeff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 12px 48px rgba(0,85,255,0.1)', background: '#fff', height: 560 }}>
            <iframe
              src="https://jg-rewards.vercel.app/kiosk"
              title="JGRewards Kiosk Demo"
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              loading="lazy"
              allow="clipboard-write"
            />
          </div>
          <div style={{ position: 'absolute', bottom: -14, right: 20, zIndex: 10, background: '#fff', border: '1px solid #e8eeff', borderRadius: 8, padding: '7px 14px', boxShadow: '0 4px 16px rgba(0,85,255,0.08)' }}>
            <div style={{ fontSize: 11, color: '#888', marginBottom: 1 }}>Our SaaS product</div>
            <a href="https://jg-rewards.vercel.app/kiosk" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 500, color: '#0055ff' }}>jg-rewards.vercel.app →</a>
          </div>
        </div>
      </div>
    </div>
    <style>{`@media (max-width: 900px) { #ai-chatbot .container > div { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
  </section>
);

export default ChatbotSection;
