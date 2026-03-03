
function DashboardPage(){

    return(
        <>
            <div className="h-screen w-screen">

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
                    <div className="h-1/4 w-full border-2 border-red-600 flex justify-around items-center">
                        <div className="border border-black h-full w-1/12">Trending</div>
                        <div className="border border-black h-full w-1/12">Action</div>
                        <div className="border border-black h-full w-1/12">Romance</div>
                        <div className="border border-black h-full w-1/12">Animation</div>
                        <div className="border border-black h-full w-1/12">Horror</div>
                        <div className="border border-black h-full w-1/12">Special</div>
                        <div className="border border-black h-full w-1/12">Drakor</div>
                    </div>

                </div>

                {/* trending movies */}
                <div className="border-2 border-blue-600 h-1/2 w-full" >
                    <div className="h-full w-full border-2 border-red-600 flex justify-around items-center">
                        <div className="border border-black h-10/12 w-2/12"></div>
                        <div className="border border-black h-10/12 w-2/12"></div>
                        <div className="border border-black h-10/12 w-2/12"></div>
                        <div className="border border-black h-10/12 w-2/12"></div>
                        <div className="border border-black h-10/12 w-2/12"></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashboardPage;