import { useFAQs } from "../../hooks/useFAQs";
import { useState } from "react";
import { FAQ } from "./FAQ";
import "./FAQs.css"

export function FAQs () {
    
    const [faqs, setFaqs] = useState(useFAQs())

    const handleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index)
                faq.show = !faq.show
            else
                faq.show = false
            return faq
        }))
    }

    const filteredFAQs = faqs.map((faq, index) => (
        <FAQ key={index} faq={faq} index={index} handleFAQ={handleFAQ} />
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