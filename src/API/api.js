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
    const data = await response.json();

    const nowPlayingData = data.results.slice(0, 6).map((movie, index) => {
      return {
        key: index,
        id: movie.id,
        title: movie.original_title,
        poster: movie.poster_path,
      };
    });

    return nowPlayingData;
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
  const data = await response.json();

  const popularData = data.results.slice(6, 12).map((data, index) => {
    return {
      key: index, 
      id: data.id,
      title: data.original_title,
      poster: data.poster_path,
    }
  });

  return popularData;
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
  const data = await response.json();

  const topRatedData = data.results.slice(0, 6).map((data, index) => {
    return {
      key: index,
      id: data.id, 
      title: data.original_title,
      poster: data.poster_path,
    }
  });

  return topRatedData;
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
  const data = await response.json();

  const upcomingData = data.results.slice(0, 6).map((data, index) => {
    return {
      key: index, 
      id: data.id,
      title: data.original_title,
      poster: data.poster_path,
    }
  })

  return upcomingData;
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
  const data = await response.json();

  // console.log(data.results[0].release_date)

  const top10MoviesData = data.results.slice(0, 10).map((data, index) => {
    function monthDateYearConvert(date){
      const parts = date.split("-");
      return `${parts[1]}-${parts[2]}-${parts[0]}`;
    }

    return {
      key: index, 
      id: data.id,
      title: data.original_title,
      poster: data.poster_path,
      // vote_average: Math.round(data.vote_average * 2) / 2,
      vote_average: data.vote_average.toString().replace(".", "").slice(0, 2),
      vote_count: data.vote_count.toLocaleString(),
      popularity: (data.popularity * 10000).toLocaleString(),
      release_date: monthDateYearConvert(data.release_date),
      genre_ids: data.genre_ids,
    }
  });

  return top10MoviesData;
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



