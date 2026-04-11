

function AllTimeStat({ boxicon, ranking, text }){

    return(
        <>
            <div className="hidden py-2 md:flex gap-2 justify-center text-xs font-medium bg-white shadow rounded">
                <div className="">{boxicon}</div>
                <div className="text-gray-500">#{ranking} {text} All Time</div>
            </div>
        </>
    )
}

export default AllTimeStat;