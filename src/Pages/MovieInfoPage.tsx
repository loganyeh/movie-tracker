import Header from "../Components/Header.js";
import Footer from "../Components/Footer.js";

// header
import MovieBanner from "../Components/MovieInfoPageComps/MovieBanner.js";
import InfoPoster from "../Components/MovieInfoPageComps/InfoPoster.js";
import MovieDescription from "../Components/MovieInfoPageComps/MovieDescription.js";
import Tabs from "../Components/MovieInfoPageComps/Tabs.js";

// body
import AllTimeStat from "../Components/MovieInfoPageComps/AllTimeStat.js";
import MovieColumnDetails from "../Components/MovieInfoPageComps/MovieColumnDetails.js";
import Tags from "../Components/MovieInfoPageComps/Tags.js";
import EditComment from "../Components/MovieInfoPageComps/EditComment.js";
import SocialMedia from "../Components/MovieInfoPageComps/SocialMedia.js";

// body - right side - info blocks
import Relations from "../Components/MovieInfoPageComps/InfoCards/Relations.js";
import Characters from "../Components/MovieInfoPageComps/InfoCards/Characters.js";
import Staff from "../Components/MovieInfoPageComps/InfoCards/Staff.js";
import Distribution from "../Components/MovieInfoPageComps/Distribution.js";
import Watch from "../Components/MovieInfoPageComps/InfoCards/Watch.js";
import TrailerFollowing from "../Components/MovieInfoPageComps/InfoCards/TrailerFollowing.js";
import Recommendations from "../Components/MovieInfoPageComps/InfoCards/Recommendations.js";
import ThreadReview from "../Components/MovieInfoPageComps/InfoCards/ThreadReview.js";

// Hooks
import { useEffect, useState } from "react";

// api calls
import { fetchMovieInfoData, fetchRelations, fetchCredits, fetchVideos } from "../API/MovieOverviewAPI.js";

import type { MovieInfoDataType, RelationsType, CreditsApiResponse, VideoType } from "../API/MovieOverviewAPI.js";

type MovieInfoPageProp = {
    movieID: number;
}

function MovieInfoPage({ movieID }: MovieInfoPageProp){
    const [movieData, setMovieData] = useState<MovieInfoDataType>();
    const [relationData, setRelationData] = useState<RelationsType[]>();
    const [creditsData, setCreditsData]= useState<CreditsApiResponse>();
    const [videoData, setVideoData] = useState<VideoType[]>([]);

    useEffect(() => {
        async function getMovieInfoData(){
            const apiMovieData: MovieInfoDataType = await fetchMovieInfoData(movieID);
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
            {movieData && 
                (<MovieBanner backdrop_path={movieData.backdrop_path} />)
            }

            <div className="flex justify-center">
                <div className="w-full max-w-[1400px] flex flex-col md:flex-row">
                    {/* 1 */}
                    {movieData &&
                        (<InfoPoster poster_path={movieData?.poster_path} />)
                    }

                    {/* 2 */}
                    <div className="md:flex md:gap-4 md:flex-col">
                        {movieData &&
                            (<MovieDescription original_title={movieData.original_title} overview={movieData.overview} production_companies={movieData.production_companies} />)
                        }
                        <Tabs />
                    </div>
                </div>
            </div>


            {/* body */}
            <div className="flex justify-center bg-gray-200">

                <div className="w-full max-w-[1400px] pb-24 p-5 flex md:flex-row gap-10 flex-col bg-gray-200">

                    {/* 1 */}
                    <div className="w-full flex gap-3.5 flex-col md:max-w-[210px]">
                        <AllTimeStat boxicon={'bx bxs-star text-yellow-300 2xl:text-xl'} ranking={"161"} text={"Highest Rated"} />
                        <AllTimeStat boxicon={'bx bxs-heart text-red-500 2xl:text-xl'} ranking={"2"} text={"Most Popular"} />

                        {movieData && 
                            (<MovieColumnDetails 
                                original_title={movieData.original_title} production_companies={movieData.production_companies} 
                                runtime={movieData.runtime} status={movieData.status} 
                                release_date={movieData.release_date} vote_average={movieData.vote_average} 
                                popularity={movieData.popularity} vote_count={movieData.vote_count} 
                                budget={movieData.budget} genres={movieData.genres}
                                spoken_languages={movieData.spoken_languages} tagline={movieData.tagline} />)
                        }

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
                        {relationData && 
                            (<Relations data={relationData}/>)
                        }
                        
                        {creditsData &&
                            (<Characters data={creditsData.cast} />)
                        }

                        {creditsData &&
                            (<Staff data={creditsData.crew} />)
                        }

                        <Distribution />

                        {videoData && 
                            (<Watch data={videoData} />)
                        }

                        {videoData && 
                            (<TrailerFollowing data={videoData} />)
                        }

                        {relationData && 
                            (<Recommendations data={relationData} />)
                        }
                    
                        <ThreadReview />

                        <div className="md:hidden">
                            <SocialMedia />
                            <Tags />
                        </div>
                    </div>

                </div>
            </div>
    
            <Footer />

        </>
    )
}

export default MovieInfoPage;