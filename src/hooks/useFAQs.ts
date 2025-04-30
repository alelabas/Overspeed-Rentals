import dataList from "../data/data.json"
import { FAQs } from "../types/types"
import { useContext } from "react"
import { langContext } from "../context/langContext" 

export function useFAQs (): FAQs[] {

    const lang = useContext(langContext)
    const language = lang?.lang === "es-ES" ? "esp" : "eng" 

    let faqs: FAQs[] = dataList.FAQs[language]

    return faqs.map( faq => ({
        id: faq.id,
        question: faq.question,
        response: faq.response,
        show: faq.show
    }))
}