import { useFAQs } from "../../hooks/useFAQs";
import { useState, useEffect, useContext } from "react";
import { FAQ } from "./FAQ";
import "./FAQs.css"
import React from "react";
import { FAQs as FaqsTypes } from "../../types/types";
import { langContext } from "../../context/langContext";

export function FAQs () {
    
    const lang = useContext(langContext)
    const faqsData = useFAQs()
    const [faqs, setFaqs] = useState<FaqsTypes[]>([])

    useEffect(() => {
        setFaqs(faqsData)
    }, [lang?.lang])

    const handleFAQ = (index: number): void  => {
        
        if(faqs == null) return

        setFaqs(faqs.map((faq, i) => {
            if (i === index)
                faq.show = !faq.show
            else
                faq.show = false
            return faq
        }))
    }

    const filteredFAQs = faqs.map( faq => (
        <FAQ key={faq.id} faq={faq} handleFAQ={ handleFAQ } />
    ))
    
    return (
        <section className="faqs-section">
            <h2>FAQs</h2>
            <div className="faqs-list">
                {filteredFAQs}
            </div>
        </section>
    )
}