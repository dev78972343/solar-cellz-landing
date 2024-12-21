import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN_US from "../src/locales/en-US/en-US.json";
import translationES from "../src/locales/es/es.json";
import translationEN_CA from "../src/locales/ca/en-CA.json";
import translationFR_CA from "../src/locales/ca/fr-CA.json";

// Supported language constants
import { LANGUAGES } from "./constants/supported-languages";

const resources = {
  [LANGUAGES.enUS]: {
    translation: translationEN_US,
  },
  [LANGUAGES.es]: {
    translation: translationES,
  },
  [LANGUAGES.enCA]: {
    translation: translationEN_CA,
  },
  [LANGUAGES.frCA]: {
    translation: translationFR_CA,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: LANGUAGES.enUS,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
