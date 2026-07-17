import React from 'react';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => (
  <footer style={{ borderTop: '1px solid #e8eeff', background: '#fff' }}>
    <div className="container" style={{ padding: '60px 36px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 52 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 16 }}>
            <div style={{ width: 30, height: 30, background: '#0055ff', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>7</span>
            </div>
            <span style={{ fontSize: 14, fontWeight: 500, color: '#0f0f0f' }}>IA7 Global Tech</span>
          </div>
          <p className="t-small" style={{ maxWidth: 220, marginBottom: 18, lineHeight: 1.8 }}>AI solutions and custom software for businesses in Germany and Europe. Part of the JGAI global network.</p>
          <div className="t-small" style={{ lineHeight: 2.2 }}>
            <a href="mailto:info@ia7globaltech.eu" style={{ display: 'block', color: '#555' }}>info@ia7globaltech.eu</a>
            <a href="tel:+491625767497" style={{ display: 'block', color: '#555' }}>+49 162 5767497</a>
          </div>
        </div>
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
        <div>
          <p className="t-label" style={{ marginBottom: 16 }}>Network</p>
          <div className="t-small" style={{ lineHeight: 2.4 }}>
            <a href="https://www.jgdeveloper.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#555' }}>JGAI India</a>
            <a href="https://www.ia7globaltech.eu" style={{ display: 'block', color: '#555' }}>IA7 Germany</a>
            <a href="https://www.brjuinfosec.com" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#555' }}>BRJU InfoSec USA</a>
          </div>
        </div>
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
      <div style={{ borderTop: '1px solid #e8eeff', paddingTop: 28, marginBottom: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <div>
            <p className="t-label" style={{ marginBottom: 8, fontSize: 9 }}>Registered company</p>
            <p className="t-small" style={{ color: '#555', lineHeight: 1.9 }}>IA7 Global Trading UG (haftungsbeschränkt)<br />Kolonnenstraße 8, DE-10827 Berlin, Germany<br />Managing Director: Agnieszka Pasek</p>
          </div>
          <div>
            <p className="t-label" style={{ marginBottom: 8, fontSize: 9 }}>Register details</p>
            <p className="t-small" style={{ color: '#555', lineHeight: 1.9 }}>Amtsgericht Charlottenburg Berlin<br />HRB 269255<br />VAT ID: DE451313995</p>
          </div>
          <div>
            <p className="t-label" style={{ marginBottom: 8, fontSize: 9 }}>Disclaimer</p>
            <p className="t-small" style={{ color: '#555', lineHeight: 1.9 }}>Technical work is delivered by external partners. IA7 Global Tech is the contractual partner for all EU clients. <Link to="/impressum" style={{ color: '#0055ff' }}>Full Impressum</Link></p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e8eeff', paddingTop: 20 }}>
        <p className="t-small">2026 IA7 Global Trading UG (haftungsbeschränkt). All rights reserved.</p>
        <p className="t-small">Part of the <a href="https://www.jgdeveloper.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0055ff' }}>JGAI Global Network</a></p>
      </div>
    </div>
  </footer>
);
export default Footer;
