

function FilterDropdown({ category }){
    
    return(
        <>
            <div className="h-auto w-full mt-6">
                <div className="2xl:h-10 xl:h-8 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Filter</div>

                <div className="h-auto w-full flex flex-col justify-center items-center">
                    {category.map((cat, index) => {
                        return <div key={index} className="2xl:h-8 xl:h-6 w-full my-2 px-2 flex justify-between items-center bg-white font-light text-sm text-gray-400 shadow-md rounded">
                                    <div className="flex justify-center items-center">{cat}</div>
                                    <div className="flex justify-center items-center"><i className='bx bx-chevron-down 2xl:text-xl xl:text-lg' ></i></div>
                                </div>
                    })}
                </div>

            </div>
        
        </>
    )
}

export default FilterDropdown;