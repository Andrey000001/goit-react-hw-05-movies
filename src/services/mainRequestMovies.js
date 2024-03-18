const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzFjMjFjYjNkZTBmMzFmY2NlMmNjZTA0OWUyYzcwYyIsInN1YiI6IjY1NzQ5MGJjYmJlMWRkMDBjNDBjMDZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rk4ZGNCrWJDYlG9ojpZ-K-JQ1AKu7JU3Ol7o96eB5z8';
const BASE_URL = 'https://api.themoviedb.org/3/';

const mainRequestMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}trending/movie/day?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default mainRequestMovies;