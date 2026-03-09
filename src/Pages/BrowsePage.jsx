import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Search from "../Components/Search";
import Filter from "../Components/Filter";
import TrendingBlock from "../Components/TrendingBlock";
import TopMoviesBlock from "../Components/TopMoviesBlock";
import SearchMovieBlock from "../Components/SearchMovieBlock";

import { useEffect, useState } from "react";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";

import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming, fetchTop10Movies, fetchSearchMovie } from "../API/api";

function BrowsePage(){
    const { nowPlayingData, setNowPlayingData, popularData, setPopularData, topRatedData, setTopRatedData, upcomingData, setUpcomingData, top10MoviesData, setTop10MoviesData, searchMovieData, setSearchMovieData } = useContext(MyContext);

    const filterTitles = ["Genres", "Year", "Season", "Format", "Airing Status"];

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
            const data = await fetchSearchMovie();
            setSearchMovieData(data);
        }

        loadSearchMovie();

    }, [])

    return(
        <>
            {/*  */}
            <div className="min-h-screen w-screen bg-gray-200">

                {/* header */}
                <Header />

                {/* body */}
                <div className="h-auto w-full flex flex-col justify-start items-center">
                    {/* search and filters */}
                    <div className="h-36 w-10/12 flex justify-between">
                        {/* search */}
                        <Search />
                        {/* filter */}
                        {filterTitles.map((title, index) => {
                            return <Filter key={index} title={title} />
                        })}
                        {/* filter ICON*/}
                        <div className="h-full w-36 flex flex-col justify-center items-end">
                            <div className="h-10 w-full"></div>
                            <div className="border border-gray-200 h-10 w-10 flex justify-center items-center bg-gray-50 rounded-xl shadow-md cursor-pointer">
                                <i className='bx bx-slider text-2xl text-gray-400 hover:text-blue-400' ></i>
                            </div>
                        </div>
                    </div>

                    {/* WIP */}
                    {/* Search Menu */}
                    <SearchMovieBlock data={searchMovieData} />

                    {/* anime posters */}
                    <TrendingBlock title={"NOW PLAYING"} data={nowPlayingData} />
                    <TrendingBlock title={"POPULAR"} data={popularData} />
                    <TrendingBlock title={"TOP RATED"} data={topRatedData} />
                    <TrendingBlock title={"UPCOMING"} data={upcomingData} />

                    {/* TOP 10 TRENDING SECTION */}
                    <TopMoviesBlock data={top10MoviesData} />

                </div>

                {/* footer */}
                <Footer />

            </div>
        </>
    )
}

export default BrowsePage;