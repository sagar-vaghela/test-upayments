import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});
const axiosInstance = axios.create({
  baseURL: "https://62286b649fd6174ca82321f1.mockapi.io/case-study/",
  cache,
});

export default axiosInstance;