import React, { useEffect, useRef, useState } from "react";
import { languages } from "../../types/languages";
import "./DropButtonStyle.css";

interface DropdownButtonProps {
  label: string;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  currentLanguage: string; // Receive current language from parent
  changeLanguage: (language: string) => void; // Function to update the language
}

export const DropdownButton = ({
  label,
  icon,
  size = "small",
  changeLanguage,
}: DropdownButtonProps) => {
  //const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Dropdown state

  const toggleDropdownButton = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleLanguageSelect = (language: string) => {
    changeLanguage(language); // Update the selected language
    // console.log("i18n.language:", i18n.language);
    setIsOpen(false); // Close the dropdown
  };
  useEffect(() => {
    const closeDropdown = (event: Event) => {
      // Check if click is outside dropdown
      if (
        event.type === "mousedown" &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
      // Close on scroll
      if (event.type === "scroll") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);
    window.addEventListener("scroll", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
      window.removeEventListener("scroll", closeDropdown);
    };
  }, []);
  return (
    <div
      className={`dropdown-button-container button-${size}`}
      ref={dropdownRef}
    >
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
