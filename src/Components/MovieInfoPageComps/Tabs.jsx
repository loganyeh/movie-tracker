

function Tabs(){
    const tabNames = ["Overview", "Watch", "Characters", "Staff", "Reviews", "Stats", "Social"];

    return(
        <>
            <div className="px-10 md:px-0 py-2 flex gap-6 md:justify-center overflow-x-scroll scroll-smooth">
                {tabNames.map((tab, index) => {
                    return <div key={index} className="text-xs md:text-sm text-gray-500 font-light">{tab}</div>
                })}
            </div>
        </>
    )
}

export default Tabs;