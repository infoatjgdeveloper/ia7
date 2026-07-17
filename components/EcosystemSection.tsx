import React from 'react';
const entities = [
  { country: 'India', role: 'R&D Backbone', name: 'JG AI R&D', legal: 'JG AI Research & Development Pvt. Ltd.', desc: "Builds all AI agents, LLMs, web applications, and automation tools powering the group's products across 37+ countries. DPIIT-recognized.", tags: ['AI Agents', 'LLM Dev', 'Web & Apps', 'Research'], note: 'DPIIT Recognized', href: 'https://www.jgdeveloper.com', highlight: false },
  { country: 'Germany', role: 'European Arm', name: 'IA7 Global Tech', legal: 'IA7 Global Trading UG (haftungsbeschränkt) · Berlin · HRB 269255', desc: 'The EU entity. Contracts, delivers, and manages all services for European clients. Registered in Berlin, governed by German law.', tags: ['EU Market', 'Berlin HQ', 'German Law', 'Invoice EUR'], note: 'You are here', href: 'https://www.ia7globaltech.eu', highlight: true },
  { country: 'USA', role: 'Security Partner', name: 'BRJU InfoSec', legal: 'BRJU InfoSec Inc. · Westmont, Illinois', desc: '30+ years of enterprise cybersecurity expertise. Handles all security services, pen testing, digital forensics, and compliance for the group.', tags: ['Cybersecurity', 'Odoo Partner', 'Pen Testing', 'Forensics'], note: 'Odoo Certified Partner', href: 'https://www.brjuinfosec.com', highlight: false },
];
const EcosystemSection: React.FC = () => (
  <section id="group" style={{ padding: '80px 0', background: '#f8f9ff', borderBottom: '1px solid #e8eeff' }}>
    <div className="container">
      <div style={{ marginBottom: 52 }}>
        <p className="t-label" style={{ marginBottom: 14 }}>Our group</p>
        <h2 className="t-h2" style={{ marginBottom: 14 }}>One group. Three entities.</h2>
        <p className="t-body" style={{ maxWidth: 500 }}>When you work with IA7 in Europe, you get access to a connected global network — AI R&D from India, cybersecurity from the US, all coordinated from Berlin.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 24 }}>
        {entities.map(e => (
          <div key={e.name} style={{ background: '#fff', border: `1px solid ${e.highlight ? '#0055ff' : '#ebebeb'}`, borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
            {e.highlight && (
              <div style={{ position: 'absolute', top: -11, left: 20, background: '#0055ff', color: '#fff', fontSize: 9, fontWeight: 600, padding: '3px 10px', borderRadius: 100, letterSpacing: '0.1em', textTransform: 'uppercase' }}>You are here</div>
            )}
            <div>
              <p className="t-label" style={{ marginBottom: 8, fontSize: 10 }}>{e.country} — {e.role}</p>
              <h3 className="t-h3" style={{ marginBottom: 3 }}>{e.name}</h3>
              <p className="t-small">{e.legal}</p>
            </div>
            <p className="t-body" style={{ flex: 1, fontSize: 14 }}>{e.desc}</p>
            <div>{e.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid #f0f0f0' }}>
              <span className="t-small">{e.note}</span>
              <a href={e.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 500, color: '#0055ff' }}>Visit &rarr;</a>
            </div>
          </div>
        ))}
      </div>
      <div style={{ border: '1px solid #e8eeff', borderRadius: 14, padding: '32px 36px', background: '#fff', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {[
          { n: '01', title: 'Contact IA7 in Berlin', body: 'One point of contact in Europe. Contracts under German law, invoiced in EUR.' },
          { n: '02', title: 'Built by JGAI in India', body: 'Your AI tools, chatbots, and web apps engineered by our dedicated R&D team.' },
          { n: '03', title: 'Secured by BRJU (USA)', body: 'Security audits, pen testing, and compliance handled by our US cybersecurity partner.' },
        ].map(s => (
          <div key={s.n}>
            <div style={{ fontSize: 22, fontWeight: 300, color: '#ddd', marginBottom: 12, letterSpacing: '-0.02em' }}>{s.n}</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: '#0f0f0f', marginBottom: 6 }}>{s.title}</div>
            <div className="t-small">{s.body}</div>
          </div>
        ))}
      </div>
    </div>
    <style>{`@media (max-width: 900px) { #group .container > div:nth-child(2), #group .container > div:nth-child(3) { grid-template-columns: 1fr !important; } }`}</style>
  </section>
);
export default EcosystemSection;
