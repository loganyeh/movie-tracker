

function Tabs(){
    const tabNames = ["Overview", "Watch", "Characters", "Staff", "Stats", "Review", "Social"];

    return(
        <>
            <div className="h-2/12 w-2/3 flex justify-center items-center">
                <div className="h-full w-full flex justify-between items-center">
                    {tabNames.map((tab, index) => {
                        return <div key={index} className="text-sm text-gray-500 font-semibold">{tab}</div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Tabs;