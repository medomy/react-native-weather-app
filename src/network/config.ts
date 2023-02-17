import axios from "axios";
import { ApiConfig } from "../services/ApiConfig";

export const apiInstance = axios.create({
    baseURL : ApiConfig.baseUrl,
})