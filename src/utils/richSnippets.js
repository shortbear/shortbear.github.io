import markdownToHtml from "./markdownToHtml";
import { roundToMinutes } from "./formatDateTime";
import { contentUrl, embedUrl } from "./youTube";

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

const createStepToSnippet = (slug) => {
  const stepToSnippet = ({name, text, image}, i) => {
    image = `https://shortbear.com/images/${image}`
    return {
      "@type": "HowToStep",
      "url": `https://shortbear.com${slug}#step${i}`,
      name,
      text,
      image,
      video: {
        "@id": `step${i}`
      }
    }
  }
  return stepToSnippet
}

const formatDuration = (duration) => `PT${roundToMinutes(duration)}M`

const createStepToClip = (url) => {
  const stepToClip = ({clip, name}, i) => {
    const { endOffset, startOffset } = clip;
    return {
      "@type": "Clip",
      "@id": `step${i}`,
      name,
      startOffset,
      endOffset,
      url: `${url}&t=${startOffset}`
    }
  }
  return stepToClip
}

export const howToToSnippet = (howTo) => {
  const {date, excerpt, image, steps, title, video} = howTo.frontmatter;
  const {slug} = howTo.fields;
  const stepToClip = createStepToClip(contentUrl(video.url))
  const stepToSnippet = createStepToSnippet(slug)
  const obj = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "totalTime": formatDuration(video.duration),
    "image": {
      "@type": "ImageObject",
      "url": `https://shortbear.com/images/${image}`,
    },
    "video": {
      "@type": "VideoObject",
      "name": title,
      "description": excerpt,
      "thumbnailUrl": `https://shortbear.com/images/${video.thumbnailUrl}`,
      "contentUrl": contentUrl(video.url),
      "embedUrl": embedUrl(video.url),
      "uploadDate": date,
      "duration": formatDuration(video.duration),
      "hasPart": steps.map(stepToClip)
    },
    "step": steps.map(s => stepToSnippet(s, slug))
  }
  console.log({obj});
  return obj;
}

