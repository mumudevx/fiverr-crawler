import { ZenRows } from "zenrows";
import dotenv from "dotenv";

dotenv.config();

const zenRowsApiKey = process.env.ZENROWS_API_KEY;

const fetchResponseFromUrl = async (url) => {
  try {
    const zenRows = new ZenRows(zenRowsApiKey);
    const { data } = await zenRows.get(url, {});
    return data;
  } catch (error) {
    console.error(error.message);
    if (error.response) console.error(error.response.data);
  }
};

export { fetchResponseFromUrl };
