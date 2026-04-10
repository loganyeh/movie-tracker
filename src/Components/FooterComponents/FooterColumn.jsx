
function FooterColumn({ column }){

    return(
        <>
            <div className="flex flex-col gap-3">
                {column.map((rowName, index) => {
                    return <div key={index} className="text-gray-400 font-semibold text-sm tracking-wide">{rowName}</div>
                })}
            </div>
        </>
    )
}

export default FooterColumn;