
type SearchProp = {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ query, setQuery }: SearchProp ){

    return(
        <>
            <div className="w-full flex flex-col justify-between">

                <div className="hidden xl:flex text-lg text-gray-700 font-semibold">Search</div>                    
                <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" className="w-full p-2.5 text-sm font-medium bg-gray-50 outline-none rounded-lg shadow-md"/>

            </div>
        </>
    )
}

export default Search;