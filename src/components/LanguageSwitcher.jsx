import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage, translations } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="px-4 py-2 bg-gray-200 rounded-md">
      {translations[language].changeLanguage}
    </button>
  );
}
