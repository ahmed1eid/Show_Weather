import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        city: "City",
        temperature: "Temperature",
        min: "Min",
        max: "Max",
        change_lang: "Arabic",
        search: "search",
        enter_city:"enter city",
      }
    },
    ar: {
      translation: {
        city: "المدينة",
        temperature: "الحرارة",
        min: "الصغرى",
        max: "الكبرى",
        change_lang: "English",
        search: "بحث",
        enter_city:"اسم المدينة",
      }
    }
  },
  lng: "ar",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;