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
                <div className="border-2 border-red-600 h-500 w-full"></div>



                {/* footer */}
                <div className="border-2 border-red-600 h-72 w-full"></div>





            </div>
        </>
    )
}

export default BrowsePage;