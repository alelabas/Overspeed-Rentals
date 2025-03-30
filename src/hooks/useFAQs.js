import dataList from "../data/data.json"

export function useFAQs () {

    const faqs = dataList.FAQs

    return faqs.map((faq, index) => ({
        id: index,
        question: faq.question,
        response: faq.response,
        show: faq.show
    }))
}