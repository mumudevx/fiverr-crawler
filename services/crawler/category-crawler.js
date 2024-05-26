import { fetchResponseFromUrl } from "../request/zenrows-requester.js";
import {
  parseHtmlContent,
  parseCategoryElements,
} from "../parsing/html-parser.js";

const categoryUrl = "https://fiverr.com/categories";

const crawlCategories = async () => {
  const htmlContent = await fetchResponseFromUrl(categoryUrl);

  const selector = "section.sitemap-box ul";
  const categoryListElements = parseHtmlContent(htmlContent, selector);

  const categoryElements = parseCategoryElements(categoryListElements);

  console.log(categoryElements);
};

export { crawlCategories };
