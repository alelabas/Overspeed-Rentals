import React from "react"
import { FAQs } from "../../types/types"

interface FAQProps {
    faq: FAQs
    handleFAQ: (index: number) => void
}

export const FAQ: React.FC<FAQProps> = ({faq, handleFAQ}) => {
    return (
        <div 
            className={'faq' + (faq.show ? ' open' : '')} 
            key={faq.id}
            onClick={() => handleFAQ(faq.id)}
        >
            <div className="faq-question">
                <h3>{faq.question}</h3>
            </div>
            <div className="faq-response">
                {faq.response}
            </div>
        </div>
    )
}