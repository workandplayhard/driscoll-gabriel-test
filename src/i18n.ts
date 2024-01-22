// Initialize i18next and load resources
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./lang/en/translation.json";
import esTranslation from "./lang/es/translation.json";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: { translation: enTranslation },
            es: { translation: esTranslation },
        },
        lng: "en", // Default language
        fallbackLng: "en", // Fallback language
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;
