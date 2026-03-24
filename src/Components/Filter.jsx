

function Filter({ title }){

    return(
        <>
            <div className="h-full w-56 flex flex-col justify-center items-start">
                <div className="h-10 w-48 flex justify-start items-center text-gray-700 text-md font-semibold">{title}</div>
                {/* filters */}
                <div className="h-10 w-48 flex bg-gray-50 rounded-lg shadow-md">
                    {/* <input type="text" placeholder="Any" className=" h-full w-10/12 pl-4 text-sm font-medium bg-gray-50 rounded-lg outline-none"/> */}
                    <div className="h-full w-10/12 pl-4 flex justify-start items-center text-sm text-gray-400 font-medium bg-gray-50 rounded-lg outline-none">Any</div>
                    {/* <div className="h-full w-2/12 flex justify-center items-center cursor-pointer"><i className='bx bx-chevron-down text-xl text-gray-400 hover:text-gray-500' ></i></div> */}
                    <div className="h-full w-2/12 flex justify-center items-center"><i className='bx bx-chevron-down text-xl text-gray-400' ></i></div>
                </div>
            </div>
        </>
    )
}

export default Filter;