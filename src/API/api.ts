// --- FETCH GENRES --- 
export async function fetchGenres(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
    }
  };

  const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
  const data = await response.json();
  // console.log(data.genres);
  return data.genres;

}

// --- from API ≈ MOVIE LISTS ---

export type TrendingMoviesType = {
  id: number;
  original_title: string;
  poster_path: string;
}

type MoviesApiResponse = {
  results: TrendingMoviesType[];
}


// Now Playing ...
export async function fetchNowPlaying(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
    }
  };

    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const data: MoviesApiResponse = await response.json();

    return data.results;
}

// Popular ...
export async function fetchPopular(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
    }
  };

  const response = await fetch('https://api.themoviedb.org/3/movie/popular', options);
  const data: MoviesApiResponse = await response.json();

  return data.results;
}

// Top Rated...
export async function fetchTopRated(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
    }
  };

  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', options);
  const data: MoviesApiResponse = await response.json();

  return data.results;
}

// Upcoming...
export async function fetchUpcoming(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
    }
  };
  
  const response = await fetch('https://api.themoviedb.org/3/movie/upcoming', options);
  const data: MoviesApiResponse = await response.json();

  return data.results;
}

type Top10MoviesType = {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  release_date: string;
  genre_ids: number[];
}

type Top10ApiResponse = {
  results: Top10MoviesType[];
}

// Top 10 Movies
export async function fetchTop10Movies(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
    }
  };

  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', options);
  const data: Top10ApiResponse = await response.json();

  // console.log(data.results);

  // const top10MoviesData = data.results.slice(0, 10).map((data, index) => {
  //   function monthDateYearConvert(date){
  //     const parts = date.split("-");
  //     return `${parts[1]}-${parts[2]}-${parts[0]}`;
  //   }

  //   return {
  //     key: index, 
  //     id: data.id,
  //     title: data.original_title,
  //     poster: data.poster_path,
  //     vote_average: data.vote_average.toString().replace(".", "").slice(0, 2),
  //     vote_count: data.vote_count.toLocaleString(),
  //     popularity: (data.popularity * 10000).toLocaleString(),
  //     release_date: monthDateYearConvert(data.release_date),
  //     genre_ids: data.genre_ids,
  //   }
    
  // });
  // vote_average: Math.round(data.vote_average * 2) / 2,

  return data.results;
}

// ----------------------------------------
// Search - Movie
export async function fetchSearchMovie(query){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
    }
  };
  
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
  const data = await response.json();

  const searchMovieData = data.results.map((data, index) => {
    return {
      key: index, 
      id: data.id,
      title: data.original_title, 
      poster: data.poster_path,
    }
  })

  return searchMovieData;

}



