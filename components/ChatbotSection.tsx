import React from 'react';
const msgs = [
  { from: 'bot', text: 'Hallo! Wie kann ich Ihnen helfen?' },
  { from: 'user', text: 'We need a chatbot for our German website.' },
  { from: 'bot', text: 'We can have that live in 48 hours, in German and English, trained on your own content. Want to see how it works?' },
  { from: 'user', text: "Yes, let's see a demo." },
];
const ChatbotSection: React.FC = () => (
  <section id="ai-chatbot" style={{ padding: '80px 0', borderBottom: '1px solid #e8eeff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <p className="t-label" style={{ marginBottom: 14 }}>AI chatbot service</p>
          <h2 className="t-h2" style={{ marginBottom: 18 }}>Your business,<br />answered automatically.</h2>
          <p className="t-body" style={{ marginBottom: 36, maxWidth: 420 }}>Custom AI assistants trained on your data — not a generic template. Deployed to your website in 48 hours, in German and English or any language you need.</p>
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
        <div style={{ border: '1px solid #e8eeff', borderRadius: 20, overflow: 'hidden', background: '#fff', boxShadow: '0 8px 32px rgba(0,85,255,0.08)' }}>
          <div style={{ background: '#0055ff', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 11, fontWeight: 600 }}>AI</span>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#fff' }}>IA7 Assistant</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#86efac' }} />
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Online — Powered by JGAI</span>
              </div>
            </div>
          </div>
          <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12, minHeight: 260, background: '#fafbff' }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '78%', padding: '11px 15px', fontSize: 13, lineHeight: 1.55, background: m.from === 'user' ? '#0055ff' : '#fff', color: m.from === 'user' ? '#fff' : '#0f0f0f', borderRadius: m.from === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px', border: m.from === 'user' ? 'none' : '1px solid #e8eeff' }}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: '12px 16px', borderTop: '1px solid #e8eeff', background: '#fff' }}>
            <div style={{ border: '1px solid #e8eeff', borderRadius: 100, padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 13, color: '#bbb' }}>Ask anything...</span>
              <div style={{ width: 32, height: 32, background: '#0055ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="13" height="13" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`@media (max-width: 768px) { #ai-chatbot .container > div { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
  </section>
);
export default ChatbotSection;
