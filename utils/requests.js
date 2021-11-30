import { getFontDefinitionFromManifest } from "next/dist/server/font-utils";

const API_KEY = process.env.API_KEY;

// difrent endpoints, accessing tmdb API and geting the corresponding genres/available movies in store
export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    },

    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    },

    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },

    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },

    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },

    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },

    fetchMystry: {
        title: 'Mystry',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },

    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },

    fetchWestern: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },

    fetchAnimation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },

    fetchTV: {
        title: 'TV Movie',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
};