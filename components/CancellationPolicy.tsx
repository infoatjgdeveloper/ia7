import React from 'react';
import { Link } from 'react-router-dom';

const CancellationPolicy: React.FC = () => {
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
                        Service <span className="text-[#0055ff]">Cancellation</span>
                    </h1>
                    <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
                        Cancellation and Termination Policy
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-slate max-w-none">

                    {/* Introduction */}
                    <div className="mb-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-slate-700 leading-relaxed font-medium">
                            This policy outlines the terms and conditions for service cancellation and contract termination
                            between IA7 Global Tech and its clients. All cancellation terms are subject to written confirmation
                            in the service agreement.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            1. Contract Cancellation by Client
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <ul className="list-disc pl-8 space-y-3">
                                <li>
                                    <strong className="text-slate-900">Pre-Project Cancellation:</strong> Clients may cancel services
                                    prior to project start without penalty.
                                </li>
                                <li>
                                    <strong className="text-slate-900">Post-Commencement Cancellation:</strong> Once work has commenced,
                                    cancellation requires written notice. Fees may apply for work already completed.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            2. Contract Termination by IA7 Global Tech
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                IA7 Global Tech reserves the right to terminate a contract under the following circumstances:
                            </p>
                            <ul className="list-disc pl-8 space-y-3">
                                <li>
                                    <strong className="text-slate-900">Non-Payment:</strong> Failure to make payments according to
                                    agreed terms and schedule.
                                </li>
                                <li>
                                    <strong className="text-slate-900">Breach of Obligations:</strong> Client's failure to fulfill
                                    contractual obligations or provide required information and resources.
                                </li>
                                <li>
                                    <strong className="text-slate-900">Force Majeure:</strong> Circumstances beyond reasonable control
                                    that prevent service delivery.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            3. Refunds
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                <strong className="text-slate-900">Non-Refundable Services:</strong> Fees paid for completed work
                                or services already rendered are non-refundable.
                            </p>
                            <p className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900">
                                <strong>Important Notice:</strong> All refund requests will be evaluated on a case-by-case basis
                                in accordance with the specific terms outlined in your service agreement.
                            </p>
                        </div>
                    </section>

                    {/* Important Notice */}
                    <div className="mt-16 p-8 bg-[#0f172a] text-white rounded-lg">
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[#0055ff]">
                            Written Confirmation Required
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            All cancellation terms are subject to written confirmation in the service agreement.
                            For any questions regarding cancellation or termination, please contact our team at{' '}
                            <a href="mailto:sales@ia7globaltech.eu" className="text-[#0055ff] hover:underline font-bold">
                                sales@ia7globaltech.eu
                            </a>
                        </p>
                    </div>

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

export default CancellationPolicy;
