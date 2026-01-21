import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
    const { t } = useTranslation();
    const faqs = t('faq_page.items', { returnObjects: true }) as Array<{ question: string; answer: string }>;

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
                        {t('faq_page.back_home')}
                    </Link>
                    <h1 className="text-4xl md:text-6xl heading uppercase leading-tight tracking-tighter">
                        {t('faq_page.title_prefix')} <span className="text-[#0055ff]">{t('faq_page.title_suffix')}</span>
                    </h1>
                    <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
                        {t('faq_page.subtitle')}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-slate max-w-none">

                    {/* Introduction */}
                    <div className="mb-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-slate-700 leading-relaxed font-medium">
                            {t('faq_page.intro')}
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
                            {t('faq_page.still_questions')}
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            {t('faq_page.contact_text')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:sales@ia7globaltech.eu"
                                className="inline-flex items-center gap-2 bg-[#0055ff] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#0f172a] transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {t('faq_page.email_us')}
                            </a>
                            <a
                                href="tel:+491625767497"
                                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#0055ff] text-[#0055ff] px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#0055ff] hover:text-white transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {t('faq_page.call_us')}
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
                        {t('faq_page.back_home')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
