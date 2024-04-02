import axios from "axios";

const token = localStorage.getItem("token");

export const API_BASE_URL = "http://localhost:8080";

export const api = axios.create({
    baseURL : API_BASE_URL,
    headers : {
        "Authorization" : `Bearer ${token}`,
        "Content-Type" : "application/json"
    }
})