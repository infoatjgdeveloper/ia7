import React from 'react';
const services = [
  { id: '01', title: 'AI Chatbots', sub: 'Deploy in 48 hours', desc: 'Custom AI assistants trained on your products, services, and tone. Live in 48 hours, in German and English.', tags: ['LLM', 'RAG', 'Multilingual'], cta: 'Try live demo', href: 'https://jgai-demo.netlify.app/' },
  { id: '02', title: 'Web & App Development', sub: 'Custom-built to your spec', desc: 'Web applications, portals, and platforms built clean and fast for European businesses. From landing pages to full-stack products.', tags: ['React', 'Node.js', 'TypeScript'], cta: 'Get a quote', href: 'https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform' },
  { id: '03', title: 'Cloud Setup', sub: 'Infrastructure management', desc: 'Deployment, hosting, CI/CD pipelines, and ongoing infrastructure management. We handle the technical backbone.', tags: ['AWS', 'Vercel', 'Docker'], cta: 'Learn more', href: '#contact' },
  { id: '04', title: 'Security-Aware Builds', sub: 'Via BRJU InfoSec', desc: 'Every product built with security best practices. For dedicated cybersecurity, pen testing, and compliance — via BRJU InfoSec Inc. (USA).', tags: ['OWASP', 'Pen Testing', 'Compliance'], cta: 'Visit BRJU InfoSec', href: 'https://www.brjuinfosec.com' },
  { id: '05', title: 'AI Training', sub: 'For your team', desc: 'Practical workshops on using AI tools effectively. Available in German and English, on-site or remote.', tags: ['Workshops', 'LLM Tools', 'DE / EN'], cta: 'Book a session', href: '#contact' },
  { id: '06', title: 'JGRewards', sub: 'Loyalty SaaS platform', desc: 'Our own SaaS loyalty and rewards platform. Points system, kiosk mode, customer dashboard. Easy to integrate.', tags: ['SaaS', 'Loyalty', 'Kiosk Mode'], cta: 'Try kiosk demo', href: 'https://jg-rewards.vercel.app/kiosk' },
];
const Services: React.FC = () => (
  <section id="services" style={{ padding: '80px 0', background: '#f8f9ff', borderBottom: '1px solid #e8eeff' }}>
    <div className="container">
      <div style={{ marginBottom: 52 }}>
        <p className="t-label" style={{ marginBottom: 14 }}>Services</p>
        <h2 className="t-h2" style={{ maxWidth: 400, marginBottom: 14 }}>What we build for you.</h2>
        <p className="t-body" style={{ maxWidth: 420 }}>Everything from AI chatbots to full web platforms — delivered by our India R&D team, managed from Berlin.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {services.map(s => (
          <div key={s.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontSize: 12, color: '#ccc', fontWeight: 500 }}>{s.id}</span>
              <span className="t-small">{s.sub}</span>
            </div>
            <h3 className="t-h3">{s.title}</h3>
            <p className="t-body" style={{ flex: 1, fontSize: 14 }}>{s.desc}</p>
            <div>{s.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            <a href={s.href} target={s.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
              style={{ fontSize: 13, fontWeight: 500, color: '#0055ff', display: 'inline-flex', alignItems: 'center', gap: 4 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0044dd')}
              onMouseLeave={e => (e.currentTarget.style.color = '#0055ff')}>
              {s.cta} &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 900px) { #services .container > div:last-child { grid-template-columns: repeat(2,1fr) !important; } }
      @media (max-width: 600px) { #services .container > div:last-child { grid-template-columns: 1fr !important; } }
    `}</style>
  </section>
);
export default Services;
