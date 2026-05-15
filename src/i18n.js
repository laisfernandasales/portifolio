import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslation from './locales/pt/translation.json';
import enTranslation from './locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: ptTranslation },
      en: { translation: enTranslation },
    },
    lng: 'pt',        // idioma padrão
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React já faz escape
    },
  });

export default i18n;
