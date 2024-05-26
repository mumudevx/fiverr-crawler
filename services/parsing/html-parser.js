import cheerio from "cheerio";

const parseHtmlContent = (htmlContent, selector) => {
  const $ = cheerio.load(htmlContent);
  const result = [];

  $(selector).each((_index, element) => {
    result.push($(element).html());
  });

  console.log(result);

  return result;
};

const parseCategoryElements = (htmlContent) => {
  htmlContent = htmlContent.toString(); // htmlContent is an array of strings

  const $ = cheerio.load(htmlContent);

  const categoryElementList = [];

  $("li").each((_index, element) => {
    categoryElementList.push($(element).html());
  });

  if (categoryElementList.length === 0)
    throw new Error("No category element found");

  return categoryElementList;
};

export { parseHtmlContent, parseCategoryElements };
