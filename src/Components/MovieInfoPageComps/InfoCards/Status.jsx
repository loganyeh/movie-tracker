

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
            <div className="h-full w-1/2 flex flex-col justify-center items-start">
 
                {/* Title */}
                <div className="h-10 w-11/12 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Status Distribution</div>

                <div className="2xl:h-36 xl:h-28 w-11/12 bg-white rounded shadow-md">
                    <div className="h-11/12 w-full flex justify-around items-center">

                        {/* statusess */}
                        {statusData.map((status, index) => {
                            return <div key={index} className="h-full w-1/6">
                                        <div className="h-1/2 w-full flex justify-center items-end">
                                            <div className={`h-8/12 w-full flex justify-center items-center text-white 2xl:text-base xl:text-sm ${status.bgColor} rounded-md`}>{status.title}</div>
                                        </div>
                                        <div className="h-auto w-full mt-2 flex justify-center items-center"><span className={`h-full mr-1 2xl:text-sm xl:text-xs ${status.textColor}`}>{status.users}</span><span className="h-full text-xs">Users</span></div>
                                    </div>
                        })}

                    </div>

                    {/* color bar */}
                    <div className="h-1/12 w-full flex rounded-b">
                        {statusColorBar.map((color, index) => {
                            return <div key={index} className={`h-full ${color.width} ${color.bgColor}`}></div>
                        })}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Status;