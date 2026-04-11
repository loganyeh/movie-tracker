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
            {/* header */}
            <Header />



            {/* NEW Header WIP */}
            {/* Movie Banner */}
            <div className="border">

                {/* Movie Splash Art */}
                <MovieBanner data={movieData} />

                {/* Movie Poster & Status Dropdown & Favorite Button */}
                <InfoPoster data={movieData} />
                {/* <MovieDescription data={movieData} /> */}
                <div className="p-4 text-lg text-gray-500 font-semibold">{movieData?.title || "Demon Slayer"}</div>

                <Tabs />

            </div>

            {/* body */}
            <div className="p-5 flex gap-10 flex-col bg-gray-200">

                    <MovieColumnDetails data={movieData} />
                    
                    {/* Mobile Description Block */}
                    <div className="flex gap-2.5 flex-col"> 
                        <div className="text-sm font-medium text-gray-600">Description</div>
                        <div className="md:hidden p-5 bg-white text-sm text-gray-600 font-light rounded-sm shadow">It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.
                            <br />
                            <br />Source: Crunchyroll
                        </div>
                    </div>

                    <Relations data={relationData}/>

                    <Characters data={creditsData} />

                    <Staff data={creditsData} />

                    <Distribution />

                    <Watch data={videoData} />

                    <TrailerFollowing trailerData={videoData} />

                    {/* info and stats */}
                    {/* <div className="h-auto w-full pt-4 pb-16 flex"> */}

                        {/* Column Stats/Info */}
                        <div className="h-full w-1/4 flex flex-col justify-start items-center">

                            {/* All Time Stats - highest rated & most popular */}
                            <AllTimeStat boxicon={<i className='bx bxs-star text-yellow-300 2xl:text-xl xl:text-base' ></i>} ranking={"161"} text={"Highest Rated"} />
                            <AllTimeStat boxicon={<i className='bx bxs-heart text-red-500 2xl:text-xl xl:text-base' ></i>} ranking={"2"} text={"Most Popular"} />

                            {/* Movie Column Details */}
                            {/* <MovieColumnDetails data={movieData} /> */}

                            {/* Tags */}
                            {/* <Tags /> */}

                            {/* Write/Edit Comment */}
                            {/* <EditComment /> */}

                            {/* Social Media */}
                            {/* <SocialMedia /> */}
                            
                        </div>

                        {/* right side */}
                        <div className="h-full w-3/4">

                            {/* relations */}
                            {/* <Relations data={relationData}/> */}

                            {/* characters */}
                            {/* <Characters data={creditsData} /> */}

                            {/* staff */}
                            {/* <Staff data={creditsData} /> */}

                            {/* status distibution and score distrubution */}
                            {/* <Distribution /> */}

                            {/* watch */}
                            {/* <Watch data={videoData} /> */}

                            {/* trailer */}
                            {/* <TrailerFollowing trailerData={videoData} /> */}

                            {/* recommendations */}
                            <Recommendations data={relationData} />

                            {/* threads and reviews */}
                            <ThreadReview />

                        </div>

                    {/* </div> */}

                    <Tags />

            </div>
        
            {/* footer */}
            <Footer />

        </>
    )
}

export default MovieInfoPage;