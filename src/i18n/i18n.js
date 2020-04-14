import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        defaultNS: ['common'],
        detection: {
            order: ['localStorage'],
            lookupLocalStorage: 'lang',
            // cache user language on
            caches: ['localStorage']
        },
        debug: process.env.NODE_ENV === 'development'
    })


export default i18n