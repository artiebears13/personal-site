import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
    .use(initReactI18next) // проходит i18next экземпляр для react-i18next
    .use(LanguageDetector) // обнаруживает язык пользователя
    .use(HttpBackend) // загружает переводы с сервера
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        fallbackLng: 'en', // используй английский, если язык не обнаружен
        supportedLngs: ['ru', 'en'],
        load: 'languageOnly',
        debug: true,
        interpolation: {
            escapeValue: false, // не требуется для react, так как он умеет избегать XSS
        }
    });

export default i18n;
