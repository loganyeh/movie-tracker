

function StaffCard({ data }){

    return(
        <>
            <div className="h-auto 2xl:w-80 xl:w-5/12 mr-10 mb-6 flex bg-white rounded shadow-md">
                <div className="h-auto 2xl:w-1/4 xl:w-auto bg-blue-300 rounded-l">
                    <img className="2xl:h-auto w-auto xl:h-28 text-xs text-gray-400 rounded-l" src={`https://image.tmdb.org/t/p/original${data?.profile_path}`} alt="No Image" />
                </div>
                <div className="h-28 w-3/4 flex justify-around items-center">
                    <div className="h-full w-auto pl-1 flex justify-start items-center text-gray-600 text-sm">{ data?.name || "Author"}</div>
                    <div className="h-full w-auto pl-1 flex justify-start items-center text-gray-500 text-xs">{ data?.job || "Original Creator"}</div>
                </div>
            </div>
        </>
    )
}

export default StaffCard;