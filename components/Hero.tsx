import React, { useState, useRef, useEffect } from 'react';

const stats = [
  { value: '37+', label: 'Countries served' },
  { value: '48h', label: 'Chatbot deploy time' },
  { value: '3', label: 'Global offices' },
  { value: 'Berlin', label: 'Registered in' },
];

interface Message { from: 'bot' | 'user'; text: string; }

const SYSTEM_PROMPT = `You are the AI assistant for IA7 Global Tech — a Berlin-based AI solutions company serving businesses in Germany and Europe.

About IA7 Global Tech:
- Based in Berlin, Germany (Kolonnenstraße 8, DE-10827 Berlin)
- Part of the JGAI global network: JGAI R&D (India), IA7 Global Tech (Germany), BRJU InfoSec (USA)
- Services: Custom AI chatbots (deployed in 48h), web & app development, cloud setup, AI training workshops, JGRewards SaaS loyalty platform
- Cybersecurity handled by BRJU InfoSec Inc. (USA partner)
- Contact: info@ia7globaltech.eu | +49 162 5767497

Your job: Help visitors understand what IA7 does, answer questions about services, and guide them toward booking a call or trying the AI chatbot demo. Be concise, professional, and friendly. Answer in the same language the user writes in (German or English). Keep responses to 2-3 sentences max unless they ask for detail. Never make up prices — direct them to contact us for quotes.`;

// Smart fallback answers when API is unavailable
const FALLBACKS: { match: RegExp; answer: string }[] = [
  { match: /chatbot|chat bot|bot/i, answer: "We build custom AI chatbots trained on your business data — live on your website in 48 hours, in German and English. Try the full demo at jgai-demo.netlify.app or book a free call with us." },
  { match: /fast|quick|speed|48|time|deploy/i, answer: "We deploy custom AI chatbots in 48 hours. From your briefing to a live bot on your site — that's our standard timeline." },
  { match: /price|cost|pricing|how much|euro|€/i, answer: "Pricing depends on your specific needs. Reach out at info@ia7globaltech.eu or book a free 15-min call and we'll give you a clear quote." },
  { match: /german|deutsch|germany|europe|eu/i, answer: "Yes — we're based in Berlin and our chatbots are fully multilingual. German, English, and more. Built specifically for European businesses." },
  { match: /service|offer|what do|what can/i, answer: "We offer custom AI chatbots, web & app development, cloud setup, AI training workshops, and JGRewards — our SaaS loyalty platform. All delivered from our global R&D team, managed from Berlin." },
  { match: /security|secure|gdpr|protect/i, answer: "Security is handled by our US partner BRJU InfoSec Inc. — 30+ years of enterprise cybersecurity experience. Every solution we build follows security best practices." },
  { match: /contact|reach|email|call|phone/i, answer: "You can reach us at info@ia7globaltech.eu or +49 162 5767497. Or fill in our contact form and we'll get back to you within 24 hours." },
  { match: /reward|loyalty|jgreward|kiosk|point/i, answer: "JGRewards is our SaaS loyalty platform — points system, spin wheel, kiosk mode, and customer dashboard. Try the live demo in the section below!" },
  { match: /jgai|brju|india|usa|partner|network/i, answer: "IA7 Global Tech is part of the JGAI global network — JGAI R&D in India handles all AI and web development, BRJU InfoSec in the US handles cybersecurity, and IA7 in Berlin is your European point of contact." },
];

