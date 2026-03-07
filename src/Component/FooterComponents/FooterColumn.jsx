
function FooterColumn({ column }){

    return(
        <>
            <div className="border border-red-600 h-2/3 w-1/4">
                {column.map((rowName, index) => {
                    return <div key={index} className="text-md font-semibold mb-3">{rowName}</div>
                })}
            </div>
        </>
    )
}

export default FooterColumn;