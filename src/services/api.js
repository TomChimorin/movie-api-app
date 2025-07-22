const API_KEY = "fbc66e28ac569fa56a28907d40b212cf"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        console.log("TMDB response (popular):", data);

        if (!Array.isArray(data.results)) {
            throw new Error("Expected 'results' to be an array");
        }

        return data.results;
    } catch (err) {
        console.error("API error in getPopularMovies:", err);
        return [];
    }
};


export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        console.log("TMDB response (search):", data);

        if (!Array.isArray(data.results)) {
            throw new Error("Expected 'results' to be an array");
        }

        return data.results;
    } catch (err) {
        console.error("API error in searchMovies:", err);
        return [];
    }
};
