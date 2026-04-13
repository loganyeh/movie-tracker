import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";
import Search from "../Components/Search.js";
import Filter from "../Components/Filter.js";
import TrendingBlock from "../Components/TrendingBlock.js";
import TopMoviesBlock from "../Components/TopMoviesBlock.js";
import SearchMovieBlock from "../Components/SearchMovieBlock.jsx";

import { useEffect, useState } from "react";

import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming, fetchTop10Movies, fetchSearchMovie } from "../API/api.ts";

import type { Top10MoviesType, TrendingMoviesType } from "../API/api.ts";

function BrowsePage({ setMovieID }: any){
    const [nowPlayingData, setNowPlayingData] = useState<TrendingMoviesType[]>([]);
    const [popularData, setPopularData] = useState<TrendingMoviesType[]>([]);
    const [topRatedData, setTopRatedData] = useState<TrendingMoviesType[]>([]);
    const [upcomingData, setUpcomingData] = useState<TrendingMoviesType[]>([]);
    const [top10MoviesData, setTop10MoviesData] = useState<Top10MoviesType[]>([]);
    const [searchMovieData, setSearchMovieData] = useState([]);

    const [query, setQuery] = useState("");

    useEffect(() => {

        async function loadNowPlaying(){
            const data = await fetchNowPlaying();
            setNowPlayingData(data);
        }
        
        async function loadPopular(){
            const data = await fetchPopular();
            setPopularData(data);
        }

        async function loadTopRatedData(){
            const data = await fetchTopRated();
            setTopRatedData(data);
        }

        async function loadUpcoming(){
            const data = await fetchUpcoming();
            setUpcomingData(data);
        }

        async function loadTop10Movies(){
            const data = await fetchTop10Movies();
            setTop10MoviesData(data);
        }
        
        loadNowPlaying();
        loadPopular();
        loadTopRatedData();
        loadUpcoming();
        loadTop10Movies();

    }, []);

    // search movie useEffect
    useEffect(() => {
        
        async function loadSearchMovie(){
            const data = await fetchSearchMovie(query);
            setSearchMovieData(data);
        }

        loadSearchMovie();

    }, [query]);

    return(
        <>
            {/*  */}
            <div className="bg-gray-200">

                {/* header */}
                <Header />

                {/* body */}
                <div className="w-full px-5 pt-6 xl:pt-10 flex gap-8 flex-col items-center">
                    
                    {/* Browse & Anime Popup above Search Bar @ Mobile */}
                    <div className="w-full xl:hidden flex text-3xl text-gray-500 font-semibold">
                        <div className="px-3 py-1.5 bg-gray-200 rounded-md">Browse</div>
                        <div className="px-3 py-1.5 bg-gray-50 rounded-md">Anime</div>
                    </div>

                    {/* Search & Filters & Icon */}
                    <div className="w-full max-w-7xl flex gap-4 xl:grid xl:gap-5 xl:grid-cols-7">
                        {/* search */}
                        <Search query={query} setQuery={setQuery} />

                        {/* filter */}
                        <Filter />
                        
                        {/* filter ICON*/}
                        <div className="flex justify-end items-end">
                            <i className='bx bx-slider p-2 xl:p-1.5 text-2xl text-gray-400 bg-gray-50 rounded-lg shadow-md' ></i>
                        </div>

                    </div>

                    {/* Search Menu */}
                    <SearchMovieBlock data={searchMovieData} query={query} setQuery={setQuery} setMovieID={setMovieID} />

                    {/* Trending/Most Popular Posters Ratings Stuff */}
                    <TrendingBlock title={"NOW PLAYING"} data={nowPlayingData} query={query} setMovieID={setMovieID} />
                    <TrendingBlock title={"POPULAR"} data={popularData} query={query} setMovieID={setMovieID} />
                    <TrendingBlock title={"TOP RATED"} data={topRatedData} query={query} setMovieID={setMovieID} />
                    <TrendingBlock title={"UPCOMING"} data={upcomingData} query={query} setMovieID={setMovieID} />

                    {/* TOP 10 TRENDING SECTION */}
                    <TopMoviesBlock data={top10MoviesData} query={query} />

                </div>

                {/* footer */}
                <Footer />

            </div>
        </>
    )
}

export default BrowsePage;