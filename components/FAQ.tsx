import React from 'react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "Do you do all the development work in-house?",
            answer: "No. IA7 Global Tech acts as your single point of contact. The technical work is performed by experienced external specialists, coordinated and managed by IA7 Global Tech to ensure high quality."
        },
        {
            question: "Where are your technical teams located?",
            answer: "Technical services may be provided by partners outside the EU, under strict data protection and quality standards. IA7 Global Tech remains your contractual partner."
        },
        {
            question: "How do you handle my personal or business data?",
            answer: "Your data is handled according to our Privacy Policy, GDPR-compliant, including any transfers to non-EU partners."
        },
        {
            question: "How can I request changes to my project?",
            answer: "Project modifications can be requested at any time. IA7 Global Tech will coordinate with our technical partners and provide a revised timeline or quotation."
        },
        {
            question: "What happens if I'm not satisfied with the service?",
            answer: "IA7 Global Tech maintains open communication throughout the project. If issues arise, we will address them directly, and if necessary, work with external partners to resolve them."
        }
    ];

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
                        Frequently Asked <span className="text-[#0055ff]">Questions</span>
                    </h1>
                    <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
                        Common Questions About Our Services
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-slate max-w-none">

                    {/* Introduction */}
                    <div className="mb-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-slate-700 leading-relaxed font-medium">
                            Find answers to the most common questions about IA7 Global Tech's services, processes,
                            and how we work with our clients and technical partners.
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-8">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-l-4 border-[#0055ff] pl-6 py-4 bg-white hover:bg-slate-50 transition-colors"
                            >
                                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-3 flex items-start gap-3">
                                    <span className="text-[#0055ff] text-sm">Q{index + 1}:</span>
                                    <span>{faq.question}</span>
                                </h3>
                                <div className="ml-8">
                                    <p className="text-slate-600 leading-relaxed">
                                        <strong className="text-slate-900">A:</strong> {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-16 p-8 bg-[#0f172a] text-white rounded-lg">
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[#0055ff]">
                            Still Have Questions?
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            If you have additional questions or need more information about our services,
                            please don't hesitate to reach out to our team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:sales@ia7globaltech.eu"
                                className="inline-flex items-center gap-2 bg-[#0055ff] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#0f172a] transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Us
                            </a>
                            <a
                                href="tel:+491625767497"
                                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#0055ff] text-[#0055ff] px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#0055ff] hover:text-white transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Us
                            </a>
                        </div>
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

export default FAQ;
