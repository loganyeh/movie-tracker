

function AllTimeStat({ boxicon, ranking, text }){

    return(
        <>
            <div className="2xl:h-10 xl:h-8 w-2/3 2xl:m-2 xl:m-1.5 flex justify-center items-center 2xl:text-sm xl:text-xs font-medium bg-white shadow-md rounded-md">
                <div className="2xl:mr-2 xl:mr-1">{boxicon}</div>
                <div className="text-gray-600">#{ranking} {text} All Time</div>
            </div>
        </>
    )
}

export default AllTimeStat;