// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";
import translationRU from "./locales/ru/translation-ru.json";
import translationES from "./locales/es/translation-es.json";
import translationDE from "./locales/de/translation-de.json";
import translationZH from "./locales/zh/translation-zh.json";

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
  de: {
    translation: translationDE,
  },
  ru: {
    translation: translationRU,
  },
  es: {
    translation: translationES,
  },
  zh: {
    translation: translationZH,
  },
};

i18n
  .use(initReactI18next) // start i18next for react
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en", // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
