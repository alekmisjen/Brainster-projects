import React, { useState } from "react";
import { languages } from "../../types/languages";
import "./DropButtonStyle.css";
interface DropdownButtonProps {
  label: string;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  currentLanguage: string; // Receive current language from parent
  onLanguageChange: (language: string) => void; // Function to update the language
}

export const DropdownButton = ({
  label,
  icon,
  size = "small",

  onLanguageChange,
}: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false); // Dropdown state

  const toggleDropdownButton = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  const handleLanguageSelect = (language: string) => {
    onLanguageChange(language); // Update the selected language
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className={`dropdown-button-container button-${size}`}>
      <button onClick={toggleDropdownButton} className="DropdownButton">
        {icon && icon}
        {label}
        <i className="fas fa-chevron-down"></i>
      </button>
      {isOpen && (
        <ul className="custom-dropdown-menu">
          {languages.map((language) => (
            <li
              key={language.value}
              onClick={() => handleLanguageSelect(language.value)}
            >
              {language.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
