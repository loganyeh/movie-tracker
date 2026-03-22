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
import { fetchMovieID, fetchMovieInfoData } from "../API/MovieOverviewAPI";


function MovieInfoPage(){
    const { idFromPoster, setIDFromPoster, movieData, setMovieData } = useContext(MyContext);
    // const [movieID, setMovieID] = useState(24428);
    const [movieID, setMovieID] = useState(687163);

    useEffect(() => {
        async function getMovieInfoData(){
            // Avengers
            const data = await fetchMovieInfoData(movieID);
            // Project Hail Mary
            // const data = await fetchMovieInfoData(687163);
            // Zootopia
            // const data = await fetchMovieInfoData(1084242);
            setMovieData(data);
        }
        
        getMovieInfoData();
    }, []);

    return(
        <>
            <div className="min-h-screen w-screen bg-gray-200">
                {/* header */}
                <Header />

                {/* body */}
                <div className="min-h-200 w-full">
                    {/* Movie Banner */}
                    <div className="border-2 border-red-600 h-80 w-full flex justify-center items-center"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData?.backdrop_path})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            // filter: "blur(8px)", // blur the backdrop
                        }}>
                        <img className="h-full" src={`https://image.tmdb.org/t/p/original${movieData?.backdrop_path}`} alt="" />
                    </div>

                    {/* Movie Info Description */}
                    <div className="h-72 w-full flex bg-white shadow-md">

                        {/* Poster and Toggle */}
                        <div className="h-full w-1/4 flex flex-col justify-around items-center">
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
                            <AllTimeStat boxicon={<i className='bx bxs-star text-yellow-300 text-xl' ></i>} ranking={"161"} text={"Highest Rated"} />
                            <AllTimeStat boxicon={<i className='bx bxs-heart text-red-500 text-xl' ></i>} ranking={"2"} text={"Most Popular"} />

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
                            <Relations />

                            {/* characters */}
                            <Characters />

                            {/* staff */}
                            <Staff />

                            {/* status distibution and score distrubution */}
                            <Distribution />

                            {/* watch */}
                            <Watch />

                            {/* trailer */}
                            <TrailerFollowing />

                            {/* recommendations */}
                            <Recommendations />

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