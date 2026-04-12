

function FilterDropdown(){
    const filterBlockCats = ["Format", "Status", "Genres", "Country"];
    
    return(
        <>
            <div className="flex gap-2 flex-col">
                <div className="text-gray-500 font-light">Filter</div>

                <div className="pl-2 flex gap-3.5 flex-col">
                    {filterBlockCats.map((filter, index) => {
                        return <div key={index} className="px-3 p-2 flex justify-between items-center bg-white font-light text-sm text-gray-400 shadow rounded">
                                    <div className="">{filter}</div>
                                    <i className='bx bx-chevron-down text-lg' ></i>
                                </div>
                    })}
                </div>

            </div>
        
        </>
    )
}

export default FilterDropdown;