

function Tabs(){
    const tabNames = ["Overview", "Watch", "Characters", "Staff", "Reviews", "Stats", "Social"];

    return(
        <>
            <div className="px-10 py-2 flex gap-6 overflow-x-scroll scroll-smooth">
                {tabNames.map((tab, index) => {
                    return <div key={index} className="text-xs text-gray-500 font-light">{tab}</div>
                })}
            </div>
        </>
    )
}

export default Tabs;