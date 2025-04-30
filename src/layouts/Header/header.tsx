import "./header.css";  
import React from "react";
import { useContext } from "react";
import { langContext } from "../../context/langContext";

export default function Header() {
  
  const changeLanguage = useContext(langContext);

  return (
    <header className="header">
      <a href=""><img src="assets/logo-4-png.png" alt="logo sitio web" /></a>
      <button onClick={() => changeLanguage?.changeLanguage("esp")}>Espanol</button>
      <button onClick={() => changeLanguage?.changeLanguage("eng")}>English</button>
    </header>
  );
}
