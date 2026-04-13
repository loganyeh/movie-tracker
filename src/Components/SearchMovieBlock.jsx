import Poster from "./TrendingBlockComponents/Poster.js";

function SearchMovieBlock({ data, query, setQuery, setMovieID }){

    return(
        <>
                <div className={`border ${!query ? "hidden" : ""} w-full max-w-7xl mb-20 flex gap-8 flex-col`}>
                    
                    {/* trending now title/header */}
                    <div className="flex justify-between">

                        {/* left side */}
                        <div className="flex gap-2 items-center text-lg text-gray-700 font-medium">

                            <i className='bx bxs-purchase-tag text-gray-400 text-2xl'></i>

                            <div onClick={() => {setQuery("")}} className={`border ${!query ? "hidden" : ""} px-2 py-0.5 flex gap-1.5 items-center text-sm text-gray-100 font-semibold bg-blue-400 rounded-md cursor-pointer`}>
                                <span className="">Search: {query}</span>
                                <i className='bx bx-x text-gray-100 bg-blue-400 cursor-pointer' ></i>
                            </div>
                            
                        </div>

                        {/* right side */}
                        <div className="flex gap-2 justify-end items-center text-xs text-gray-400 font-medium">

                            <div className="flex gap-2 items-center cursor-pointer hover:text-gray-500">
                                <div className="hidden md:flex flex-col cursor-pointer">
                                    <i className='bx bxs-up-arrow' ></i>
                                    <i className='bx bxs-down-arrow' ></i>
                                </div>
                                <span className="hidden md:flex text-md">Popularity</span>
                            </div>

                            <span className="hidden md:flex text-2xl font-thin">|</span>

                            {/* check why hidden is not working */}
                            <i className='hidden bx bxs-grid text-3xl text-gray-400 hover:text-gray-500 cursor-pointer' ></i>
                            <i className='bx bxs-grid-alt text-3xl text-gray-400 hover:text-gray-500 cursor-pointer' ></i>
                            <i className='bx bx-grid-horizontal text-3xl text-gray-400 hover:text-gray-500 cursor-pointer' ></i>

                        </div>
                    </div>


                    {/* Movie Search Grid */}
                    <div className="grid gap-2.5 md:gap-x-3 md:gap-y-5 lg:gap-y-8 xl:gap-x-8 xl:gap-y-10 grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-5">
                        {data.map((data, index) => {
                            return <Poster key={index} data={data} setMovieID={setMovieID} />
                        })}
                    </div>

                </div>
        </>
    )
}

export default SearchMovieBlock;