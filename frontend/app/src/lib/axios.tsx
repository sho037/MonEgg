import axios from "axios";

const headers = {
    "Content-type": "Application/json",
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest"
};

export const Axios = axios.create({
    baseURL: "http://localhost:8000/",
    withCredentials: true,
    headers: headers,
});

export const api = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
    headers: headers,
});
