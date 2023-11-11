import axios from "axios";

const env = import.meta.env;
const token = env.VITE_REACT_APP_TOKEN;
const apiKey = env.VITE_REACT_APP_API_KEY;

export const GetMovieList = async() =>{
const movieList = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
return movieList;
}

export const GetSeacrhList = async(q) =>{
    const searchLsit = await axios(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=${apiKey}`);
    return searchLsit;
}