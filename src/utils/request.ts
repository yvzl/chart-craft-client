import axios from "axios";

export const request = axios.create({
    baseURL: "http://localhost:8080",
})

request.interceptors.request.use(config => config, error => {
    console.log(error)
});

request.interceptors.response.use(res => res, error => {
    console.log(error)
});