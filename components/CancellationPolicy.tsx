import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CancellationPolicy: React.FC = () => {
    const { t } = useTranslation();

    React.useEffect(() => {
        document.title = t('cancellation_page.meta_title');
    }, [t]);

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
                        {t('cancellation_page.back_home')}
                    </Link>
                    <h1 className="text-4xl md:text-6xl heading uppercase leading-tight tracking-tighter">
                        {t('cancellation_page.title_prefix')} <span className="text-[#0055ff]">{t('cancellation_page.title_suffix')}</span>
                    </h1>
                    <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
                        {t('cancellation_page.subtitle')}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-slate max-w-none">

                    {/* Introduction */}
                    <div className="mb-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="text-slate-700 leading-relaxed font-medium">
                            {t('cancellation_page.intro')}
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            {t('cancellation_page.sections.1.title')}
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <ul className="list-disc pl-8 space-y-3">
                                <li>
                                    {t('cancellation_page.sections.1.list.1')}
                                </li>
                                <li>
                                    {t('cancellation_page.sections.1.list.2')}
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            {t('cancellation_page.sections.2.title')}
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                {t('cancellation_page.sections.2.intro')}
                            </p>
                            <ul className="list-disc pl-8 space-y-3">
                                <li>
                                    {t('cancellation_page.sections.2.list.1')}
                                </li>
                                <li>
                                    {t('cancellation_page.sections.2.list.2')}
                                </li>
                                <li>
                                    {t('cancellation_page.sections.2.list.3')}
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            {t('cancellation_page.sections.3.title')}
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                {t('cancellation_page.sections.3.content.1')}
                            </p>
                            <p className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900">
                                {t('cancellation_page.sections.3.notice')}
                            </p>
                        </div>
                    </section>

                    {/* Important Notice */}
                    <div className="mt-16 p-8 bg-[#0f172a] text-white rounded-lg">
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[#0055ff]">
                            {t('cancellation_page.confirmation.title')}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            {t('cancellation_page.confirmation.text')}{' '}
                            <a href="mailto:sales@ia7globaltech.eu" className="text-[#0055ff] hover:underline font-bold">
                                sales@ia7globaltech.eu
                            </a>
                        </p>
                    </div>

                    {/* Effective Date */}
                    <div className="mt-16 pt-8 border-t-2 border-slate-200">
                        <p className="text-sm font-bold uppercase tracking-wider text-slate-900">
                            {t('cancellation_page.effective_date')}
                        </p>
                    </div>
                </div>

                {/* Back to Home Button */}
                <div className="mt-16 text-center">
                    <Link
                        to="/"
                        className="inline-block bg-[#0f172a] text-white px-12 py-4 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-[#0055ff] transition-all shadow-lg"
                    >
                        {t('cancellation_page.back_home')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CancellationPolicy;
