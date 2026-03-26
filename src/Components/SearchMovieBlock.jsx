import Poster from "./TrendingBlockComponents/Poster";
import { useState, useContext, useEffect } from "react";
import { MyContext } from "../Context/MyContext";

function SearchMovieBlock({ data }){
    const { query, setQuery } = useContext(MyContext);

    return(
        <>
            {/* <div className="border-2 border-yellow-400 h-200 w-10/12 mb-10">
            </div> */}
                <div className={`${!query ? "hidden" : ""} min-h-96 w-10/12 mb-6`}>
                    
                    {/* trending now title/header */}
                    <div className="h-8 w-full flex mb-4">
                        <div className="h-full w-1/2 flex justify-start items-center text-lg text-gray-700 font-medium">

                            <div className="flex justify-center items-center mr-4"><i className='bx bxs-purchase-tag text-gray-400 text-2xl'></i></div>

                            <div onClick={() => {setQuery("")}} className={`${!query ? "hidden" : ""} h-10/12 w-auto pl-2 flex justify-center items-center text-sm text-gray-100 font-semibold bg-blue-400 rounded cursor-pointer`}>
                                <span>Search: {query}</span>
                                <div className="h-10/12 w-6 flex justify-center items-center bg-blue-400 cursor-pointer"><i className='bx bx-x text-gray-100' ></i></div>
                            </div>
                            
                        </div>

                        <div className="h-full w-1/2 flex justify-end items-center text-xs text-gray-400 font-medium">

                            <div className="flex justify-center items-center cursor-pointer hover:text-gray-500">
                                <div className="h-full w-auto mr-2 flex flex-col justify-center items-center cursor-pointer">
                                    <i className='bx bxs-up-arrow' ></i>
                                    <i className='bx bxs-down-arrow' ></i>
                                </div>
                                <span className="mr-3 text-md">Popularity</span>
                            </div>

                            <span className="mr-2 text-2xl font-thin">|</span>

                            <div className="h-full w-auto flex justify-center items-center">
                                <i className='bx bxs-grid mr-1 text-3xl text-gray-400 hover:text-gray-500 cursor-pointer' ></i>
                                <i className='bx bxs-grid-alt mr-1 text-3xl text-gray-400 hover:text-gray-500 cursor-pointer' ></i>
                                <i className='bx bx-grid-horizontal mr-1 text-3xl text-gray-400 hover:text-gray-500 cursor-pointer' ></i>
                            </div>

                        </div>
                    </div>

                    {/* --------------- */}

                    {/* movie posters */}
                    <div className="h-11/12 w-full flex flex-wrap">
                        {data.map((data, index) => {
                            return <Poster key={index} data={data} />
                        })}
                    </div>
                    
                    {/* work on this logic not correct */}
                    {/* <div className={`${query ? "" : "hidden"} h-96 w-full pt-16 flex justify-center items-start text-2xl text-gray-500 font-semibold`}>No Results</div> */}

                </div>
        </>
    )
}

export default SearchMovieBlock;