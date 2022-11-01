import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";

export const fetchFromAPI = async (url) => {

    const {data} = await axios.get(`${BASE_URL}?key=${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&${url}`);

    return data;
}