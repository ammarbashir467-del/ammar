import axios from "axios";

const api = axios.create ({
baseURL: "https://restcountries.com/v3.1",
});

export const countryData = () => {
 return
 api.get ("/all?fields=name,flags,capital,population,region");

};