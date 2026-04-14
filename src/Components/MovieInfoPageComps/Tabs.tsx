

function Tabs(){
    const tabNames = ["Overview", "Watch", "Characters", "Staff", "Reviews", "Stats", "Social"];

    return(
        <>
            <div className="px-10 md:px-0 py-2 md:py-4 flex gap-6 lg:gap-10 xl:gap-20 md:justify-center overflow-x-scroll scroll-smooth">
                {tabNames.map((tab, index) => {
                    return <div key={index} className="text-xs md:text-sm text-gray-500 font-light">{tab}</div>
                })}
            </div>
        </>
    )
}

export default Tabs;