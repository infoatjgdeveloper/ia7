
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="space-y-6">
            <div className="text-2xl font-bold heading tracking-tighter text-slate-900 uppercase">
              IA7 <span className="text-[#0055ff]">GLOBAL TECH</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
              Elite IT Consultancy & Software Architecture. Serving the European Union with high-precision digital systems.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0055ff]">Capabilities</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs font-semibold uppercase text-slate-400">
              <li><a href="#services" className="hover:text-slate-900 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-slate-900 transition-colors">Cloud Computing</a></li>
              <li><a href="#services" className="hover:text-slate-900 transition-colors">Cybersecurity</a></li>
              <li><a href="#services" className="hover:text-slate-900 transition-colors">AI/ML</a></li>
              <li><a href="#services" className="hover:text-slate-900 transition-colors">AI Training</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0055ff]">Protocol Feed</h4>
            <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100 max-w-sm">
              <input type="email" placeholder="Briefing Email" className="bg-transparent px-4 py-2 text-xs w-full focus:outline-none font-medium" />
              <button className="bg-[#0f172a] text-white px-5 py-2 text-[10px] font-black uppercase rounded-lg hover:bg-[#0055ff] transition-colors">Join</button>
            </div>
          </div>
        </div>

        {/* Impressum Section - Mandatory under §5 TMG (German Law) */}
        <div className="pt-16 border-t border-slate-100">
          <h5 className="text-[12px] font-black uppercase tracking-widest text-slate-900 mb-8 underline decoration-[#0055ff] underline-offset-8">Impressum / Legal Notice</h5>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-[11px] text-slate-500 leading-relaxed font-medium">
            <div className="space-y-3">
              <p className="font-bold text-slate-900 text-[10px] uppercase tracking-wider">Company Information</p>
              <p className="text-slate-700">IA7 Global Tech GmbH</p>
              <p>Stralauer Allee 2B<br />10245 Berlin, Germany</p>
              <p>Represented by Managing Director:<br /><span className="text-slate-700 font-bold">Alexander Von Straub</span></p>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-slate-900 text-[10px] uppercase tracking-wider">Contact Details</p>
              <p>Email: <a href="mailto:ops@ia7global.tech" className="text-[#0055ff] hover:underline">ops@ia7global.tech</a></p>
              <p>Phone: +49 (0) 30 9283 102</p>
              <p>Fax: +49 (0) 30 9283 105</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-slate-900 text-[10px] uppercase tracking-wider">Registration</p>
              <p>Register Court: Amtsgericht Charlottenburg (Berlin)</p>
              <p>Registration Number: HRB 209384 B</p>
              <p>VAT ID (USt-IdNr.): DE 329048123</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-slate-900 text-[10px] uppercase tracking-wider">Regulatory Body</p>
              <p>Responsible for content according to § 55 Abs. 2 RStV:</p>
              <p>Elena M. Rossi<br />IA7 Global Tech Strategy Hub</p>
              <p className="mt-2 text-[10px] italic">Supervisory Authority: IHK Berlin</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-50 mt-16">
          <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300">
            © 2026 IA7 GLOBAL TECH GMBH. ALL SYSTEMS OPERATIONAL.
          </div>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
             <a href="#" className="hover:text-[#0055ff] transition-colors">Privacy Policy (GDPR)</a>
             <a href="#" className="hover:text-[#0055ff] transition-colors">Cookie Settings</a>
             <a href="#" className="hover:text-[#0055ff] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
