

function Filter({ title }){

    return(
        <>
            <div className="flex flex-col gap-3">
                <div className="text-gray-700 font-semibold">{title}</div>
                {/* filters */}
                <div className="w-full p-2.5 flex justify-between items-center text-gray-400 bg-gray-50 rounded-lg shadow-md">
                    <div className="2xl:text-sm xl:text-xs font-medium outline-none">Any</div>
                    <i className='bx bx-chevron-down text-xl' ></i>
                </div>
            </div>
        </>
    )
}

export default Filter;