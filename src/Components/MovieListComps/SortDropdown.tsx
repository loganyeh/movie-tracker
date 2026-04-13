

function SortDropdown(){

    return(
        <>
            <div className="flex gap-2 flex-col">
                <div className="text-gray-500 font-light">Sort</div>


                <div className="ml-2 p-2 flex justify-between items-center bg-white font-light text-gray-400 shadow rounded">
                    <div className="text-sm">Score</div>
                    <i className='bx bx-chevron-down 2xl:text-xl xl:text-lg' ></i>
                </div>
            </div>
        
        </>
    )
}

export default SortDropdown;