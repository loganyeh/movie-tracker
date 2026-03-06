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

                <div className="h-1/2 w-full">

                    {/* header */}
                    <div className="h-2/12 w-full flex justify-between items-center">
                        {/* logo */}
                        <div className="h-full w-1/4 mb-4 flex justify-start items-center text-3xl font-light">Flix.id</div>
                        {/* nav bar */}
                        <div className="border border-black h-12 w-100 mb-4 flex justify-around items-center rounded-3xl">
                            <div>Movie</div>
                            <div>Series</div>
                            <div>Originals</div>
                            <div className='flex justify-center items-center cursor-pointer'><i className='bx bx-search-alt-2' ></i></div>
                        </div>
                        {/* profile and settings */}
                        <div className="h-full w-1/4 mb-4 flex justify-end">
                            <div className='h-full w-2/3 flex justify-around items-center'>
                                {/* settings */}
                                <div className="border border-black h-14 w-14 mr-1 flex justify-center items-center rounded-full"><i className='bx bx-bell' ></i></div>
                                {/* profile */}
                                <div className="border border-black h-14 w-14 mr-1 flex justify-center items-center rounded-full"><i className='bx bx-child'></i></div>
                                {/* name/status and dropdown */}
                                <div className="h-14 w-32 mr-1 flex">
                                    <div className='h-full w-2/3'>
                                        <div className='h-1/2 w-full flex justify-center items-center text-lg font-light'>Sarah J</div>
                                        <div className='h-1/2 w-full flex justify-center items-center text-sm font-light'>Premium</div>
                                    </div>
                                    {/* fix the arrow in the profile box */}
                                    <div className='h-full w-1/3 flex justify-center items-center'>
                                    <i className='bx bx-chevron-down text-4xl' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* main title movie cards */}
                    <div className="h-8/12 w-full flex justify-between items-center">
                        <div className="border border-black h-full w-5/12 mr-4 mb-4 rounded-3xl shadow-md"></div>
                        <div className="border border-black h-full w-7/12 mb-4 rounded-3xl shadow-md"></div>
                    </div>

                    {/* genres tabs */}
                    <div className="h-2/12 w-full flex justify-between items-center overflow-x-auto touch-pan-left">

                        <div className="border border-black h-full w-1/8 mr-2 flex justify-center items-center rounded-3xl shrink-0">
                            <div className='h-1/2 w-1/2 flex'>
                                <div className='h-full w-1/3 flex justify-center items-center text-xl'>
                                    <i className='bx bx-run text-2xl'></i>
                                </div>
                                <div className='h-full w-2/3 flex justify-center items-center text-2xl font-normal'>Action</div>
                            </div>
                        </div>
                        <div className="border border-black h-full w-1/8 mr-2 flex justify-center items-center rounded-3xl shrink-0">
                            <div className='h-1/2 w-1/2 flex'>
                                <div className='h-full w-1/3 flex justify-center items-center text-xl'>
                                    <i className='bx bx-run text-2xl'></i>
                                </div>
                                <div className='h-full w-2/3 flex justify-center items-center text-2xl font-normal'>Action</div>
                            </div>
                        </div>
                        <div className="border border-black h-full w-1/8 mr-2 flex justify-center items-center rounded-3xl shrink-0">
                            <div className='h-1/2 w-1/2 flex'>
                                <div className='h-full w-1/3 flex justify-center items-center text-xl'>
                                    <i className='bx bx-run text-2xl'></i>
                                </div>
                                <div className='h-full w-2/3 flex justify-center items-center text-2xl font-normal'>Action</div>
                            </div>
                        </div>
                        <div className="border border-black h-full w-1/8 mr-2 flex justify-center items-center rounded-3xl shrink-0">
                            <div className='h-1/2 w-1/2 flex'>
                                <div className='h-full w-1/3 flex justify-center items-center text-xl'>
                                    <i className='bx bx-run text-2xl'></i>
                                </div>
                                <div className='h-full w-2/3 flex justify-center items-center text-2xl font-normal'>Action</div>
                            </div>
                        </div>
                        <div className="border border-black h-full w-1/8 mr-2 flex justify-center items-center rounded-3xl shrink-0">
                            <div className='h-1/2 w-1/2 flex'>
                                <div className='h-full w-1/3 flex justify-center items-center text-xl'>
                                    <i className='bx bx-run text-2xl'></i>
                                </div>
                                <div className='h-full w-2/3 flex justify-center items-center text-2xl font-normal'>Action</div>
                            </div>
                        </div>
                        <div className="border border-black h-full w-1/8 mr-2 flex justify-center items-center rounded-3xl shrink-0">
                            <div className='h-1/2 w-1/2 flex'>
                                <div className='h-full w-1/3 flex justify-center items-center text-xl'>
                                    <i className='bx bx-run text-2xl'></i>
                                </div>
                                <div className='h-full w-2/3 flex justify-center items-center text-2xl font-normal'>Action</div>
                            </div>
                        </div>
                        <div className="border border-black h-full w-1/8 mr-2 flex justify-center items-center rounded-3xl shrink-0">
                            <div className='h-1/2 w-1/2 flex'>
                                <div className='h-full w-1/3 flex justify-center items-center text-xl'>
                                    <i className='bx bx-run text-2xl'></i>
                                </div>
                                <div className='h-full w-2/3 flex justify-center items-center text-2xl font-normal'>Action</div>
                            </div>
                        </div>
                        <div className="border border-black h-full w-1/8 mr-2 flex justify-center items-center rounded-3xl shrink-0">
                            <div className='h-1/2 w-1/2 flex'>
                                <div className='h-full w-1/3 flex justify-center items-center text-xl'>
                                    <i className='bx bx-run text-2xl'></i>
                                </div>
                                <div className='h-full w-2/3 flex justify-center items-center text-2xl font-normal'>Action</div>
                            </div>
                        </div>
                        
                        

                    </div>

                </div>

                {/* --------------------------------------------------------------------- */}
                {/* trending movies */}
                <div className="h-1/2 w-full" >
                    {/* header */}
                    <div className="h-2/12 w-full flex">
                        <div className="h-full w-1/2 flex justify-start items-center text-4xl font-light">Trending in Animation</div>
                        <div className="h-full w-1/2 flex justify-end items-center">
                            <div className="border border-black h-11 w-40 flex rounded-3xl">
                                <div className="border-r border-black h-full w-1/2 flex justify-center items-center">
                                    <i className='bx bx-filter text-2xl'></i>
                                </div>
                                <div className="h-full w-1/2 flex justify-center items-center">
                                    <i className='bx bx-filter-alt text-2xl' ></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* movie posters */}
                    <div className="h-10/12 w-full flex justify-between">
                        {/* movie 1 */}
                        <div className="h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="h-2/12 w-full">
                                <div className="h-1/2 w-full flex justify-start items-center">MOVIE NAME</div>
                                <div className="h-1/2 w-full flex">
                                    <div className="flex justify-start items-center">
                                        <i className='bx bx-star mr-1' ></i>8.0
                                    </div>
                                    <div className="flex justify-center items-center mx-1">|</div>
                                    <div className="flex justify-start items-center">2026</div>
                                </div>
                            </div>
                        </div>
                        {/* movie 1 */}
                        <div className="h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="h-2/12 w-full">
                                <div className="h-1/2 w-full flex justify-start items-center">MOVIE NAME</div>
                                <div className="h-1/2 w-full flex">
                                    <div className="flex justify-start items-center">
                                        <i className='bx bx-star mr-1' ></i>8.0
                                    </div>
                                    <div className="flex justify-center items-center mx-1">|</div>
                                    <div className="flex justify-start items-center">2026</div>
                                </div>
                            </div>
                        </div>
                        {/* movie 1 */}
                        <div className="h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="h-2/12 w-full">
                                <div className="h-1/2 w-full flex justify-start items-center">MOVIE NAME</div>
                                <div className="h-1/2 w-full flex">
                                    <div className="flex justify-start items-center">
                                        <i className='bx bx-star mr-1' ></i>8.0
                                    </div>
                                    <div className="flex justify-center items-center mx-1">|</div>
                                    <div className="flex justify-start items-center">2026</div>
                                </div>
                            </div>
                        </div>
                        {/* movie 1 */}
                        <div className="h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="h-2/12 w-full">
                                <div className="h-1/2 w-full flex justify-start items-center">MOVIE NAME</div>
                                <div className="h-1/2 w-full flex">
                                    <div className="flex justify-start items-center">
                                        <i className='bx bx-star mr-1' ></i>8.0
                                    </div>
                                    <div className="flex justify-center items-center mx-1">|</div>
                                    <div className="flex justify-start items-center">2026</div>
                                </div>
                            </div>
                        </div>
                        {/* movie 1 */}
                        <div className="h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="h-2/12 w-full">
                                <div className="h-1/2 w-full flex justify-start items-center">MOVIE NAME</div>
                                <div className="h-1/2 w-full flex">
                                    <div className="flex justify-start items-center">
                                        <i className='bx bx-star mr-1' ></i>8.0
                                    </div>
                                    <div className="flex justify-center items-center mx-1">|</div>
                                    <div className="flex justify-start items-center">2026</div>
                                </div>
                            </div>
                        </div>
                        {/* movie 1 */}
                        <div className="h-full w-1/7">
                            <div className="border border-black h-10/12 w-full rounded-4xl"></div>
                            <div className="h-2/12 w-full">
                                <div className="h-1/2 w-full flex justify-start items-center">MOVIE NAME</div>
                                <div className="h-1/2 w-full flex">
                                    <div className="flex justify-start items-center">
                                        <i className='bx bx-star mr-1' ></i>8.0
                                    </div>
                                    <div className="flex justify-center items-center mx-1">|</div>
                                    <div className="flex justify-start items-center">2026</div>
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