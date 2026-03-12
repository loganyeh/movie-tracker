

function AllTimeStat({ boxicon, ranking, text }){

    return(
        <>
            <div className="h-10 w-2/3 m-2 flex justify-center items-center text-sm font-medium bg-white shadow-md rounded-lg">
                {/* <div className="mr-2"><i className='bx bxs-star text-yellow-300 text-xl' ></i></div> */}
                <div className="mr-2">{boxicon}</div>
                <div className="text-gray-600">#{ranking} {text} All Time</div>
            </div>
        </>
    )
}

export default AllTimeStat;