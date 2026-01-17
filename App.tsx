
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TermsAndConditions from './components/TermsAndConditions';
import CancellationPolicy from './components/CancellationPolicy';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import Impressum from './components/Impressum';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-[#0055ff]/10 selection:text-[#0055ff] bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
