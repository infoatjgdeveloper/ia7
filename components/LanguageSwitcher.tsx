import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 text-xs font-bold uppercase rounded ${i18n.language === 'en' ? 'bg-[#0055ff] text-white' : 'text-slate-500 hover:text-[#0055ff]'
                    }`}
            >
                EN
            </button>
            <span className="text-slate-300">|</span>
            <button
                onClick={() => changeLanguage('de')}
                className={`px-2 py-1 text-xs font-bold uppercase rounded ${i18n.language === 'de' ? 'bg-[#0055ff] text-white' : 'text-slate-500 hover:text-[#0055ff]'
                    }`}
            >
                DE
            </button>
        </div>
    );
};

export default LanguageSwitcher;
