import Header from "../Components/Header";
import Footer from "../Components/Footer";

// header
import MovieBanner from "../Components/MovieInfoPageComps/MovieBanner";
import InfoPoster from "../Components/MovieInfoPageComps/InfoPoster";
import MovieDescription from "../Components/MovieInfoPageComps/MovieDescription";
import Tabs from "../Components/MovieInfoPageComps/Tabs";

// body
import AllTimeStat from "../Components/MovieInfoPageComps/AllTimeStat";
import MovieColumnDetails from "../Components/MovieInfoPageComps/MovieColumnDetails";
import Tags from "../Components/MovieInfoPageComps/Tags";
import EditComment from "../Components/MovieInfoPageComps/EditComment";
import SocialMedia from "../Components/MovieInfoPageComps/SocialMedia";

// body - right side - info blocks
import Relations from "../Components/MovieInfoPageComps/InfoCards/Relations";
import Characters from "../Components/MovieInfoPageComps/InfoCards/Characters";
import Staff from "../Components/MovieInfoPageComps/InfoCards/Staff";
import Distribution from "../Components/MovieInfoPageComps/Distribution";
import Watch from "../Components/MovieInfoPageComps/InfoCards/Watch";
import TrailerFollowing from "../Components/MovieInfoPageComps/InfoCards/TrailerFollowing";
import Recommendations from "../Components/MovieInfoPageComps/InfoCards/Recommendations";
import ThreadReview from "../Components/MovieInfoPageComps/InfoCards/ThreadReview";

// Hooks
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context/MyContext";

// api calls
import { fetchMovieInfoData, fetchRelations, fetchCredits, fetchVideos } from "../API/MovieOverviewAPI";

function MovieInfoPage(){
    const { movieID, setMovieID, movieData, setMovieData, 
        relationData, setRelationData, creditsData, setCreditsData, videoData, setVideoData
    } = useContext(MyContext);

    useEffect(() => {
        async function getMovieInfoData(){
            const apiMovieData = await fetchMovieInfoData(movieID);
            const apiRelationData = await fetchRelations(movieID);
            const creditsData = await fetchCredits(movieID);
            const videoData = await fetchVideos(movieID);
            setMovieData(apiMovieData);
            setRelationData(apiRelationData);
            setCreditsData(creditsData);
            setVideoData(videoData);
        }
        
        getMovieInfoData();
    }, []);

    return(
        <>
            <div className="min-h-screen w-screen bg-gray-200">
                {/* header */}
                <Header />

                {/* body */}
                <div className="border min-h-200 w-full">

                    {/* Movie Banner */}
                    <div className="border relative 2xl:h-80 xl:h-64 w-full flex justify-center items-center">
                        <MovieBanner data={movieData} />
                    </div>

                    {/* Movie Info Description */}
                    <div className="2xl:h-72 xl:h-64 w-full flex bg-white shadow-md">

                        {/* Poster and Toggle */}
                        <div className="relative h-full w-1/4 flex flex-col justify-around items-center">
                            <InfoPoster data={movieData} />
                        </div>

                        {/* Movie Summary */}
                        <div className="h-full w-3/4 flex flex-col justify-center items-center">
                            {/* Movie Description */}
                            <MovieDescription data={movieData} />

                            {/* Tabs */}
                            <Tabs />
                        </div>

                    </div>

                    {/* ------------------------------- */}

                    {/* info and stats */}
                    <div className="h-auto w-full pt-4 pb-16 flex">

                        {/* Column Stats/Info */}
                        <div className="h-full w-1/4 flex flex-col justify-start items-center">

                            {/* All Time Stats - highest rated & most popular */}
                            <AllTimeStat boxicon={<i className='bx bxs-star text-yellow-300 2xl:text-xl xl:text-base' ></i>} ranking={"161"} text={"Highest Rated"} />
                            <AllTimeStat boxicon={<i className='bx bxs-heart text-red-500 2xl:text-xl xl:text-base' ></i>} ranking={"2"} text={"Most Popular"} />

                            {/* Movie Column Details */}
                            <MovieColumnDetails data={movieData} />

                            {/* Tags */}
                            <Tags />

                            {/* Write/Edit Comment */}
                            <EditComment />

                            {/* Social Media */}
                            <SocialMedia />
                            
                        </div>

                        {/* right side */}
                        <div className="h-full w-3/4">

                            {/* relations */}
                            <Relations data={relationData}/>

                            {/* characters */}
                            <Characters data={creditsData} />

                            {/* staff */}
                            <Staff data={creditsData} />

                            {/* status distibution and score distrubution */}
                            <Distribution />

                            {/* watch */}
                            <Watch data={videoData} />

                            {/* trailer */}
                            <TrailerFollowing trailerData={videoData} />

                            {/* recommendations */}
                            <Recommendations data={relationData} />

                            {/* threads and reviews */}
                            <ThreadReview />

                        </div>

                    </div>

                </div>

                {/* footer */}
                <Footer />

            </div>
        
        </>
    )
}

export default MovieInfoPage;