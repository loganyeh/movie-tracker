

function Filter({ title }){

    return(
        <>
            <div className="h-full w-56 flex flex-col justify-center items-start">
                <div className="2xl:h-10 xl:h-8 w-48 flex justify-start items-center text-gray-700 text-base font-semibold">{title}</div>
                {/* filters */}
                <div className="2xl:h-10 2xl:w-48 xl:h-8 xl:w-40 flex bg-gray-50 rounded-lg shadow-md">
                    <div className="h-full w-10/12 pl-4 flex justify-start items-center 2xl:text-sm xl:text-xs text-gray-400 font-medium bg-gray-50 rounded-lg outline-none">Any</div>
                    <div className="h-full w-2/12 flex justify-center items-center"><i className='bx bx-chevron-down text-xl text-gray-400' ></i></div>
                </div>
            </div>
        </>
    )
}

export default Filter;