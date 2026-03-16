

function StaffCard({ img, name, role }){

    return(
        <>
            <div className="h-25 w-80 mr-10 mb-6 flex bg-white rounded shadow-md">
                <div className="h-full w-1/4 bg-blue-300"></div>
                <div className="h-full w-3/4 ">
                    <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-600 text-sm">{ name || "Author"}</div>
                    <div className="h-1/2 w-full pl-1 flex justify-start items-center text-gray-500 text-xs">{ role || "Original Creator"}</div>
                </div>
            </div>
        </>
    )
}

export default StaffCard;