import { useTranslation } from "react-i18next";

export const useLanguages = () => {
  const { i18n } = useTranslation();

  // Change Language Handler
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Get Current Language Handler
  const getCurrentLanguage = () => {
    return i18n.language || window.localStorage.i18nextLng;
  };
  const currentLanguage = getCurrentLanguage();

  return { changeLanguage, getCurrentLanguage, currentLanguage };
};
