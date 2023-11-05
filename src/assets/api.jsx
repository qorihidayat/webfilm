import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzFhN2RhODliNjczMGZmZDA2ZGU1ODM1MzZkNmExZCIsInN1YiI6IjY1NDEyZTNlNTc1MzBlMDEyY2Y0ZDYxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z2NGgGAZu-oMZQwnHezVTYtQVmGDME8GHR1H8OnUd3I";
const apiKey = "ec1a7da89b6730ffd06de583536d6a1d";

export const GetMovieList = async() =>{
const movieList = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
return movieList;
}

export const GetSeacrhList = async(q) =>{
    const searchLsit = await axios(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=${apiKey}`);
    return searchLsit;
}