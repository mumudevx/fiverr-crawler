import { parseHtmlContent } from "./services/parsing/html-parser.js";

const htmlContent = "<div class='example'>Hello, world!</div>";
const selector = ".example";

const result = parseHtmlContent(htmlContent, selector);
console.log(result);
