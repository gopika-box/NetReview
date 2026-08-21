import { API_KEY } from "./constants/constants";

export const popular_movies = '/movie/popular?api_key=5c8c6ebac638ff8787b87035e897884b&language=en-US&page=1';
export const trending_movies = '/trending/all/week?api_key=5c8c6ebac638ff8787b87035e897884b&language=en-US';
export const action_movies = '/discover/movie?api_key=5c8c6ebac638ff8787b87035e897884b&with_genres=28';
export const comedy_movies = '/discover/movie?api_key=5c8c6ebac638ff8787b87035e897884b&with_genres=35';
export const horror_movies = '/discover/movie?api_key=5c8c6ebac638ff8787b87035e897884b&with_genres=27';
export const romance_movies = '/discover/movie?api_key=5c8c6ebac638ff8787b87035e897884b&with_genres=10749';
export const documentaries_movies = '/discover/movie?api_key=5c8c6ebac638ff8787b87035e897884b&with_genres=99';
