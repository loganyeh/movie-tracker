
type ListStatusProp = {
    title: string;
    category: string[];
}

function ListStatus({ title, category }: ListStatusProp){

    return(
        <>
            <div className="flex gap-2 flex-col">

                <div className="text-gray-500 font-light">{title}</div>

                {/* categorires for list */}
                <div className="pl-2 flex gap-2 flex-col">
                    <div className={`pl-2 p-0.5 bg-white text-sm text-gray-400 shadow rounded`}>All</div>
                        {category?.map((cat, index) => {
                            return <div key={index} className={`pl-2 p-0.5 text-sm text-gray-400`}>{cat}</div>
                        })}
                </div>

            </div>
        
        </>
    )
}

export default ListStatus;