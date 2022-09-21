export const extractIdFromUrl = (url) => url.match(/^https:\/\/youtu.be\/(.+)$/)[1]

export const contentUrl = (url) => `https://www.youtube.com/watch?v=${extractIdFromUrl(url)}`

export const embedUrl = (url) => `https://www.youtube.com/embed/${extractIdFromUrl(url)}`