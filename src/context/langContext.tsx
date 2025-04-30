import React, { createContext, useContext, useState } from "react";
import { Lang } from "../types/types";
import engLang from "../lang/en-EN.json";
import espLang from "../lang/es-ES.json";
import { IntlProvider } from "react-intl";

interface LangContextType {
    changeLanguage: (lang: string) => void;
    lang: string
}

export const langContext = createContext<LangContextType | null>(null);

export function LangProvider( {children} ) {
    
    const [lang, setLang] = useState<typeof espLang | typeof engLang>(espLang)
    const [locale, setLocale] = useState("es-ES")

    const changeLang = (lang: string) => {
            if (lang === "eng") {
                setLang(engLang)
                setLocale("en-EN")
            } else if (lang === "esp") {
                setLang(espLang)
                setLocale("es-ES")
        }
    }

    return (
        <langContext.Provider value={{
            changeLanguage: changeLang,
            lang: locale
        }}
        >
            <IntlProvider locale={locale} messages={lang}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}