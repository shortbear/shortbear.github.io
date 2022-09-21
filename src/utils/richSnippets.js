import markdownToHtml from "./markdownToHtml";

const faqToSnippet = (faq) => (
  {
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": markdownToHtml(faq.seo_answer)
    }
  }
)

export const faqsToSnippet = (faqs) => {
  const obj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faqToSnippet)
  }
  return JSON.stringify(obj);
}

const stepToSnippet = (step, slug) => {
  return {
    "@type": "HowToStep",
    "url": "https://shortbear.com"
  }
}

export const howToToSnippet = ({title, image, steps, slug}) => {
  const obj = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "image": {
      "@type": "ImageObject",
      "url": `https://shortbear.com/static/images/${image}`,
    },
    "step": steps.map(s => stepToSnippet(s, slug))
  }
  return JSON.stringify(obj);
}

