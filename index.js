import { fetchResponseFromUrl } from "./services/request/zenrows-requester.js";
import { parseHtmlContent } from "./services/parsing/html-parser.js";
import { crawlCategories } from "./services/crawler/category-crawler.js";

const runApp = async () => {
  /*const categoryUrl = "https://fiverr.com/categories";

  const htmlContent = await fetchResponseFromUrl(categoryUrl);
  console.log(htmlContent);

  const selector = "section.sitemap-box ul";

  const result = parseHtmlContent(htmlContent, selector);

  result.forEach((element, index) => {
    console.log(`${index + 1}: ${element}`);
  });*/

  const x = await crawlCategories();
  console.log(x);
};

runApp();
