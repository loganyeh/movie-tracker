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

// --- FETCH SEARCH MOVIES ---
export async function fetchSearchMovies(query){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
    }
  };
  
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${"Avengers"}&include_adult=false&language=en-US&page=1`, options);
  const data = await response.json();

  // console.log(data);
  console.log(data.results);
  // console.log(Array.isArray(data.results)); TRUE

  return data.results;
}

fetchSearchMovies("avengers");

// TODO: get the trending movies or top movie stuff 
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

  // fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  //   .catch(err => console.error(err));

    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const data = await response.json();

    console.log(data.results);

}

fetchNowPlaying();

console.log('test');



