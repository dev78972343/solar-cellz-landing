import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../src/locales/en/en.json";
import translationES from "../src/locales/es/es.json";
import translationDE from "../src/locales/de/de.json";
import translationFR from "../src/locales/fr/fr.json";

// Supported language constants
import { LANGUAGES } from "./constants/supported-languages";

const resources = {
  [LANGUAGES.en]: {
    translation: translationEN,
  },
  [LANGUAGES.es]: {
    translation: translationES,
  },
  [LANGUAGES.de]: {
    translation: translationDE,
  },
  [LANGUAGES.fr]: {
    translation: translationFR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: LANGUAGES.en,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
