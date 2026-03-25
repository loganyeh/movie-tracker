

function FilterSearchBar(){

    return(
        <>
            <div className="2xl:h-10 xl:h-8 w-full pl-2 mt-6 flex justify-start items-center text-gray-400 font-light bg-white shadow-md rounded">
                <div className="mr-2 flex justify-center items-center"><i className='bx bx-search 2xl:text-xl xl:text-sm' ></i></div>
                <div className="flex justify-center items-center 2xl:text-base xl:text-sm">Filter</div>
            </div>
        </>
    )
}

export default FilterSearchBar;