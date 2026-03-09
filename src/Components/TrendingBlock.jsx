import Poster from "./TrendingBlockComponents/Poster";

function TrendingBlock({ title, data }){


    return(
        <>
            <div className="h-96 w-10/12 mb-6">
                {/* trending now title/header */}
                <div className="h-1/12 w-full flex">
                    <div className="h-full w-1/2 flex justify-start items-center text-lg text-gray-700 font-medium">{title}</div>
                    <div className="h-full w-1/2 flex justify-end items-center text-xs text-gray-400 font-medium">
                        <span className="cursor-pointer hover:text-gray-700">View All</span>
                    </div>
                </div>

                {/* movie posters */}
                <div className="h-11/12 w-full flex">
                    {data.map((data, index) => {
                        return <Poster key={index} data={data} />
                    })}
                </div>
            </div>
        </>
    )
}

export default TrendingBlock;