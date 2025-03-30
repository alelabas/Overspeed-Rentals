
export function FAQ ({faq, index, handleFAQ}) {
    return (
        <div 
            className={'faq' + (faq.show ? ' open' : '')} 
            key={index}
            onClick={() => handleFAQ(index)}
        >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-response">
                {faq.response}
            </div>
        </div>
    )
}