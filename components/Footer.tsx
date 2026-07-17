import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100">

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#0055ff] rounded-lg flex items-center justify-center text-white font-bold text-sm">7</div>
              <span className="font-display text-lg font-bold text-slate-900 uppercase">IA7 <span className="text-[#0055ff]">Global Tech</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              AI solutions, custom software, and IT consulting for businesses in Germany and Europe. Part of the JGAI global network.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['🇩🇪 Berlin Based', '🇪🇺 EU Registered', '🔒 GDPR Ready'].map(b => (
                <span key={b} className="eu-badge text-[9px]">{b}</span>
              ))}
            </div>
            <div className="pt-2 space-y-1 text-sm text-slate-500">
              <p>📧 <a href="mailto:info@ia7globaltech.eu" className="hover:text-[#0055ff] transition-colors">info@ia7globaltech.eu</a></p>
              <p>📞 <a href="tel:+491625767497" className="hover:text-[#0055ff] transition-colors">+49 162 5767497</a></p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="section-label">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {[
                ['AI Chatbots', 'https://jgai-demo.netlify.app/'],
                ['Web & App Development', '#services'],
                ['Cloud Setup', '#services'],
                ['AI Training', '#services'],
                ['JGRewards SaaS', 'https://jg-rewards.vercel.app/kiosk'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} target={href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="hover:text-[#0055ff] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div className="space-y-4">
            <h4 className="section-label">Our Network</h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {[
                ['🇮🇳 JGAI — India HQ', 'https://www.jgdeveloper.com'],
                ['🇩🇪 IA7 — Europe', 'https://www.ia7globaltech.eu'],
                ['🇺🇸 BRJU InfoSec — USA', 'https://www.brjuinfosec.com'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="hover:text-[#0055ff] transition-colors">{label}</a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <h4 className="section-label mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                {[
                  ['/impressum', 'Impressum'],
                  ['/privacy-policy', 'Privacy Policy'],
                  ['/terms-and-conditions', 'Terms & Conditions'],
                  ['/faq', 'FAQ'],
                ].map(([to, label]) => (
                  <li key={label}>
                    <Link to={to} className="hover:text-[#0055ff] transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Impressum strip — legally required */}
        <div className="border-t border-slate-100 pt-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] text-slate-400 leading-relaxed">
            <div>
              <p className="font-bold text-slate-500 uppercase tracking-wider text-[9px] mb-2">Registered Company</p>
              <p className="text-slate-900 font-semibold">IA7 Global Trading UG (haftungsbeschränkt)</p>
              <p>Kolonnenstraße 8, DE-10827 Berlin, Germany</p>
              <p>Managing Director: Agnieszka Pasek</p>
            </div>
            <div>
              <p className="font-bold text-slate-500 uppercase tracking-wider text-[9px] mb-2">Register Details</p>
              <p>Amtsgericht Charlottenburg Berlin</p>
              <p>HRB 269255</p>
              <p>VAT ID: DE451313995</p>
            </div>
            <div>
              <p className="font-bold text-slate-500 uppercase tracking-wider text-[9px] mb-2">Disclaimer</p>
              <p>Technical work is delivered by external partners. IA7 Global Tech is the contractual partner for all EU clients. <Link to="/impressum" className="text-[#0055ff] hover:underline">Full Impressum →</Link></p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 IA7 Global Trading UG (haftungsbeschränkt). All rights reserved.</p>
          <p>Part of the <a href="https://www.jgdeveloper.com" target="_blank" rel="noopener noreferrer" className="text-[#0055ff] hover:underline">JGAI Global Network</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
