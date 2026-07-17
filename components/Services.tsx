import React from 'react';

const services = [
  {
    icon: '🤖',
    title: 'AI Chatbots',
    subtitle: 'Deploy in 48 hours',
    desc: 'Custom AI chatbots trained on your business data — for customer support, lead generation, or internal tools. Multilingual, GDPR-ready, integrates with your stack.',
    tags: ['LLM', 'RAG', 'Multilingual', 'GDPR'],
    cta: 'Try Demo',
    ctaLink: 'https://jgai-demo.netlify.app/',
    accent: '#0055ff',
    bg: '#EEF4FF',
  },
  {
    icon: '💻',
    title: 'Web & App Development',
    subtitle: 'Custom-built for your needs',
    desc: 'From landing pages to full-stack platforms — we design and build web apps that are fast, secure, and built to convert European customers.',
    tags: ['React', 'Node.js', 'TypeScript', 'EU Hosting'],
    cta: 'Get a Quote',
    ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform',
    accent: '#0E7C5A',
    bg: '#E3F5EE',
  },
  {
    icon: '☁️',
    title: 'Cloud Setup & DevOps',
    subtitle: 'EU-based infrastructure',
    desc: 'Cloud deployment, server setup, CI/CD pipelines, and ongoing infrastructure management — we handle the technical backbone so you can focus on your business.',
    tags: ['AWS', 'Vercel', 'Docker', 'EU Servers'],
    cta: 'Learn More',
    ctaLink: '#contact',
    accent: '#7C3AED',
    bg: '#F3EEFF',
  },
  {
    icon: '🔒',
    title: 'Security-Aware Builds',
    subtitle: 'Powered by BRJU InfoSec',
    desc: 'Every product we build follows security best practices. For dedicated cybersecurity audits, pen testing, and compliance — we work with our partner BRJU InfoSec Inc. (USA).',
    tags: ['GDPR', 'OWASP', 'Pen Testing via BRJU', 'Compliance'],
    cta: 'BRJU InfoSec →',
    ctaLink: 'https://www.brjuinfosec.com',
    accent: '#C95F0A',
    bg: '#FEF0E4',
  },
  {
    icon: '🎓',
    title: 'AI Training & Workshops',
    subtitle: 'For your team',
    desc: 'Practical workshops on using AI tools in your daily workflows — from prompt engineering to deploying AI agents. Available in German and English.',
    tags: ['Workshops', 'Prompt Engineering', 'LLM Tools', 'DE/EN'],
    cta: 'Book a Session',
    ctaLink: '#contact',
    accent: '#0055ff',
    bg: '#EEF4FF',
  },
  {
    icon: '🎁',
    title: 'JGRewards — Loyalty SaaS',
    subtitle: 'Retain & reward customers',
    desc: 'Our own SaaS loyalty and rewards platform. Help your customers earn points, redeem rewards, and keep coming back — easy to integrate, ready to deploy.',
    tags: ['SaaS', 'Loyalty', 'Kiosk Mode', 'API'],
    cta: 'Try Kiosk Demo',
    ctaLink: 'https://jg-rewards.vercel.app/kiosk',
    accent: '#0E7C5A',
    bg: '#E3F5EE',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight leading-tight">
            Services Built<br />
            <span className="gradient-text">for European Businesses.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-xl leading-relaxed">
            Everything from AI chatbots to full web platforms — delivered by our India R&D team, managed from Berlin.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title}
              className="bg-white rounded-2xl border border-slate-100 p-7 flex flex-col gap-5 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-0.5 transition-all duration-300 group">

              {/* Icon + subtitle */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: s.bg }}>
                  {s.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {s.subtitle}
                </span>
              </div>

              {/* Title + desc */}
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-slate-900 uppercase tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: s.accent, background: s.bg }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a href={s.ctaLink} target={s.ctaLink.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider transition-colors"
                style={{ color: s.accent }}>
                {s.cta}
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
