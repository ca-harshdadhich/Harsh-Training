import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "https://mechlintech-staging.clocksession.com/api";
const BASE_URL_V2 = process.env.REACT_APP_API_URL_V2 || "https://mechlintech-staging.clocksession.com/v2/api/";

axios.defaults.headers.common["X-API-VERSION"] = process.env.CURRENT_API_VERSION || "1.3.5";

export const Axios = axios.create({
  baseURL: BASE_URL,
});

export const Axios_v2 = axios.create({
  baseURL: BASE_URL_V2,
});
