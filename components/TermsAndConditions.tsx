import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-[#0f172a] text-white py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-[#0055ff] transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl heading uppercase leading-tight tracking-tighter">
            Terms & <span className="text-[#0055ff]">Conditions</span>
          </h1>
          <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
            Allgemeine Geschäftsbedingungen (AGB)
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-slate max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              1. Scope and Applicability
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">1.1</strong> These Terms and Conditions govern all contractual relationships between IA7 Global Tech
                (brand of IA7 Global Trading UG (haftungsbeschränkt), Germany) and its clients.
              </p>
              <p>
                <strong className="text-slate-900">1.2</strong> By engaging our services, the client agrees to these Terms and Conditions. Any conflicting
                terms proposed by the client are explicitly rejected unless confirmed in writing by IA7 Global
                Tech.
              </p>
              <p>
                <strong className="text-slate-900">1.3</strong> IA7 Global Tech acts as the exclusive contractual partner for all services. The technical
                execution of IT services is performed by subcontractors, including partners located outside the
                European Union (e.g., JGdeveloper, India).
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              2. Definition of Services
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">2.1</strong> IA7 Global Tech provides project management, coordination, and facilitation of IT
                solutions, including software development, technical support, and consulting.
              </p>
              <p>
                <strong className="text-slate-900">2.2</strong> All technical work, coding, and implementation are performed by external subcontractors.
                IA7 Global Tech is not a development company and does not execute technical services
                in-house.
              </p>
              <p>
                <strong className="text-slate-900">2.3</strong> The services include, but are not limited to:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Requirement analysis and project specification</li>
                <li>Coordination of development teams</li>
                <li>Quality assurance and delivery of completed projects</li>
                <li>Client communication and reporting</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              3. Client Responsibilities
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">3.1</strong> The client must provide all required information, documents, and access in a timely manner.
              </p>
              <p>
                <strong className="text-slate-900">3.2</strong> Delays or missing information from the client may result in postponed delivery dates, without
                IA7 Global Tech being liable for such delays.
              </p>
              <p>
                <strong className="text-slate-900">3.3</strong> Clients must comply with all applicable laws in connection with the services.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              4. Contracts and Offers
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">4.1</strong> Offers are non-binding unless explicitly stated otherwise.
              </p>
              <p>
                <strong className="text-slate-900">4.2</strong> Contracts are concluded only after written confirmation by IA7 Global Tech.
              </p>
              <p>
                <strong className="text-slate-900">4.3</strong> IA7 Global Tech reserves the right to refuse contracts without giving reasons.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              5. Fees and Payment Terms
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">5.1</strong> Fees are specified in the respective quotation or service agreement.
              </p>
              <p>
                <strong className="text-slate-900">5.2</strong> Payments are due within 14 days of the invoice date unless otherwise agreed in writing.
              </p>
              <p>
                <strong className="text-slate-900">5.3</strong> Late payments incur interest of 5% above the base rate and IA7 Global Tech may
                suspend services until payment is received.
              </p>
              <p>
                <strong className="text-slate-900">5.4</strong> All fees are invoiced by IA7 Global Trading UG, regardless of subcontractors involved.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              6. Intellectual Property and Ownership
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">6.1</strong> All intellectual property created by subcontractors in the course of the project is transferred
                to the client only after full payment.
              </p>
              <p>
                <strong className="text-slate-900">6.2</strong> IA7 Global Tech reserves the right to display anonymized work for marketing purposes.
              </p>
              <p>
                <strong className="text-slate-900">6.3</strong> Clients may not use IA7 Global Tech or subcontractor materials outside the agreed scope
                without written consent.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              7. Liability
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">7.1</strong> IA7 Global Tech acts solely as contractual coordinator. Liability for technical
                implementation lies primarily with subcontractors.
              </p>
              <p>
                <strong className="text-slate-900">7.2</strong> IA7 Global Tech's liability is limited to intentional misconduct and gross negligence.
                Liability for indirect damages, lost profits, or business interruption is excluded to the maximum
                extent permitted by law.
              </p>
              <p>
                <strong className="text-slate-900">7.3</strong> IA7 Global Tech is not liable for delays or failures caused by:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Subcontractors</li>
                <li>Third-party providers, APIs, or hosting</li>
                <li>Force majeure</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              8. Data Protection
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">8.1</strong> Personal data provided by the client will be processed in accordance with our Privacy
                Policy.
              </p>
              <p>
                <strong className="text-slate-900">8.2</strong> Client data may be transferred to subcontractors in India under GDPR-compliant
                safeguards (e.g., Standard Contractual Clauses).
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              9. Confidentiality
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">9.1</strong> All business information, project data, and technical specifications shared between client
                and IA7 Global Tech are confidential.
              </p>
              <p>
                <strong className="text-slate-900">9.2</strong> Confidentiality obligations continue for 5 years after the completion of services.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              10. Governing Law and Jurisdiction
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">10.1</strong> All contracts are governed by German law.
              </p>
              <p>
                <strong className="text-slate-900">10.2</strong> Exclusive jurisdiction for all disputes arising from these Terms and Conditions is the
                competent court in Berlin, Germany.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              11. Final Provisions
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">11.1</strong> Amendments or additions to these Terms require written form.
              </p>
              <p>
                <strong className="text-slate-900">11.2</strong> Should individual provisions of these Terms be invalid, the validity of remaining provisions
                remains unaffected.
              </p>
            </div>
          </section>

          {/* Effective Date */}
          <div className="mt-16 pt-8 border-t-2 border-slate-200">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Effective Date: January 2026
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-16 text-center">
          <Link 
            to="/" 
            className="inline-block bg-[#0f172a] text-white px-12 py-4 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-[#0055ff] transition-all shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
