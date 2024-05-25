import cheerio from "cheerio";

const parseHtmlContent = (htmlContent, selector) =>
  cheerio.load(htmlContent)(selector).html();

export { parseHtmlContent };
