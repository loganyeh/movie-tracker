const movieQuery = null;

export async function fetchMovieID(query){
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
        }
    };

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
    const data = await response.json();

    // data?.results[0].id;

    return data?.results[0].id || null;
};

// const searchMovie = await fetchMovieID("Avengers");

export async function fetchMovieInfoData(query){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
        }
      };
      
      const response = await fetch(`https://api.themoviedb.org/3/movie/${query || 24428}?language=en-US`, options);
      const data = await response.json();

      console.log(data);

      return data;
}

fetchMovieInfoData();
// fetchMovieInfoData(1159559);