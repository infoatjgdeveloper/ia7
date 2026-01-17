import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
                        Privacy <span className="text-[#0055ff]">Policy</span>
                    </h1>
                    <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
                        GDPR Compliant Data Protection Notice
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-slate max-w-none">

                    {/* Section 1 - Data Controller */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            1. Data Controller
                        </h2>
                        <div className="space-y-2 text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-lg">
                            <p className="font-bold text-slate-900">IA7 Global Trading UG (haftungsbeschränkt)</p>
                            <p>Brand: <span className="text-slate-900 font-semibold">IA7 Global Tech</span></p>
                            <p>Kolonnenstraße 8, Berlin, Germany</p>
                            <p>Managing Director: <span className="text-slate-900 font-semibold">Agnieszka Pasek</span></p>
                            <p>Email: <a href="mailto:info@ia7globaltech.eu" className="text-[#0055ff] hover:underline font-semibold">info@ia7globaltech.eu</a></p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            2. General Information on Data Processing
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                We take the protection of your personal data very seriously. Personal data is processed only
                                according to statutory provisions, particularly the EU General Data Protection Regulation
                                (GDPR).
                            </p>
                            <p className="font-semibold text-slate-900">This privacy policy explains:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>What data we collect</li>
                                <li>How we use it</li>
                                <li>Your rights regarding your data</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            3. Collection and Processing of Personal Data
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>We process personal data only when necessary, including:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Contact via email or contact form</li>
                                <li>Service inquiries</li>
                                <li>Contract execution</li>
                                <li>Project coordination</li>
                                <li>Invoicing and accounting</li>
                            </ul>
                            <p className="font-semibold text-slate-900 mt-6">Types of data may include:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Name and company name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Project specifications</li>
                                <li>Communication content</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            4. Purpose of Processing
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Data is processed for:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Responding to inquiries</li>
                                <li>Contract initiation and execution</li>
                                <li>Coordination and delivery of IT services</li>
                                <li>Customer communication</li>
                                <li>Invoicing and bookkeeping</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            5. Legal Basis
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Data processing is based on Article 6(1) GDPR:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li><strong className="text-slate-900">(b)</strong> Performance of a contract</li>
                                <li><strong className="text-slate-900">(c)</strong> Legal obligations</li>
                                <li><strong className="text-slate-900">(f)</strong> Legitimate interest in efficient business operations</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            6. Subcontractors / Third-Party Processing
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Some services are carried out by trusted external partners, including providers outside the European Union.</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Technical execution of IT projects is handled by these external partners</li>
                                <li>IA7 Global Tech is the sole contractual partner for the client</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            7. Data Transfer to Third Countries
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Some external partners may process personal data in countries outside the EU, including India.</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>India is considered a third country under GDPR and does not have an EU adequacy decision</li>
                            </ul>
                            <p className="font-semibold text-slate-900 mt-4">Data transfer is based on:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Standard Contractual Clauses (SCCs) under GDPR</li>
                                <li>Data protection agreements with external partners</li>
                                <li>Organizational and technical safeguards to ensure EU-level protection</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            8. Recipients of Data
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Data may be shared with:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Internal responsible departments</li>
                                <li>External subcontractors for service delivery</li>
                                <li>Tax advisors and accounting providers</li>
                                <li>Authorities where legally required</li>
                            </ul>
                            <p className="mt-4 font-semibold text-slate-900">Data is not shared for marketing purposes.</p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            9. Data Retention
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Personal data is stored only as long as necessary or legally required.</p>
                            <p>Afterward, it is securely deleted.</p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            10. Contact Forms and Email Communication
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Information sent via contact form or email is stored for processing the request and follow-ups.</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Data is not shared without consent, except where required to fulfill contracts</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            11. Cookies
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Our website may use cookies for functionality and analytics.</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Cookies are used only with consent (for non-essential cookies)</li>
                                <li>Necessary cookies are used on the basis of legitimate interest</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            12. Server Log Files
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Our hosting provider automatically collects server log information:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Operating system</li>
                                <li>Referrer URL</li>
                                <li>Date and time of request</li>
                            </ul>
                            <p className="mt-4">These are used for security and are not merged with other data sources.</p>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            13. Third-Party Links Disclaimer
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Our website may contain links to external websites.</p>
                            <p className="p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900">
                                <strong>Important:</strong> IA7 Global Tech is not responsible for the data processing or privacy practices of
                                these third parties. Please review their privacy policies before submitting personal data.
                            </p>
                        </div>
                    </section>

                    {/* Section 14 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            14. Your Rights
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li><strong className="text-slate-900">Access your data</strong> (Art. 15 GDPR)</li>
                                <li><strong className="text-slate-900">Correct inaccurate data</strong> (Art. 16 GDPR)</li>
                                <li><strong className="text-slate-900">Delete data</strong> (Art. 17 GDPR)</li>
                                <li><strong className="text-slate-900">Restrict processing</strong> (Art. 18 GDPR)</li>
                                <li><strong className="text-slate-900">Data portability</strong> (Art. 20 GDPR)</li>
                                <li><strong className="text-slate-900">Object to processing</strong> (Art. 21 GDPR)</li>
                            </ul>
                            <p className="mt-4">
                                Send a request via <a href="mailto:info@ia7globaltech.eu" className="text-[#0055ff] hover:underline font-semibold">info@ia7globaltech.eu</a>.
                            </p>
                        </div>
                    </section>

                    {/* Section 15 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            15. Withdrawal of Consent
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>Where processing is based on consent, you may withdraw it at any time.</p>
                        </div>
                    </section>

                    {/* Section 16 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            16. Right to Lodge a Complaint
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>You may lodge a complaint with a supervisory authority in your EU country or in Germany.</p>
                        </div>
                    </section>

                    {/* Section 17 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            17. Data Security
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                We implement technical and organizational measures to protect personal data against
                                unauthorized access, loss, or manipulation.
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

export default PrivacyPolicy;
