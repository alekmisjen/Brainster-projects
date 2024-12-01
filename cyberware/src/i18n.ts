import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Initialize i18n
i18n
  .use(Backend) // Load translations from a backend server or static files
  .use(LanguageDetector) // Automatically detect user's language
  .use(initReactI18next) // Connects i18next to React
  .init({
    fallbackLng: "en", // Default language
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Translation files path
    },
    // resources: {
    //   en: {
    //     translation: {
    //       "Emergency Response Plan": "Emergency Response Plan",
    //       Support: "Support",
    //       Home: "Home",
    //       hero: {
    //         preTitle: "Your Cybersecurity Experts Securing the Future Today",
    //         title: "Tailored, AI-driven solutions to protect your business",
    //         desc: "Protecting the digital future through innovative cybersecurity solutions, we empower businesses to safeguard their assets, ensure compliance, and maintain trust in an increasingly connected world",
    //         buttonLabel: "Започнете денес", // Add this line
    //       },
    //     },
    //   },

    //   mk: {
    //     translation: {
    //       "Emergency Response Plan": "Итен план",
    //       Support: "Подржка",
    //       Home: "Doma",
    //       hero: {
    //         preTitle: "Вашиот нов почеток",
    //         title: "Добредојдовте во нашата платформа",
    //         desc: "Ова е опис за херој секцијата. Почнете денес!",
    //         buttonLabel: "Започнете денес", // Add this line
    //       },
    //     },
    //   },
    // },
  });

export default i18n;
