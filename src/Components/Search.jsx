import { useContext, useState, useEffect } from "react";
import { MyContext } from "../Context/MyContext";

function Search({ data }){
    const { isQuery, setIsQuery, query, setQuery } = useContext(MyContext);
    // const [query, setQuery] = useState();

    function handleSearch(e){
        console.log(data);
    }

    return(
        <>
            <div className="h-full w-56 flex flex-col justify-center items-start">
                <div className="h-10 w-48 flex justify-start items-center text-gray-700 text-md font-semibold">Search</div>
                {/* search input */}
                <div className="h-10 w-48 flex bg-gray-50 rounded-lg shadow-md">
                    <div onClick={handleSearch} className="h-full w-2/12 flex justify-center items-center"><i className='bx bx-search text-gray-500' ></i></div>
                    <input onChange={(e) => setQuery(e.target.value)} type="text" className=" h-full w-10/12 pl-2 text-sm font-medium bg-gray-50 rounded-lg outline-none"/>
                </div>
            </div>
        </>
    )
}

export default Search;