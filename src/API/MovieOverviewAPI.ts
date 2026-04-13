import Relations from "../Components/MovieInfoPageComps/InfoCards/Relations.js";

export async function fetchMovieID(query : number){
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

export type MovieInfoDataType = {
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  overview: string;
  production_companies: {
    name: string;
  }[];
  runtime: number;
  status: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  vote_count: number;
  budget: number;
  genres: {
    name: string;
  }[];
  spoken_languages: {
    english_name: string;
  }[];
  tagline: string;
}

export async function fetchMovieInfoData(query : number){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
        }
      };
      
      const response = await fetch(`https://api.themoviedb.org/3/movie/${query || 24428}?language=en-US`, options);
      const data: MovieInfoDataType = await response.json();

    //   console.log(data);

      return data;
}

// --------------------
export type RelationsType = {
    poster_path: string;
}

type RelationsApiResponse = {
    results: RelationsType[];
}

export async function fetchRelations(query : number){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
        }
      };
      
      const response = await fetch(`https://api.themoviedb.org/3/movie/${query}/recommendations`, options);
      const data: RelationsApiReponse = await response.json();

    //   console.log(data);

      return data.results;
};

// FETCH CREDITS



export async function fetchCredits(query : number){
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
        }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/movie/${query}/credits`, options);
    const data = await response.json();

    console.log(data);

    return data;
};

//  FETCH REVIEWS
export async function fetchReviews(){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
        }
    };

    const response = await fetch('https://api.themoviedb.org/3/movie/569094/reviews?language=en-US&page=1', options);
    const data = await response.json();

    return data;
}

// FETCH VIDEOS
export async function fetchVideos(query : number){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzgwZGEzMDAwZmI3MDQ3NDM1ZjU4OWM5NjdjMjlkNiIsIm5iZiI6MTc3MjQ3NDQyMS42OTgsInN1YiI6IjY5YTVkMDM1OGU4MDM3YTE1YmMxN2ZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4q8zWeqQYVZD3WKTVOFnp6bYNCXoyXGg77fMU4Lf_5c'
        }
      };

      const response = await fetch(`https://api.themoviedb.org/3/movie/${query}/videos?language=en-US`, options);
      const data = await response.json();

      return data;
}





