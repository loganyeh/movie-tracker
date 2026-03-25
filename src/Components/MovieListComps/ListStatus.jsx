

function ListStatus({ title, category }){

    return(
        <>
            <div className="h-auto w-full mt-6">
                <div className="2xl:h-10 xl:h-8 w-full pl-2 flex justify-start items-center text-base text-gray-500 font-light">{title}</div>

                {/* categorires for list */}
                <div className="h-auto w-full flex flex-col justify-center items-center">
                    <div className={`2xl:h-8 xl:h-6 w-11/12 pl-2 my-2 flex justify-start items-center bg-white text-sm text-gray-400 shadow rounded`}>All</div>
                        {category?.map((cat, index) => {
                            return <div key={index} className={`2xl:h-8 xl:h-6 w-11/12 pl-2 2xl:my-1 xl:my-2 flex justify-start items-center text-sm text-gray-400`}>{cat}</div>
                        })}
                </div>

            </div>
        
        </>
    )
}

export default ListStatus;