// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
  .use(initReactI18next) // react için i18next'i başlat
  .init({
    resources,
    lng: "en", // varsayılan dil
    interpolation: {
      escapeValue: false, // HTML dizesi içeriği için kaçışı devre dışı bırak
    },
  });

export default i18n;
