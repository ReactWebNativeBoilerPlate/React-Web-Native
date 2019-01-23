import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

// Import all locales
import en from './en.json';
import he from './he.json';

// the translations
const resources = {
    en: {
      translation: en
    },
    he: {
      translation: he
    }
  };

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;