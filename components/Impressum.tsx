import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Impressum: React.FC = () => {
    const { t } = useTranslation();

    React.useEffect(() => {
        document.title = t('impressum_page.meta_title');
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
                        {t('impressum_page.back_home')}
                    </Link>
                    <h1 className="text-4xl md:text-6xl heading uppercase leading-tight tracking-tighter">
                        {t('impressum_page.title_prefix')} <span className="text-[#0055ff]">{t('impressum_page.title_suffix')}</span>
                    </h1>
                    <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
                        {t('impressum_page.subtitle')}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-slate max-w-none">

                    {/* Company Information */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            {t('impressum_page.company_info.title')}
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed bg-slate-50 p-8 rounded-lg border border-slate-200">
                            <div>
                                <p className="text-2xl font-black text-slate-900 mb-2">IA7 Global Tech</p>
                                <p className="text-sm text-slate-500">{t('impressum_page.company_info.brand_of')}</p>
                                <p className="text-lg font-bold text-slate-900 mt-2">IA7 Global Trading UG (haftungsbeschränkt)</p>
                            </div>

                            <div className="pt-4 border-t border-slate-200">
                                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">{t('impressum_page.company_info.address_label')}</p>
                                <p>Kolonnenstraße 8</p>
                                <p>DE-10827 Berlin</p>
                                <p>Germany</p>
                            </div>

                            <div className="pt-4 border-t border-slate-200">
                                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">{t('impressum_page.company_info.director_label')}</p>
                                <p className="text-slate-900 font-semibold">Agnieszka Pasek</p>
                            </div>

                            <div className="pt-4 border-t border-slate-200">
                                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">{t('impressum_page.company_info.contact_label')}</p>
                                <p>
                                    Email: <a href="mailto:info@ia7globaltech.eu" className="text-[#0055ff] hover:underline font-semibold">info@ia7globaltech.eu</a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Legal Information */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            {t('impressum_page.legal_info.title')}
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">{t('impressum_page.legal_info.legal_form')}</p>
                                    <p className="text-slate-900 font-semibold">UG (haftungsbeschränkt)</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">{t('impressum_page.legal_info.register_court')}</p>
                                    <p className="text-slate-900 font-semibold">Amtsgericht Charlottenburg Berlin</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">{t('impressum_page.legal_info.hrb_number')}</p>
                                    <p className="text-slate-900 font-semibold">269255</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
                                    <p className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">{t('impressum_page.legal_info.vat_id')}</p>
                                    <p className="text-slate-900 font-semibold">DE451313995</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
                            {t('impressum_page.disclaimer.title')}
                        </h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <div className="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                                <p className="font-semibold text-amber-900 mb-3">
                                    <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    {t('impressum_page.disclaimer.notice_title')}
                                </p>
                                <ul className="space-y-3 text-amber-900">
                                    <li className="flex items-start">
                                        <span className="text-[#0055ff] mr-2 font-bold">•</span>
                                        <span>{t('impressum_page.disclaimer.item1')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#0055ff] mr-2 font-bold">•</span>
                                        <span>{t('impressum_page.disclaimer.item2')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#0055ff] mr-2 font-bold">•</span>
                                        <span>{t('impressum_page.disclaimer.item3')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Additional Legal Notice */}
                    <div className="mt-16 p-8 bg-[#0f172a] text-white rounded-lg">
                        <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[#0055ff]">
                            {t('impressum_page.compliance.title')}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            {t('impressum_page.compliance.text')}{' '}
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
                        {t('impressum_page.back_home')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
