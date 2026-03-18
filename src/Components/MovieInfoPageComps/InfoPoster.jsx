

function InfoPoster(){
    // console.log(data)

    return(
        <>
            <div className="border border-black h-80 w-1/2 -mt-36 bg-gray-400 shadow-md rounded">
            </div>
            <div className="h-14 w-1/2 flex justify-around items-start">
                <div className="h-2/3 w-auto flex justify-center items-center text-gray-100">
                    <span className="h-full w-27  flex justify-center items-center text-sm bg-blue-400 rounded-l">Add to List</span>
                    <div className="h-full w-10 flex justify-center items-center bg-blue-300 rounded-r"><i className='bx bx-chevron-down text-2xl' ></i></div>
                </div>
                <div className="h-2/3 w-1/6 flex justify-center items-center bg-red-600 rounded"><i className='bx bxs-heart text-white text-2xl'></i></div>
            </div>
        </>
    )
}

export default InfoPoster;