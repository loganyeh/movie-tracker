

function FilterSearchBar(){

    return(
        <>
            <div className="flex gap-4 items-center">
                <div className="px-3 py-2.5 flex gap-2 flex-1 items-center text-gray-400 font-light bg-white shadow rounded">
                    <i className='bx bx-search' ></i>
                    <div className="text-sm">Filter</div>
                </div>

                <div className="md:hidden">
                    <i className='bx bx-dots-horizontal-rounded p-2.5 bg-white rounded shadow'></i>
                </div>
            </div>
        </>
    )
}

export default FilterSearchBar;