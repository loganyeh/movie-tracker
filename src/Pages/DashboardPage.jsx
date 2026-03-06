import { useState, useEffect } from "react";
import { fetchGenres, fetchSearchMovies } from "../API/api";

function DashboardPage(){
    const [genreData, setGenreData] = useState([]);
    
    const genreSection = [
        {title: "Trending", icon: <i className='bx bxs-hot' ></i>},
        {title: "Action", icon: <i className='bx bx-run' ></i>},
        {title: "Romance", icon: <i className='bx bxs-heart' ></i>},
        {title: "Animation", icon: <i className='bx bxs-dog' ></i>},
        {title: "Horror", icon: <i className='bx bx-moon' ></i>},
        {title: "Special", icon: <i className='bx bx-star' ></i>},
        {title: "Drakor", icon: <i className='bx bx-moon' ></i>},
        {title: "Drakor", icon: <i className='bx bx-moon' ></i>},
        {title: "Drakor", icon: <i className='bx bx-moon' ></i>},
        {title: "Drakor", icon: <i className='bx bx-moon' ></i>},
    ]

    useEffect(() => {
        async function loadFetchGenres(){
            const data = await fetchGenres();
            setGenreData(data);
        }
        loadFetchGenres();

    }, []);

    return(
        <>
            <div className="h-screen w-screen p-4">

                <div className="border-2 border-blue-600 h-1/2 w-full">

                    {/* header */}
                    <div className="h-2/12 w-full border-2 border-red-600 flex justify-between items-center">
                        {/* logo */}
                        <div className="border border-black h-full w-1/4 flex justify-start items-center text-3xl">Flix.id</div>
                        {/* nav bar */}
                        <div className="border border-black h-12 w-100 flex justify-around items-center rounded-3xl">
                            <div>Movie</div>
                            <div>Series</div>
                            <div>Originals</div>
                            <div className='flex justify-center items-center cursor-pointer'><i className='bx bx-search-alt-2' ></i></div>
                        </div>
                        {/* profile and settings */}
                        <div className="h-full w-1/4 border-2 border-blue-600 flex justify-end">
                            <div className='border-2 border-red-600 h-full w-2/3 flex justify-around items-center'>
                                {/* settings */}
                                <div className="border border-black h-14 w-14 mr-1 flex justify-center items-center rounded-full"><i className='bx bx-bell' ></i></div>
                                {/* profile */}
                                <div className="border border-black h-14 w-14 mr-1 flex justify-center items-center rounded-full"><i className='bx bx-child'></i></div>
                                {/* name/status and dropdown */}
                                <div className="border border-black h-14 w-32 mr-1 flex">
                                    <div className='border-2 border-red-600 h-full w-2/3'>
                                        <div className='border border-black h-1/2 w-full font-light'>Sarah J</div>
                                        <div className='border border-black h-1/2 w-full font-light'>Premium</div>
                                    </div>
                                    <div className='border-2 border-red-600 h-full w-1/3 flex justify-center items-center'>
                                    <i className='bx bx-chevron-down' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* main title movie cards */}
                    <div className="h-8/12 w-full border-2 border-red-600 flex justify-between items-center">
                        <div className="border border-black h-full w-5/12 mr-4 rounded-3xl"></div>
                        <div className="border border-black h-full w-7/12 rounded-3xl"></div>
                    </div>

                    {/* genres tabs */}
                    <div className="h-2/12 w-full border border-red-600 flex justify-between items-center overflow-x-auto touch-pan-left">

                        <div className="border border-black h-full w-1/8 mr-2 flex justify-center items-center rounded-3xl shrink-0">
                            <div className='border border-red-600 flex'>
                                <div className='border border-black h-8 w-8 flex justify-center items-center text-xl'>O</div>
                                <div className='border border-black flex justify-center items-center font-medium'>Action</div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* --------------------------------------------------------------------- */}
                {/* trending movies */}
                <div className="border-2 border-blue-600 h-1/2 w-full" >
                    {/* header */}
                    <div className="border-2 border-red-600 h-2/12 w-full flex">
                        <div className="h-full w-1/2 flex justify-start items-center text-4xl">Trending in Animation</div>
                        <div className="h-full w-1/2 flex justify-end items-center">
                            <div className="border border-black h-11 w-40 rounded-3xl">

                            </div>
                        </div>
                    </div>

                    {/* movie posters */}
                    <div className="border-2 border-red-600 h-10/12 w-full flex justify-between">
                        {/* movie 1 */}
                        <div className="border-2 border-black h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="border border-black h-2/12 w-full">
                                <div className="border border-black h-1/2 w-full">MOVIE NAME</div>
                                <div className="border border-black h-1/2 w-full flex">
                                    <div>RATING</div>
                                    <div>2026</div>
                                </div>
                            </div>
                        </div>
                        {/* movie 1 */}
                        <div className="border-2 border-black h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="border border-black h-2/12 w-full">
                                <div className="border border-black h-1/2 w-full">MOVIE NAME</div>
                                <div className="border border-black h-1/2 w-full flex">
                                    <div>RATING</div>
                                    <div>2026</div>
                                </div>
                            </div>
                        </div>
                        {/* movie 1 */}
                        <div className="border-2 border-black h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="border border-black h-2/12 w-full">
                                <div className="border border-black h-1/2 w-full">MOVIE NAME</div>
                                <div className="border border-black h-1/2 w-full flex">
                                    <div>RATING</div>
                                    <div>2026</div>
                                </div>
                            </div>
                        </div>
                        {/* movie 1 */}
                        <div className="border-2 border-black h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="border border-black h-2/12 w-full">
                                <div className="border border-black h-1/2 w-full">MOVIE NAME</div>
                                <div className="border border-black h-1/2 w-full flex">
                                    <div>RATING</div>
                                    <div>2026</div>
                                </div>
                            </div>
                        </div>
                        {/* movie 1 */}
                        <div className="border-2 border-black h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="border border-black h-2/12 w-full">
                                <div className="border border-black h-1/2 w-full">MOVIE NAME</div>
                                <div className="border border-black h-1/2 w-full flex">
                                    <div>RATING</div>
                                    <div>2026</div>
                                </div>
                            </div>
                        </div>
                        {/* movie 1 */}
                        <div className="border-2 border-black h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="border border-black h-2/12 w-full">
                                <div className="border border-black h-1/2 w-full">MOVIE NAME</div>
                                <div className="border border-black h-1/2 w-full flex">
                                    <div>RATING</div>
                                    <div>2026</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    )
}

export default DashboardPage;