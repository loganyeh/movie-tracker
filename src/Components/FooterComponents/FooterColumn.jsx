
function FooterColumn({ column }){

    return(
        <>
            <div className="h-2/3 w-1/4">
                {column.map((rowName, index) => {
                    return <div key={index} className="text-md text-gray-400 font-semibold mb-3">{rowName}</div>
                    // return <div key={index} className="text-md text-gray-400 font-semibold mb-3 cursor-pointer hover:text-blue-400">{rowName}</div>
                })}
            </div>
        </>
    )
}

export default FooterColumn;