import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BrowsePage(){

    return(
        <>
            {/*  */}
            <div className="border-2 border-purple-600 h-screen w-screen">

                {/* header */}
                <div className="border-2 border-red-600 h-20 w-full flex">
                    {/* logo section */}
                    <div className="border-2 border-red-600 h-full w-1/3 flex justify-center items-center">
                        <div className="border border-black h-full w-1/3 flex justify-center items-center">
                            <div className="border border-black h-14 w-14"></div>
                        </div>
                    </div>
                    {/* nav section */}
                    <div className="border-2 border-red-600 h-full w-1/3 flex justify-center items-center text-sm font-medium">
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Home</div>
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Profile</div>
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Anime List</div>
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Manga List</div>
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Browse</div>
                        <div className="border border-black h-full w-1/6 flex justify-center items-center">Forum</div>
                    </div>
                    {/* profile settings section */}
                    <div className="border-2 border-blue-600 h-full w-1/3 flex justify-center items-center">
                        <div className="border-2 border-black h-full w-1/2 flex justify-end items-center">
                            <div className="border border-black h-10 w-10 flex justify-center items-center"><i className='bx bx-search border border-black text-2xl'></i></div>
                            <div className="border border-black h-10 w-10"></div>
                            <div className="border border-black h-10 w-6 flex justify-center items-center"><i className='bx bx-chevron-down text-2xl' ></i></div>
                            
                        </div>
                    </div>
                </div>


                {/* body */}
                <div className="border-2 border-blue-600 h-500 w-full flex flex-col justify-start items-center">

                    {/* search and filters */}
                    <div className="border border-black h-36 w-10/12">
                        <div className="border-2 border-red-600 h-full w-1/6 flex flex-col justify-center items-center">
                            <span className="border border-black">Search</span>
                            <div className="border border-black h-6 w-1/2"></div>
                        </div>
                    </div>


                    {/* anime posters */}
                    <div className="border border-black h-96 w-10/12">
                        <div className="h-1/12 w-full text-xl font-medium">Trending Now</div>
                        <div className="h-11/12 w-full flex">
                            <div className="border border-black h-full w-1/6">
                                <div className="border border-red-600 h-4/5 w-10/12"></div>
                            </div>
                            <div className="border border-black h-full w-1/6">
                                <div className="border border-red-600 h-4/5 w-10/12"></div>
                            </div>
                            <div className="border border-black h-full w-1/6">
                                <div className="border border-red-600 h-4/5 w-10/12"></div>
                            </div>
                            <div className="border border-black h-full w-1/6">
                                <div className="border border-red-600 h-4/5 w-10/12"></div>
                            </div>
                            <div className="border border-black h-full w-1/6">
                                <div className="border border-red-600 h-4/5 w-10/12"></div>
                            </div>
                            <div className="border border-black h-full w-1/6">
                                <div className="border border-red-600 h-4/5 w-10/12"></div>
                            </div>
                        </div>
                    </div>


                    <div className="border-4 border-black h-200 w-10/12">
                        <div>TESTING</div>
                    </div>


                </div>



                {/* footer */}
                <div className="border-2 border-red-600 h-72 w-full"></div>





            </div>
        </>
    )
}

export default BrowsePage;