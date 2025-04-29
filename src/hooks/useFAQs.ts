import dataList from "../data/data.json"
import { FAQs } from "../types/types"

export function useFAQs () {

    const faqs: FAQs[] = dataList.FAQs.eng

    return faqs.map( faq => ({
        id: faq.id,
        question: faq.question,
        response: faq.response,
        show: faq.show
    }))
}