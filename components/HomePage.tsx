import React from 'react';
import Hero from './Hero';
import Services from './Services';
import ChatbotSection from './ChatbotSection';
import EcosystemSection from './EcosystemSection';
import Footer from './Footer';
import SEOHead from './SEOHead';
import JGRewardsPopup from './JGRewardsPopup';

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 md:py-28 px-6 bg-[#0055ff]">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-blue-200 text-[11px] font-bold uppercase tracking-[0.3em] mb-6">Get Started Today</p>
      <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-tight mb-6">
        Ready to Build<br />Something Intelligent?
      </h2>
      <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto mb-10">
        Tell us what you need. We'll come back with a clear plan, a realistic timeline, and a price that makes sense for your business.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSepDnB0Iwe85gTNT1HbeIAqv-pQLm1aFhE0Qz8iTCeMEwaVPw/viewform?usp=publish-editor"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#0055ff] px-8 py-4 rounded-full text-sm font-bold hover:bg-blue-50 transition-all shadow-lg">
          Fill in Our Contact Form →
        </a>
        <a href="mailto:info@ia7globaltech.eu"
          className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-white/10 transition-all">
          Email Us Directly
        </a>
      </div>
      <p className="text-blue-200/60 text-xs mt-8">
        IA7 Global Tech · Kolonnenstraße 8, Berlin · info@ia7globaltech.eu
      </p>
    </div>
  </section>
);

const HomePage: React.FC = () => {
  return (
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
};

export default HomePage;
