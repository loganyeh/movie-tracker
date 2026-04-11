

function Status(){

    const statusData = [
        {title: "Completed", users: "739395", bgColor: "bg-green-500", textColor: "text-green-500"},
        {title: "Planning", users: "70084", bgColor: "bg-blue-500", textColor: "text-blue-500"},
        {title: "Current", users: "69333", bgColor: "bg-purple-500", textColor: "text-purple-500"},
        {title: "Paused", users: "16242", bgColor: "bg-pink-400", textColor: "text-pink-400"},
        {title: "Dropped", users: "14653", bgColor: "bg-red-400", textColor: "text-red-400"},
    ];

    const statusColorBar = [
        {width: "w-8/12", bgColor: "bg-green-500"},
        {width: "w-2/12", bgColor: "bg-blue-500"},
        {width: "w-2/12", bgColor: "bg-purple-500"},
        {width: "w-1/12", bgColor: "bg-pink-400"},
        {width: "w-1/12", bgColor: "bg-red-400"},
    ]

    return(
        <>
            <div className="flex gap-2 flex-col">
 
                {/* Title */}
                <div className="text-gray-600 font-semibold">Status Distribution</div>

                <div className="bg-white rounded shadow-md">
                    {/* status */}
                    <div className="px-3 py-5 flex gap-3 lg:justify-around overflow-x-auto smooth-scroll">
                        {statusData.map((status, index) => {
                            return <div key={index} className="flex gap-1 flex-col">
                                        <div className={`px-4 py-1.5 text-white ${status.bgColor} text-center text-xs rounded`}>{status.title}</div>
                                        <div className="flex gap-1 text-xs"><span className={`${status.textColor}`}>{status.users}</span>Users</div>
                                    </div>
                        })}
                    </div>

                    {/* color bar */}
                    <div className="flex rounded-b">
                        {statusColorBar.map((color, index) => {
                            return <div key={index} className={`h-2.5 ${color.width} ${color.bgColor}`}></div>
                        })}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Status;