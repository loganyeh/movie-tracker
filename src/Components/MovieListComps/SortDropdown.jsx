

function SortDropdown(){

    return(
        <>
            <div className="h-auto w-full mt-6">
                <div className="2xl:h-10 xl:h-8 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Sort</div>

                <div className="h-auto w-full flex flex-col justify-center items-center">
                    <div className="2xl:h-8 xl:h-6 w-full my-2 px-2 flex justify-between items-center bg-white font-light text-md text-gray-400 shadow rounded">
                        <div className="flex justify-center items-center text-sm">Score</div>
                        <div className="flex justify-center items-center"><i className='bx bx-chevron-down 2xl:text-xl xl:text-lg' ></i></div>
                    </div>
                </div>

            </div>
        
        </>
    )
}

export default SortDropdown;