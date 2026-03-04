import 'boxicons';

function DashboardPage(){
    
    const genreSection = [
        {title: "Trending", icon: <box-icon type='solid' name='hot'></box-icon>},
        {title: "Action", icon: <box-icon name='run' ></box-icon>},
        {title: "Romance", icon: <box-icon name='heart' type='solid' ></box-icon>},
        {title: "Animation", icon: <box-icon name='dog' type='solid' ></box-icon>},
        {title: "Horror", icon: <box-icon name='ghost' ></box-icon>},
        {title: "Special", icon: <box-icon name='star' ></box-icon>},
        {title: "Drakor", icon: <box-icon name='moon' ></box-icon>},
    ]

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
                            <div>Search</div>
                        </div>
                        {/* profile and settings */}
                        <div className="h-full w-1/4 border border-black flex justify-around items-center">
                            <div className="border border-black h-14 w-14 rounded-full"></div>
                            <div className="border border-black h-14 w-14 rounded-full"></div>
                            <div className="border border-black h-14 w-24"></div>
                        </div>
                    </div>

                    {/* main title movie cards */}
                    <div className="h-8/12 w-full border-2 border-red-600 flex justify-between items-center">
                        <div className="border border-black h-full w-5/12 mr-4 rounded-3xl"></div>
                        <div className="border border-black h-full w-7/12 rounded-3xl"></div>
                    </div>

                    {/* genres tabs */}
                    <div className="h-2/12 w-full border-2 border-red-600 flex justify-between items-center overflow-x-auto touch-pan-left">

                        {genreSection.map((genre, index) => {
                            return <div key={index} className="border border-black h-full w-48 flex justify-center items-center shrink-0">
                                <div className='border border-red-600 flex'>
                                    <div className='border border-black h-8 w-8 flex justify-center items-center text-xl'>{genre.icon}</div>
                                    <div className='border border-black flex justify-center items-center font-medium'>{genre.title}</div>
                                </div>
                            </div>
                        })}

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