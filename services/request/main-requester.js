import axios from "axios";

export const fetchHtmlContent = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching html content", error);
    return null;
  }
};

module.exports = {
  fetchHtmlContent,
};
