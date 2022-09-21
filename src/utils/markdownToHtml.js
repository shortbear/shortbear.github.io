import showdown from "showdown";

const markdownToHtml = (markdown) => {
  const converter = new showdown.Converter()
  return converter.makeHtml(markdown);
}

export default markdownToHtml;