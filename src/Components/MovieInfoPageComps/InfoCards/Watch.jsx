

function Watch(){

    const watchData = [
        {number: "1", title: "Cruelty"},
        {number: "2", title: "Trainer"},
        {number: "3", title: "Sabito"},
        {number: "4", title: "Final Selection"},
    ];

    return(
        <>
            <div className="h-auto w-11/12 mb-6 flex">
                <div className="h-full w-full flex flex-col justify-center items-start">

                    {/* STATUS */}
                    <div className="h-10 w-full flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Watch</div>
                    <div className="h-auto w-full flex flex-wrap items-center">

                        {watchData.map((watch, index) => {
                            return <div key={index} className="relative h-28 w-72 mb-6 mr-8 gap-2 flex justify-center items-end bg-blue-300 rounded shadow-md z-0">
                                        <div className="absolute h-8 w-full flex pl-4 justify-start items-center text-white text-sm bg-black opacity-80 z-10">
                                            <span className="pr-1">Episode</span>
                                            <span className="pr-1">{watch.number}</span>
                                            <span className="pr-1">-</span>
                                            <span className="pr-1">{watch.title}</span>
                                        </div>
                                    </div>
                        })}
                        
                    </div>

                </div>

            </div>
        </>
    )
}

export default Watch;