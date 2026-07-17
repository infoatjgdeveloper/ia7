import React from 'react';

const ChatbotSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-white" id="ai-chatbot">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1.5 border border-[#0055ff]/20 text-[10px] font-black uppercase tracking-[0.3em] text-[#0055ff] rounded-full mb-6 bg-[#EEF4FF]">
                AI Chatbot Service
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl heading uppercase leading-[0.9] tracking-tighter text-slate-900">
                Your Business.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055ff] to-emerald-500">
                  AI-Powered.
                </span>
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              We don't just talk about AI — we build and deploy it. Custom AI chatbots for your website, 
              your product, your customer support — built by our R&D team and live in as little as 48 hours.
            </p>

            <ul className="space-y-4">
              {[
                { icon: "⚡", title: "Deploy in 48 hours", desc: "From briefing to live chatbot — no months-long projects." },
                { icon: "🧠", title: "Trained on your data", desc: "Your products, your FAQs, your tone. Not a generic bot." },
                { icon: "🌍", title: "Multilingual", desc: "German, English, and more — built for the European market." },
                { icon: "🔗", title: "Integrates with your tools", desc: "CRM, Odoo, WhatsApp, website — we connect it all." },
              ].map(item => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <span className="font-bold text-slate-900 text-sm uppercase tracking-wider">{item.title}</span>
                    <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://jgai-demo.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0055ff] text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-[#0044dd] transition-all shadow-lg shadow-[#0055ff]/25"
              >
                <span>Try Live Demo</span>
                <span>→</span>
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:border-[#0055ff] hover:text-[#0055ff] transition-all"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Right — Preview Card */}
          <div className="relative">
            <div className="relative bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <div className="ml-3 flex-1 bg-white/5 rounded-full px-3 py-1 text-[10px] text-slate-500 font-mono">
                  jgai-demo.netlify.app
                </div>
              </div>

              {/* Chat preview */}
              <div className="p-6 space-y-4 min-h-[320px]">
                {/* Bot message */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#0055ff] flex items-center justify-center flex-shrink-0 text-white text-xs font-black">
                    AI
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-slate-300 max-w-[80%]">
                    Hi! I'm your AI assistant. How can I help your business today?
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#0055ff] rounded-2xl rounded-tr-none px-4 py-3 text-sm text-white max-w-[80%]">
                    What AI solutions do you offer for European companies?
                  </div>
                </div>

                {/* Bot response */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#0055ff] flex items-center justify-center flex-shrink-0 text-white text-xs font-black">
                    AI
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 text-sm text-slate-300 max-w-[80%]">
                    We build custom chatbots, LLM integrations, and automation tools — deployed in 48h, multilingual, and tailored to your business. Want a live demo?
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#0055ff]/30 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#0055ff]/50 animate-pulse" />
                  </div>
                  <div className="bg-white/5 rounded-2xl rounded-tl-none px-4 py-3">
                    <div className="flex gap-1 items-center h-4">
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA in card */}
              <div className="border-t border-white/10 p-4 text-center">
                <a
                  href="https://jgai-demo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0055ff] text-xs font-black uppercase tracking-[0.2em] hover:underline"
                >
                  Try the Full Live Demo →
                </a>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-[#0055ff]/10 blur-3xl rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
