

function FilterDropdown({ category }){
    
    return(
        <>
            <div className="h-auto w-full mt-6">
                <div className="h-10 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Filter</div>

                <div className="h-auto w-full flex flex-col justify-center items-center">
                    {category.map((cat, index) => {
                        return <div key={index} className="h-8 w-11/12 my-2 px-2 flex justify-between items-center bg-white font-light text-sm text-gray-400 shadow rounded">
                                    <div className="flex justify-center items-center">{cat}</div>
                                    <div className="flex justify-center items-center"><i className='bx bx-chevron-down text-xl' ></i></div>
                                </div>
                    })}
                </div>

            </div>
        
        </>
    )
}

export default FilterDropdown;