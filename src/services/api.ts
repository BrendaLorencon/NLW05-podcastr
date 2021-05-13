import axios from "axios";

export const api = axios.create({
  baseURL: "https://podcastr-api-ederfmatos.herokuapp.com",
});
