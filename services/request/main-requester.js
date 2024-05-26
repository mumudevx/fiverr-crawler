// TODO: This requester need puppeteer-extra-plugin-stealth and ghost-cursor
// to bypass the bot detection of some websites
// Also need a way to bypass the Cloudflare protection

import axios from "axios";

const fetchResponseFromUrl = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching html content", error);
    return null;
  }
};

export { fetchResponseFromUrl };
