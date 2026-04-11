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

            {/* Movie Banner */}
            <MovieBanner data={movieData} />


            <div className="flex flex-col md:flex-row">
                {/* 1 */}
                <InfoPoster data={movieData} />

                {/* 2 */}
                <div className="md:flex md:gap-4 md:flex-col">
                    <MovieDescription data={movieData} />
                    <Tabs />
                </div>
            </div>


            {/* body */}
            <div className="pb-24 p-5 flex md:flex-row gap-10 flex-col bg-gray-200">

                {/* 1 */}
                <div className="w-full flex gap-3.5 flex-col md:max-w-[210px]">
                    <AllTimeStat boxicon={<i className='bx bxs-star text-yellow-300 2xl:text-xl' ></i>} ranking={"161"} text={"Highest Rated"} />
                    <AllTimeStat boxicon={<i className='bx bxs-heart text-red-500 2xl:text-xl' ></i>} ranking={"2"} text={"Most Popular"} />

                    <MovieColumnDetails data={movieData} />

                    <div className="hidden md:flex gap-3.5 flex-col">
                        <Tags />
                        <EditComment />
                        <SocialMedia />
                    </div>
                </div>
                
                {/* Mobile Description Block */}    
                <div className="md:hidden flex gap-2.5 flex-col"> 
                    <div className="text-sm font-medium text-gray-600">Description</div>
                    <div className="p-5 bg-white text-sm text-gray-600 font-light rounded-sm shadow">It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.
                        <br />
                        <br />Source: Crunchyroll
                    </div>
                </div>

                {/* 2 */}
                {/* <div className="border flex gap-10 flex-col flex-1"> */}
                <div className="flex gap-10 flex-col flex-1 min-w-0">
                    <Relations data={relationData}/>

                    <Characters data={creditsData} />

                    <Staff data={creditsData} />

                    <Distribution />

                    <Watch data={videoData} />

                    <TrailerFollowing trailerData={videoData} />

                    <Recommendations data={relationData} />

                    <ThreadReview />

                    <div className="md:hidden">
                        <SocialMedia />
                        <Tags />
                    </div>
                </div>

            </div>
        
            <Footer />

        </>
    )
}

export default MovieInfoPage;