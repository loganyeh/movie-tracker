

function StaffCard({ data }){

    return(
        <>
            <div className="min-h-28 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                <div className="h-auto w-1/4 bg-blue-300 rounded-l">
                    <img className="h-auto w-auto text-xs text-gray-400 rounded-l" src={`https://image.tmdb.org/t/p/original${data?.profile_path}`} alt="No Image" />
                </div>
                <div className="min-h-28 w-3/4 flex justify-center items-center">
                    <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-600 text-sm">{ data?.name || "Author"}</div>
                    <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-500 text-xs">{ data?.job || "Original Creator"}</div>
                </div>
            </div>
        </>
    )
}

export default StaffCard;