const getFallback = (input: string): string => {
  for (const f of FALLBACKS) {
    if (f.match.test(input)) return f.answer;
  }
  return "Great question! For a detailed answer, reach out at info@ia7globaltech.eu or book a free 15-min call with our team. We respond within 24 hours.";
};

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: "Hallo! I'm IA7's AI assistant. Ask me anything about our services, or how we can help your business." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  const send = async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput('');
    setMessages(prev => [...prev, { from: 'user', text: msg }]);
    setLoading(true);

    try {
      const history = messages.map(m => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text }));
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: [...history, { role: 'user', content: msg }],
        }),
      });

      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      const reply = data?.content?.[0]?.text;
      if (!reply) throw new Error('No response');
      setMessages(prev => [...prev, { from: 'bot', text: reply }]);
    } catch {
      // Smart fallback instead of error message
      await new Promise(r => setTimeout(r, 600));
      setMessages(prev => [...prev, { from: 'bot', text: getFallback(msg) }]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e: React.KeyboardEvent) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
    <div style={{ border: '1px solid #e8eeff', borderRadius: 20, overflow: 'hidden', background: '#fff', boxShadow: '0 12px 48px rgba(0,85,255,0.1)', display: 'flex', flexDirection: 'column', height: 520 }}>
      {/* Header */}
      <div style={{ background: '#0055ff', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 600 }}>AI</span>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>IA7 Assistant</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#86efac' }} />
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)' }}>Online — Powered by JGAI</span>
          </div>
        </div>
        <a href="https://jgai-demo.netlify.app/" target="_blank" rel="noopener noreferrer"
          style={{ marginLeft: 'auto', fontSize: 10, color: 'rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.15)', padding: '4px 10px', borderRadius: 100 }}>
          Full demo →
        </a>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 10, background: '#fafbff' }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{ maxWidth: '82%', padding: '10px 14px', fontSize: 13, lineHeight: 1.55, background: m.from === 'user' ? '#0055ff' : '#fff', color: m.from === 'user' ? '#fff' : '#0f0f0f', borderRadius: m.from === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px', border: m.from === 'user' ? 'none' : '1px solid #e8eeff', whiteSpace: 'pre-wrap' }}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex' }}>
            <div style={{ padding: '10px 14px', background: '#fff', border: '1px solid #e8eeff', borderRadius: '14px 14px 14px 2px', display: 'flex', gap: 4, alignItems: 'center' }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#0055ff', opacity: 0.4, animation: `bounce 1.2s ${i*0.2}s infinite` }} />)}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggested questions */}
      {messages.length === 1 && (
        <div style={{ padding: '8px 16px', background: '#fafbff', display: 'flex', gap: 6, flexWrap: 'wrap', borderTop: '1px solid #e8eeff' }}>
          {['What services do you offer?', 'How fast can you build a chatbot?', 'Do you work in German?'].map(q => (
            <button key={q} onClick={() => send(q)} style={{ fontSize: 11, color: '#0055ff', background: '#eef3ff', border: '1px solid #e0eaff', borderRadius: 100, padding: '5px 11px', cursor: 'pointer' }}>{q}</button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{ padding: '12px 14px', borderTop: '1px solid #e8eeff', background: '#fff', display: 'flex', gap: 8, alignItems: 'flex-end', flexShrink: 0 }}>
        <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={onKey} placeholder="Ask me anything about IA7..." rows={1}
          style={{ flex: 1, border: '1px solid #e8eeff', borderRadius: 12, padding: '9px 14px', fontSize: 13, color: '#0f0f0f', resize: 'none', outline: 'none', fontFamily: 'inherit', lineHeight: 1.5, background: '#fafbff' }} />
        <button onClick={() => send()} disabled={loading || !input.trim()}
          style={{ width: 36, height: 36, background: input.trim() ? '#0055ff' : '#e8eeff', borderRadius: '50%', border: 'none', cursor: input.trim() ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.15s' }}>
          <svg width="13" height="13" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      </div>
      <style>{`@keyframes bounce{0%,80%,100%{transform:translateY(0);opacity:0.4}40%{transform:translateY(-5px);opacity:1}}`}</style>
    </div>
  );
};

const Hero: React.FC = () => (
  <section style={{ paddingTop: 80, borderBottom: '1px solid #e8eeff', background: '#fff' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', minHeight: 'calc(100vh - 80px)', paddingBottom: 64 }}>
        <div>
          <p className="t-label" style={{ marginBottom: 22 }}>Berlin, Germany — AI solutions for Europe</p>
          <h1 className="t-h1" style={{ marginBottom: 26 }}>Custom AI software<br />for growing businesses<br />in Germany and Europe.</h1>
          <p className="t-body" style={{ maxWidth: 460, marginBottom: 38, fontSize: 16 }}>
            We build AI chatbots, web applications, and automation tools — delivered from our R&D team, managed from Berlin, secured by our US cybersecurity partner.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 60 }}>
            <a href="https://jgai-demo.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ fontSize: 14, padding: '13px 28px' }}>Try full chatbot demo</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: 14, padding: '13px 28px' }}>Book a free call</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, paddingTop: 32, borderTop: '1px solid #e8eeff' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 600, color: '#0055ff', letterSpacing: '-0.025em', lineHeight: 1 }}>{s.value}</div>
                <div className="t-label" style={{ marginTop: 7, color: '#aaa', fontSize: 10 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <LiveChat />
      </div>
    </div>
    <style>{`@media (max-width: 900px){section>.container>div{grid-template-columns:1fr !important;gap:48px !important;}section>.container>div>div:last-child{display:none !important;}}`}</style>
  </section>
);

export default Hero;
