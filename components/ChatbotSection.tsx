import React from 'react';

const ChatbotSection: React.FC = () => (
  <section id="ai-chatbot" style={{ padding: '80px 0', borderBottom: '1px solid #e8eeff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

        {/* LEFT — AI Chatbot content */}
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

        {/* RIGHT — JGRewards full demo (horizontal layout) */}
        <div>
          {/* Label above iframe — not overlapping */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: '#0f0f0f' }}>JGRewards — Live Demo</span>
            </div>
            <a href="https://jg-rewards.vercel.app" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: '#0055ff', fontWeight: 500 }}>
              Open full screen →
            </a>
          </div>

          {/* iframe — full horizontal layout */}
          <div style={{ border: '1px solid #e8eeff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,85,255,0.08)', background: '#fff', height: 580 }}>
            <iframe
              src="https://jg-rewards.vercel.app"
              title="JGRewards Demo"
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              loading="lazy"
              allow="clipboard-write"
            />
          </div>

          <p className="t-small" style={{ marginTop: 10, textAlign: 'center' }}>
            Our SaaS loyalty platform — built by JGAI · <a href="https://jg-rewards.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: '#0055ff' }}>jg-rewards.vercel.app</a>
          </p>
        </div>
      </div>
    </div>
    <style>{`@media (max-width: 900px){#ai-chatbot .container>div{grid-template-columns:1fr !important;gap:40px !important;}}`}</style>
  </section>
);

export default ChatbotSection;
