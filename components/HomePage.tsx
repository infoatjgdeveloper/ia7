import React from 'react';
import Hero from './Hero';
import Services from './Services';
import ChatbotSection from './ChatbotSection';
import EcosystemSection from './EcosystemSection';
import Footer from './Footer';
import SEOHead from './SEOHead';
import JGRewardsPopup from './JGRewardsPopup';

const ContactSection: React.FC = () => (
  <section id="contact" style={{ padding: '80px 0', borderBottom: '1px solid #e8eeff' }}>
    <div className="container">
      <p className="t-label" style={{ marginBottom: 14 }}>Contact</p>
      <h2 className="t-h2" style={{ marginBottom: 18, maxWidth: 420 }}>Ready to start a project?</h2>
      <p className="t-body" style={{ maxWidth: 440, marginBottom: 40, fontSize: 16 }}>Tell us what you need. We'll come back with a clear plan, a realistic timeline, and a price that makes sense for your business.</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ fontSize: 14, padding: '13px 28px' }}>Fill in contact form</a>
        <a href="mailto:info@ia7globaltech.eu" className="btn btn-outline" style={{ fontSize: 14, padding: '13px 28px' }}>info@ia7globaltech.eu</a>
      </div>
      <p className="t-small">IA7 Global Trading UG · Kolonnenstraße 8, DE-10827 Berlin · +49 162 5767497</p>
    </div>
  </section>
);

const HomePage: React.FC = () => (
  <>
    <SEOHead />
    <Hero />
    <Services />
    <ChatbotSection />
    <EcosystemSection />
    <ContactSection />
    <Footer />
    <JGRewardsPopup />
  </>
);
export default HomePage;
