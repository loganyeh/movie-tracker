

function StatIconsBlock({ data }){
    const statsIconData = [
        {icon: 'bx bx-desktop', number: 75, category: "Total Anime"},
        {icon: 'bx bx-play', number: 1736, category: "Episodes Watched"},
        {icon: 'bx bx-calendar-alt', number: 28.6, category: "Days Watched"},
        {icon: 'bx bx-hourglass', number: 40.3, category: "Days Planned"},
        {icon: 'bx bx-objects-vertical-top', number: 78.21, category: "Mean Score"},
        {icon: 'bx bx-checkbox-minus', number: 14.2, category: "Standard Deviation"},
    ];

    return(
        <>
            <div className="p-4 grid gap-x-6 gap-y-14 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
                {statsIconData.map((stat, index) => {
                    return <div key={index} className="flex gap-4 items-center">
                                <i className= {`${stat.icon} p-2 text-gray-400 text-2xl bg-white rounded-full shadow`}></i>

                                <div className="flex gap-1.5 flex-col flex-1">
                                    <div className="text-2xl text-blue-400 font-semibold">{stat.number || "75"}</div>
                                    <div className="text-sm text-gray-500 font-medium">{stat.category || "Total Anime"}</div>
                                </div>
                            </div>
                })}
            </div>
        </>
    )
}

export default StatIconsBlock;