import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("EN");

  const translations = {
    EN: {
      categories: "Categories",
      tech: "Tech",
      sports: "Sports",
      health: "Health",
      changeLanguage: "Change Language",
    },
    HI: {
      categories: "श्रेणियाँ",
      tech: "तकनीक",
      sports: "खेल",
      health: "स्वास्थ्य",
      changeLanguage: "भाषा बदलें",
    },
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "HI" : "EN"));
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {/* ✅ Wrap children inside a single parent element */}
      <>
        {children}
      </>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default LanguageProvider;
