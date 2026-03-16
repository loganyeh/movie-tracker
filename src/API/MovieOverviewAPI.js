

export async function fetchMovieID(){

    // from search movie to get ID
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
        }
      };
      
    const response = await fetch('https://api.themoviedb.org/3/search/movie?query=avengers&include_adult=false&language=en-US&page=1', options);
    const data = await response.json();

    const movieID = data.results.map(( data, index) => {
        return {
          key: index,
          title: data.title,
          id: data.id,
        }
    });

    // from Movie Details ----------------------------
    const options2 = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
      }
    };
    
    // CREDITS
    const response2 = await fetch(`https://api.themoviedb.org/3/movie/${movieID[0].id}`, options2);
    const data2 = await response2.json();

    const options3 = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
      }
    };
    
    const response3 = await fetch('https://api.themoviedb.org/3/movie/24428/credits', options3);
    const data3 = await response3.json();

    // console.log(data3.cast.slice(0, 6));

    return {
      data2: data2, 
      data3: data3,
    };
}

fetchMovieID();

// ------------------- BODY - RIGHT SIDE

// MOVIES - RECOMMENDATIONS
export async function fetchRelations(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
    }
  };
  
  const response = await fetch('https://api.themoviedb.org/3/movie/24428/recommendations', options);
  const data = await response.json();

  // console.log(data);
  // console.log(data.results);

  const relationsData = data.results.slice(0, 4).map((data, index) => {
    return {
      id: data.id,
      poster: data.poster_path,
    }
  })

  return relationsData;
}

// fetchRelations();



