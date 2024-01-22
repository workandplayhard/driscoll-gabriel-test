// LanguageSelector.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="form-group">
      <select
        className="p-1"
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
