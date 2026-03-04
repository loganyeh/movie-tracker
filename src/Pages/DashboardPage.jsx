
function DashboardPage(){

    return(
        <>
            <div className="h-screen w-screen p-4">

                <div className="border-2 border-blue-600 h-1/2 w-full">

                    {/* header */}
                    <div className="h-1/4 w-full border-2 border-red-600 flex justify-between items-center">
                        <div className="h-full w-1/4 border border-black"></div>
                        <div className="h-full w-1/4 border border-black"></div>
                        <div className="h-full w-1/4 border border-black"></div>
                    </div>



                    {/* main title movie cards */}
                    <div className="h-1/2 w-full border-2 border-red-600 flex justify-around items-center">
                        <div className="border border-black h-full w-1/4"></div>
                        <div className="border border-black h-full w-2/4"></div>
                    </div>

                    {/* genres tabs */}
                    <div className="h-1/4 w-full border-2 border-red-600 flex justify-around items-center overflow-x-auto touch-pan-left">
                        <div className="border border-black h-full w-48 mx-12 shrink-0">Trending</div>
                        <div className="border border-black h-full w-48 mx-12 shrink-0">Action</div>
                        <div className="border border-black h-full w-48 mx-12 shrink-0">Romance</div>
                        <div className="border border-black h-full w-48 mx-12 shrink-0">Animation</div>
                        <div className="border border-black h-full w-48 mx-12 shrink-0">Horror</div>
                        <div className="border border-black h-full w-48 mx-12 shrink-0">Special</div>
                        <div className="border border-black h-full w-48 mx-12 shrink-0">Drakor</div>
                    </div>

                </div>

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
                        <div className="border-2 border-black h-full w-72">
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