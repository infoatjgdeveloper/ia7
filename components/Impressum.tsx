import React from 'react';
import { Link } from 'react-router-dom';

const Impressum: React.FC = () => {
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
                        Impressum / <span className="text-[#0055ff]">Imprint</span>
                    </h1>
                    <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
                        Legal Notice According to German Law (§5 TMG)
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-slate max-w-none">

                    {/* Company Information */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            Company Information
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed bg-slate-50 p-8 rounded-lg border border-slate-200">
                            <div>
                                <p className="text-2xl font-black text-slate-900 mb-2">IA7 Global Tech</p>
                                <p className="text-sm text-slate-500">(Brand of)</p>
                                <p className="text-lg font-bold text-slate-900 mt-2">IA7 Global Trading UG (haftungsbeschränkt)</p>
                            </div>

                            <div className="pt-4 border-t border-slate-200">
                                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Address</p>
                                <p>Kolonnenstraße 8</p>
                                <p>DE-10827 Berlin</p>
                                <p>Germany</p>
                            </div>

                            <div className="pt-4 border-t border-slate-200">
                                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Managing Director</p>
                                <p className="text-slate-900 font-semibold">Agnieszka Pasek</p>
                            </div>

                            <div className="pt-4 border-t border-slate-200">
                                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Contact</p>
                                <p>
                                    Email: <a href="mailto:info@ia7globaltech.eu" className="text-[#0055ff] hover:underline font-semibold">info@ia7globaltech.eu</a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Legal Information */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            Legal Information
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Legal Form</p>
                                    <p className="text-slate-900 font-semibold">UG (haftungsbeschränkt)</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">Register Court</p>
                                    <p className="text-slate-900 font-semibold">Amtsgericht Charlottenburg Berlin</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">HRB Number</p>
                                    <p className="text-slate-900 font-semibold">269255</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">VAT ID</p>
                                    <p className="text-slate-900 font-semibold">DE451313995</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            Disclaimer
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <div className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                                <p className="font-semibold text-amber-900 mb-3">
                                    <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Important Notice
                                </p>
                                <ul className="space-y-3 text-amber-900">
                                    <li className="flex items-start">
                                        <span className="text-[#0055ff] mr-2 font-bold">•</span>
                                        <span>IA7 Global Tech is the contractual partner; technical work is delivered by external partners</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#0055ff] mr-2 font-bold">•</span>
                                        <span>Not liable for failures caused by subcontractors, hosting providers, or third-party services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#0055ff] mr-2 font-bold">•</span>
                                        <span>Content for informational purposes only; external links outside our control</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Additional Legal Notice */}
                    <div className="mt-16 p-8 bg-[#0f172a] text-white rounded-lg">
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[#0055ff]">
                            Legal Compliance
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            This Impressum complies with German legal requirements under §5 TMG (Telemediengesetz) and §55 RStV (Rundfunkstaatsvertrag).
                            For any legal inquiries or concerns, please contact us at{' '}
                            <a href="mailto:info@ia7globaltech.eu" className="text-[#0055ff] hover:underline font-bold">
                                info@ia7globaltech.eu
                            </a>
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

export default Impressum;
