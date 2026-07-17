import React from 'react';

const messages = [
  { from: 'bot', text: 'Hallo! Wie kann ich Ihrem Unternehmen heute helfen?' },
  { from: 'user', text: 'We need a chatbot for our German e-commerce site.' },
  { from: 'bot', text: 'Great — we can have a custom chatbot live on your site within 48 hours, in German and English, fully GDPR-compliant. Want to see a demo?' },
  { from: 'user', text: 'Yes please!' },
];

const ChatbotSection: React.FC = () => {
  return (
    <section id="ai-chatbot" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="section-label mb-4">AI Chatbot Service</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight leading-tight mb-6">
              Your Business,<br />
              <span className="gradient-text">Automated.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Custom AI chatbots built on your own data — not a generic template. Deployed to your website in 48 hours, speaking to your customers in German, English, or any language they need.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: '⚡', title: 'Live in 48 hours', desc: 'Fast deployment, no months-long setup.' },
                { icon: '🧠', title: 'Trained on your business', desc: 'Products, FAQs, pricing — all built in.' },
                { icon: '🇩🇪', title: 'German & multilingual', desc: 'Built for the European market.' },
                { icon: '🔒', title: 'GDPR compliant', desc: 'Data stays in Europe. Privacy by design.' },
              ].map(f => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EEF4FF] rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{f.title}</div>
                    <div className="text-slate-400 text-sm">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="https://jgai-demo.netlify.app/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0055ff] text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#0044dd] transition-all shadow-lg shadow-[#0055ff]/20">
                Try Live Demo →
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-700 px-7 py-3.5 rounded-full text-sm font-bold hover:border-[#0055ff] hover:text-[#0055ff] transition-all">
                Get a Custom Quote
              </a>
            </div>
          </div>

          {/* Right — Chat UI */}
          <div className="relative">
            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5">

              {/* Chat header */}
              <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#0055ff] rounded-full flex items-center justify-center text-white text-xs font-bold">AI</div>
                <div>
                  <div className="text-white text-sm font-bold">IA7 AI Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-semibold uppercase tracking-wider">Online</span>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-[9px] text-slate-500 font-mono bg-white/5 px-2 py-1 rounded">Powered by JGAI</span>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[280px]">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}>
                    {m.from === 'bot' && (
                      <div className="w-6 h-6 bg-[#0055ff]/20 rounded-full flex items-center justify-center text-[8px] text-[#0055ff] font-bold flex-shrink-0">AI</div>
                    )}
                    <div className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      m.from === 'user'
                        ? 'bg-[#0055ff] text-white rounded-br-sm'
                        : 'bg-white/10 text-slate-200 rounded-bl-sm'
                    }`}>
                      {m.text}
                    </div>
                  </div>
                ))}

                {/* Typing */}
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 bg-[#0055ff]/20 rounded-full flex items-center justify-center text-[8px] text-[#0055ff] font-bold">AI</div>
                  <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1 items-center h-4">
                      {[0, 150, 300].map(d => (
                        <div key={d} className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-3">
                  <span className="text-slate-500 text-sm flex-1">Ask me anything...</span>
                  <div className="w-8 h-8 bg-[#0055ff] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-8 bg-[#0055ff]/5 blur-3xl rounded-full -z-10" />

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white border border-slate-100 shadow-lg rounded-2xl px-4 py-2.5 flex items-center gap-2">
              <span className="text-lg">🇩🇪</span>
              <div>
                <div className="text-[10px] font-bold text-slate-900">German Ready</div>
                <div className="text-[9px] text-slate-400">GDPR Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
