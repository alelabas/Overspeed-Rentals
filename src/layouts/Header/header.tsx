import "./header.css";  
import React from "react";
import { useContext } from "react";
import { langContext } from "../../context/langContext";

export default function Header() {
  
  const changeLanguage = useContext(langContext);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    changeLanguage?.changeLanguage(selectedLanguage);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <a href=""><img src="assets/logo-4-png.png" alt="logo sitio web" /></a>
        </div>
        <div className="language-buttons">
          <select name="language-select" onChange={handleLanguageChange} defaultValue="esp">
            <option value="esp">Spanish</option>
            <option value="eng">English</option>
          </select>
        </div>
      </div>
    </header>
  );
}
