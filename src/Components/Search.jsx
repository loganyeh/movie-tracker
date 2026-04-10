import { useContext, useState, useEffect } from "react";
import { MyContext } from "../Context/MyContext";

function Search({ data }){
    const { isQuery, setIsQuery, query, setQuery } = useContext(MyContext);

    function handleSearch(e){
        console.log(data);
    }

    return(
        <>
            <div className="flex flex-col justify-between">

                <div className="text-gray-700 font-semibold">Search</div>
                {/* search input */}
                {/* <div className=""> */}
                    
                    {/* <i onClick={handleSearch} className='bx bx-search text-gray-500' ></i> */}
                    {/* <div onClick={handleSearch} className="border flex justify-center items-center"><i className='bx bx-search text-gray-500' ></i></div> */}
                    
                <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" className="w-full p-2.5 text-sm font-medium bg-gray-50 outline-none rounded-lg shadow-md"/>
                    
                    {/* <i onClick={() => {setQuery("")}} className={`bx bx-x ${!query ? "hidden" : ""} text-gray-400 hover:text-gray-600 cursor-pointer`} ></i> */}
                    {/* <div onClick={() => {setQuery("")}} className={`${!query ? "hidden" : ""} h-full w-1/12 flex justify-center items-center`}><i className='bx bx-x text-gray-400 hover:text-gray-600 cursor-pointer' ></i></div> */}

                {/* </div> */}
            </div>
        </>
    )
}

export default Search;