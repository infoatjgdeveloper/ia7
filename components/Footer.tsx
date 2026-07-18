import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer style={{ borderTop: '1px solid #e8eeff', background: '#fff' }}>
    <div className="container" style={{ padding: '60px 36px 40px' }}>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
        {/* Brand */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <img src="/logo.png" alt="IA7 Global Tech" style={{ height: 48, width: 'auto', display: 'block' }} />
          </div>
          <p className="t-small" style={{ maxWidth: 220, marginBottom: 18, lineHeight: 1.8 }}>
            AI solutions and custom software for businesses in Germany and Europe. Part of the JGAI global network.
          </p>
          <div className="t-small" style={{ lineHeight: 2.2 }}>
            <a href="mailto:info@ia7globaltech.eu" style={{ display: 'block', color: '#555' }}>info@ia7globaltech.eu</a>
            <a href="tel:+491625767497" style={{ display: 'block', color: '#555' }}>+49 162 5767497</a>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="t-label" style={{ marginBottom: 16 }}>Services</p>
          <div className="t-small" style={{ lineHeight: 2.4 }}>
            <a href="https://jgai-demo.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#555' }}>AI Chatbots</a>
            <a href="#services" style={{ display: 'block', color: '#555' }}>Web Development</a>
            <a href="#services" style={{ display: 'block', color: '#555' }}>Cloud Setup</a>
            <a href="#services" style={{ display: 'block', color: '#555' }}>AI Training</a>
            <a href="https://jg-rewards.vercel.app/kiosk" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#555' }}>JGRewards</a>
          </div>
        </div>

        {/* Network */}
        <div>
          <p className="t-label" style={{ marginBottom: 16 }}>Network</p>
          <div className="t-small" style={{ lineHeight: 2.4 }}>
            <a href="https://www.jgdeveloper.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#555' }}>JGAI India</a>
            <a href="https://www.ia7globaltech.eu" style={{ display: 'block', color: '#555' }}>IA7 Germany</a>
            <a href="https://www.brjuinfosec.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#555' }}>BRJU InfoSec USA</a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <p className="t-label" style={{ marginBottom: 16 }}>Legal</p>
          <div className="t-small" style={{ lineHeight: 2.4 }}>
            <Link to="/impressum" style={{ display: 'block', color: '#555' }}>Impressum</Link>
            <Link to="/privacy-policy" style={{ display: 'block', color: '#555' }}>Privacy Policy</Link>
            <Link to="/terms-and-conditions" style={{ display: 'block', color: '#555' }}>Terms & Conditions</Link>
            <Link to="/cancellation-policy" style={{ display: 'block', color: '#555' }}>Cancellation</Link>
            <Link to="/faq" style={{ display: 'block', color: '#555' }}>FAQ</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e8eeff', paddingTop: 20 }}>
        <p className="t-small">© 2026 IA7 Global Trading UG (haftungsbeschränkt). All rights reserved.</p>
        <p className="t-small">Part of the <a href="https://www.jgdeveloper.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0055ff' }}>JGAI Global Network</a></p>
      </div>

    </div>
  </footer>
);

export default Footer;
