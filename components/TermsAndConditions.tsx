import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TermsAndConditions: React.FC = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    document.title = t('terms_page.meta_title');
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
            {t('terms_page.back_home')}
          </Link>
          <h1 className="text-4xl md:text-6xl heading uppercase leading-tight tracking-tighter">
            {t('terms_page.title_prefix')} <span className="text-[#0055ff]">{t('terms_page.title_suffix')}</span>
          </h1>
          <p className="text-sm text-slate-400 mt-4 font-medium uppercase tracking-wider">
            {t('terms_page.subtitle')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-slate max-w-none">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.1.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">1.1</strong> {t('terms_page.sections.1.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">1.2</strong> {t('terms_page.sections.1.content.2')}
              </p>
              <p>
                <strong className="text-slate-900">1.3</strong> {t('terms_page.sections.1.content.3')}
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.2.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">2.1</strong> {t('terms_page.sections.2.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">2.2</strong> {t('terms_page.sections.2.content.2')}
              </p>
              <p>
                <strong className="text-slate-900">2.3</strong> {t('terms_page.sections.2.content.3')}
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>{t('terms_page.sections.2.content.list.1')}</li>
                <li>{t('terms_page.sections.2.content.list.2')}</li>
                <li>{t('terms_page.sections.2.content.list.3')}</li>
                <li>{t('terms_page.sections.2.content.list.4')}</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.3.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">3.1</strong> {t('terms_page.sections.3.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">3.2</strong> {t('terms_page.sections.3.content.2')}
              </p>
              <p>
                <strong className="text-slate-900">3.3</strong> {t('terms_page.sections.3.content.3')}
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.4.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">4.1</strong> {t('terms_page.sections.4.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">4.2</strong> {t('terms_page.sections.4.content.2')}
              </p>
              <p>
                <strong className="text-slate-900">4.3</strong> {t('terms_page.sections.4.content.3')}
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.5.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">5.1</strong> {t('terms_page.sections.5.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">5.2</strong> {t('terms_page.sections.5.content.2')}
              </p>
              <p>
                <strong className="text-slate-900">5.3</strong> {t('terms_page.sections.5.content.3')}
              </p>
              <p>
                <strong className="text-slate-900">5.4</strong> {t('terms_page.sections.5.content.4')}
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.6.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">6.1</strong> {t('terms_page.sections.6.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">6.2</strong> {t('terms_page.sections.6.content.2')}
              </p>
              <p>
                <strong className="text-slate-900">6.3</strong> {t('terms_page.sections.6.content.3')}
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.7.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">7.1</strong> {t('terms_page.sections.7.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">7.2</strong> {t('terms_page.sections.7.content.2')}
              </p>
              <p>
                <strong className="text-slate-900">7.3</strong> {t('terms_page.sections.7.content.3')}
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>{t('terms_page.sections.7.content.list.1')}</li>
                <li>{t('terms_page.sections.7.content.list.2')}</li>
                <li>{t('terms_page.sections.7.content.list.3')}</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.8.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">8.1</strong> {t('terms_page.sections.8.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">8.2</strong> {t('terms_page.sections.8.content.2')}
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.9.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">9.1</strong> {t('terms_page.sections.9.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">9.2</strong> {t('terms_page.sections.9.content.2')}
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.10.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">10.1</strong> {t('terms_page.sections.10.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">10.2</strong> {t('terms_page.sections.10.content.2')}
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-[#0055ff] pb-3">
              {t('terms_page.sections.11.title')}
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900">11.1</strong> {t('terms_page.sections.11.content.1')}
              </p>
              <p>
                <strong className="text-slate-900">11.2</strong> {t('terms_page.sections.11.content.2')}
              </p>
            </div>
          </section>

          {/* Effective Date */}
          <div className="mt-16 pt-8 border-t-2 border-slate-200">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-900">
              {t('terms_page.effective_date')}
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block bg-[#0f172a] text-white px-12 py-4 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-[#0055ff] transition-all shadow-lg"
          >
            {t('terms_page.back_home')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
